# TDD：测试驱动开发

TDD（Test-Driven Development，测试驱动开发）是一种开发方式：**先写测试，明确代码应该做到什么，再写代码让测试通过。**

可以把它理解成：先定好“验收标准”，再动手实现。比如“订单满 100 元免运费”，就先把这条规则写成能自动执行的测试，让程序帮我们检查结果。

它与写完功能再补测试的区别，在于测试参与了开发过程：每次先确定一个小目标，再围绕这个目标实现功能。

## 三个步骤：红、绿、重构

1. **红：写一个测试，运行并确认它失败。** 功能还没实现，失败是预期结果，也能确认测试确实在检查目标行为。
2. **绿：写最少的实现，让测试通过。** 先满足当前需求，不急着添加其他功能。
3. **重构：在测试通过的前提下整理代码。** 比如改善命名、提取重复逻辑，整理后再运行测试，确保行为没有改变。

每增加一条规则，就重复这个小循环。

## Java 示例：计算运费

假设规则是：**订单满 100 元免运费，不满 100 元收取 10 元运费。** 为了简化示例，金额使用整数元，暂不考虑负数等输入校验。

下面使用 JUnit 5 编写测试，假设项目已经配置好测试依赖。

### 1. 红：先写测试

先验证“满 100 元免运费”，在 `ShippingFeeTest.java` 中写下：

```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ShippingFeeTest {
    @Test
    void freeShippingWhenAmountReaches100() {
        assertEquals(0, new ShippingFee().calculate(100));
    }
}
```

`assertEquals(0, 实际结果)` 表示：期望结果是 `0`，实际结果不是 `0` 时，测试就失败。

此时类还不存在，代码无法编译。先在 `ShippingFee.java` 中补一个最小骨架，让测试能运行：

```java
public class ShippingFee {
    public int calculate(int amount) {
        return 10;
    }
}
```

运行测试：期望运费为 `0`，实际为 `10`，测试失败，进入“红”的状态。

### 2. 绿：让测试通过，再补充规则

把 `calculate` 方法改成下面这样，第一个测试就能通过：

```java
public int calculate(int amount) {
    return 0;
}
```

这还不是完整实现，只满足了当前测试。接着，在测试类中新增“不满 100 元”的测试：

```java
@Test
void chargeShippingWhenAmountIsBelow100() {
    assertEquals(10, new ShippingFee().calculate(99));
}
```

再次运行测试，新测试失败。然后修改实现，让两个测试都通过：

```java
public int calculate(int amount) {
    return amount >= 100 ? 0 : 10;
}
```

还可以补一个 `calculate(101)` 应返回 `0` 的测试，覆盖超过门槛的情况。如果它已经通过，就不需要为了新测试强行修改实现。

### 3. 重构：让代码更好读

可以用常量解释数字的含义，计算规则保持不变：

```java
public class ShippingFee {
    private static final int FREE_SHIPPING_THRESHOLD = 100;
    private static final int STANDARD_FEE = 10;

    public int calculate(int amount) {
        return amount >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_FEE;
    }
}
```

再次运行全部测试，确认仍然通过。代码已经足够清晰时，也可以不做重构。

## TDD 的价值

TDD 帮助我们把需求变成明确、可执行的例子，并在修改代码时及时发现已有行为被破坏。上面的 `99` 和 `100`，就能帮助检查免运费的边界是否写对。

不过，**测试通过只代表已覆盖的场景符合预期，不代表程序没有任何问题。** TDD 的重点也不是追求测试数量，而是用小步验证推动实现。
