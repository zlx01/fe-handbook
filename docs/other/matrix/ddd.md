# DDD: 领域驱动设计

**Domain-Driven Design（DDD，领域驱动设计）**是一种围绕业务来设计软件的方法：先弄清楚业务中的概念和规则，再让代码表达它们。

比如做商城，先讨论“订单什么时候可以付款、付款后能不能取消”，再考虑数据库和接口怎么写。DDD 的重点是让业务人员说的话与代码中的概念对应起来，业务变化时也更容易找到要改的地方。

## 先理解业务和边界

### 领域与子域

**领域**就是软件要解决的业务问题范围，**子域**是其中更小的一块业务。

例如，一个电商系统涉及商品、交易、库存、物流等子域。划分的依据是业务职责，而不是 Controller、Service、DAO 这样的技术分类。

### 统一语言

**统一语言**是让业务人员和开发人员在同一个业务范围内使用一致的词汇。

例如，大家约定“待付款订单”指已经创建但尚未完成付款的订单，代码就使用 `PENDING_PAYMENT`，避免有人叫“新订单”，有人叫“未完成订单”，各自理解不同。

### 限界上下文

**限界上下文**就是一套业务概念和模型适用的明确边界。同一个词，在不同边界内可以有不同含义。

例如，“商品”在交易上下文中关注名称和成交价格，在库存上下文中关注库存数量和仓库位置。没必要把所有信息都塞进一个通用的 `Product` 类。

子域描述“业务如何划分”，限界上下文描述“模型在哪里适用”，两者有关联，但不必严格一一对应。限界上下文也不等于微服务，一个单体应用里同样可以划分多个上下文。

## 用哪些对象表达业务

以下继续以订单为例：

| 概念 | 通俗理解 | 订单示例 |
| --- | --- | --- |
| 实体（Entity） | 靠身份区分，属性变化后仍然是同一个对象 | 订单改了状态，只要订单 ID 不变，就还是那张订单 |
| 值对象（Value Object） | 只关心值，不关心独立身份，通常设计为不可变 | 金额由数值和币种组成，值相同就表示同样的金额 |
| 聚合（Aggregate） | 为了维护业务规则，作为一个整体管理的一组对象 | 订单和订单项组成订单聚合，例如已付款后不能再修改订单项 |
| 聚合根（Aggregate Root） | 聚合对外的入口，负责维护整体规则 | 外部通过订单的方法修改订单项，不能绕过订单随意修改内部状态 |
| 仓储（Repository） | 提供读取、保存聚合的接口，隐藏持久化细节 | 用订单 ID 取出订单，修改后保存，不让订单自己写 SQL |

聚合不是把相关对象全部打包进去。商品、库存虽然与订单有关，通常也不需要都放进订单聚合，可以通过 ID 关联。

## Java 示例：订单只能付款一次

业务规则很简单：**只有待付款订单才能付款，已经付款的订单不能重复付款。**

下面使用 Java 17 的 `record` 表达值对象。为突出核心概念，省略订单项和数据库实现；各类型可分别放在同一个包下的文件中。

```java
import java.math.BigDecimal;
import java.util.Objects;

// 值对象：本例只处理人民币，以“分”为单位，避免浮点误差。
record Money(long cents) {
    Money {
        if (cents <= 0) {
            throw new IllegalArgumentException("金额必须大于 0");
        }
    }

    BigDecimal yuan() {
        return BigDecimal.valueOf(cents, 2);
    }
}

enum OrderStatus {
    PENDING_PAYMENT, PAID
}

// 实体，同时也是订单聚合的根。
final class Order {
    private final String id;
    private final Money total;
    private OrderStatus status = OrderStatus.PENDING_PAYMENT;

    Order(String id, Money total) {
        this.id = Objects.requireNonNull(id);
        this.total = Objects.requireNonNull(total);
    }

    // 通过有业务含义的方法修改状态，而不是开放 setStatus()。
    void markPaid() {
        if (status != OrderStatus.PENDING_PAYMENT) {
            throw new IllegalStateException("只有待付款订单才能付款");
        }
        status = OrderStatus.PAID;
    }
}
```

这里 `Order` 不只是存数据，还负责保护自己的规则。无论哪个入口调用 `markPaid()`，都要经过相同的状态检查。

`Money` 没有 ID，`new Money(9900).equals(new Money(9900))` 为 `true`，两者都表示 99 元人民币。本例约定订单金额必须为正；实际业务是否允许零金额，应由业务规则决定。

再用仓储和应用服务串起操作：

```java
import java.util.Optional;

interface OrderRepository {
    Optional<Order> findById(String id);
    void save(Order order);
}

// 应用服务：组织一次操作，业务规则仍然由 Order 负责。
final class OrderApplicationService {
    private final OrderRepository orders;

    OrderApplicationService(OrderRepository orders) {
        this.orders = orders;
    }

    void confirmPayment(String orderId) {
        Order order = orders.findById(orderId)
            .orElseThrow(() -> new IllegalArgumentException("订单不存在"));

        order.markPaid();
        orders.save(order);
    }
}
```

这段代码只演示确认付款后的订单状态变化，不执行真实扣款。实际系统还要验证支付结果，并通过事务、乐观锁等机制处理并发，不能只依赖内存中的状态判断。

## 应用服务和领域服务有什么区别

**应用服务**负责“安排步骤”，例如上面的查订单、调用订单行为、保存订单；**领域服务**负责“不适合放进某个实体或值对象的业务规则”，例如需要综合多个订单和会员等级的优惠资格判断。

并不是所有业务逻辑都要放进名字带 `Service` 的类。能由订单自己负责的规则，就放在订单中；确实没有合适归属时，再考虑领域服务。

常见的分工是：接口层接收请求，应用层组织操作，领域层表达业务概念和规则，基础设施层实现数据库访问等技术细节。上面的 `Order`、`Money` 属于领域层，仓储的数据库实现则属于基础设施层。

## 什么时候适合使用

DDD 更适合规则复杂、经常变化、需要与业务人员反复沟通的系统。如果只是简单的增删改查，没必要为了套概念增加大量接口和分层。

入门时先做到两点：**把业务概念叫清楚，把业务规则放到合适的对象中。** 不需要一开始就引入微服务、CQRS 或事件溯源，它们都不是 DDD 的必选项。
