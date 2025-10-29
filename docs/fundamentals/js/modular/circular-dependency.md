# circular dependency

## 🧩 一、示例场景

假设有两个模块：`a.js` 和 `b.js`
 互相引用对方：

```
a.js → 引入 b.js  
b.js → 引入 a.js
```

------

## 🧱 二、CommonJS 的循环依赖处理机制

### ✅ 加载机制

- CommonJS 模块是 **运行时加载**。
- `require()` 是**同步执行**的。
- 当 Node.js 执行 `require('b')` 时，如果 `b` 又 `require('a')`，而 `a` 尚未执行完毕，就会**返回当前已执行部分的结果（不完整的导出对象）**。

------

### 🧪 示例

#### a.js

```
console.log('a 开始加载');
exports.done = false;
const b = require('./b.js');
console.log('在 a 中，b.done =', b.done);
exports.done = true;
console.log('a 加载完毕');
```

#### b.js

```
console.log('b 开始加载');
exports.done = false;
const a = require('./a.js');
console.log('在 b 中，a.done =', a.done);
exports.done = true;
console.log('b 加载完毕');
```

#### main.js

```
require('./a.js');
```

#### 运行结果：

```
a 开始加载
b 开始加载
在 b 中，a.done = false
b 加载完毕
在 a 中，b.done = true
a 加载完毕
```

------

### 📖 解释

- 当 `a` 加载 `b` 时，`a` 还没执行完（`exports.done` 还没改为 `true`），
   所以 `b` 得到的是一个**未完成的 exports 对象（部分导出）**。
- 最终两者都能完成加载，但在加载顺序上出现**部分未初始化**的情况。

------

## 🧬 三、ES6 Module 的循环依赖处理机制

### ✅ 加载机制

- ES Module 是 **编译时确定依赖关系**，**导出是绑定引用（live binding）**。
- 即使存在循环依赖，每个模块内部的 `export` 声明在解析时就被创建了“引用绑定”。
- 但**在模块执行之前，导出的值还没被赋值**。

------

### 🧪 示例

#### a.mjs

```
import { done as bDone } from './b.mjs';
console.log('在 a 中，b.done =', bDone);
export const done = true;
```

#### b.mjs

```
import { done as aDone } from './a.mjs';
console.log('在 b 中，a.done =', aDone);
export const done = true;
```

#### main.mjs

```
import './a.mjs';
```

#### 运行结果：

```
在 b 中，a.done = undefined
在 a 中，b.done = true
```

------

### 📖 解释

- 在解析阶段，`a` 和 `b` 都知道对方导出了 `done`。
- 但当 `b` 执行时，`a` 还未执行到 `export const done = true;`，
   因此 `a.done` 是 **`undefined`**。
- 执行到 `a` 时，`b.done` 已经赋值完成。

------

## ⚙️ 四、总结对比表

| 特性                 | **CommonJS**                                 | **ES6 Module (ESM)**                             |
| -------------------- | -------------------------------------------- | ------------------------------------------------ |
| **加载时机**         | 运行时（执行时同步加载）                     | 编译时（静态依赖分析）                           |
| **循环依赖时返回值** | 返回**已执行部分的导出对象**（可能不完整）   | 返回**绑定引用**（尚未初始化可能为 `undefined`） |
| **导出值类型**       | 值拷贝                                       | 引用绑定（live binding）                         |
| **执行顺序**         | 依赖链逐层同步执行，遇循环时中断返回部分结果 | 全部模块先建立引用，再依次执行初始化代码         |
| **结果表现**         | “部分导出”问题（exports 未完整）             | “暂时为 undefined”问题（live binding 尚未赋值）  |

------

💡 **总结一句话：**

- CommonJS 在循环依赖中返回**部分执行的对象**。
- ES6 Module 返回**引用绑定（可能是 undefined）**，但不会出现导出丢失。
