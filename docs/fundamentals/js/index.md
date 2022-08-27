# JavaScript

EcmaScript

BOM

DOM


## 变量

### var声明

* 未声明就是使用会报错：`ReferenceError: x is not defined`
* 重复声明无效，第二次声明是无效的。但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。
* **变量提升**
* 对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）


## 数据类型
### 基本数据类型

* undefined
* boolean
* number
* string
* object
* null
* symbol  es2015
* bigint   es2020

###  引用数据类型

* object
* array
* function

### 内存分配
* 基本数据类型：栈中
* 引用数据类型：堆中

### number

#### NaN
```js
typeof NaN // 'number'
NaN === NaN // false
isNaN(NaN) // true
```
#### Infinity
```js
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
```

### null  和 undefined
```js
console.log(null == undefined)  // true
console.log(null === undefined)  // false
```

### string

* `btoa()`：任意值转为 Base64 编码
* `atob()`：Base64 编码转为原来的值

### object

* 如果键名是数值，会被自动转为字符串。

* 数字键可以不加引号，因为会自动转成字符串。`obj[3]`
* delete删除对象不存在的属性也会返回true。
* `delete`命令只能删除对象本身的属性，无法删除继承的属性。
* `in`运算符用于检查对象是否包含某个属性。但它不能识别哪些属性是对象自身的，哪些属性是继承的。

### array

* 数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。`Object.keys(arr) // ["0", "1", "2"]`
* JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（232 - 1）个，也就是说`length`属性的最大值就是 4294967295。
* 只要是数组，就一定有`length`属性。该属性是一个动态的值，等于键名中的最大整数加上`1`。
* 数组的数字键不需要连续，`length`属性的值总是比最大的那个整数键大`1`。
* `length`属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员数量会自动减少到`length`设置的值。
* 清空数组的一个有效方法，就是将`length`属性设为0。
* 数组的空位值是undefined。使用`delete`命令删除一个数组成员，会形成空位，并且不会影响`length`属性。
* 如果是空位，使用数组的`forEach`方法、`for...in`结构、以及`Object.keys`方法进行遍历，空位都会被跳过。
* 如果一个对象的所有键名都是正整数或零，并且有`length`属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。
* 类数组对象：字符串，函数的`arguments`对象，以及大多数 DOM 元素集。
* 数组的`slice`方法可以将“类似数组的对象”变成真正的数组。
* 



## 运算符

### 算术运算符

* **指数运算符**：`x ** y`
* **余数运算符**：`x % y`  余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果。


### and or 返回操作数
```js
// 如果第一个操作数是对象，则返回第二个操作数
console.log({} && true)  // true
console.log({} && false)  // false
console.log({} && 1)  // 1
console.log({} && 'str')  // str
console.log({} && [])  // []
console.log({} && {s:1})  // [s:1]

// 如果第二个操作数是对象，则只有第一个操作数求值为true时才返回该对象
console.log(false && {}) // false
console.log(true && {}) // {}
console.log(1 && {}) // {}
console.log([] && {}) // {}
console.log({s:2} && {}) // {}
```
```js
// 如果第一个操作数是对象则返回第一个操作数
console.log({} || false)  // {}
// 如果第一个操作数求值为false，则返回第二个操作数
console.log(false || true)  // true
console.log(0 || 1)  // 1
console.log('' || 'T')  // T
console.log(null || {})  // {}
console.log(undefined || [])  // []
```

### 位运算符

* **二进制否运算符**（not）：符号为`~`，一个数与自身的取反值相加，等于-1。
* **异或运算符**（xor）：符号为`^`，表示若两个二进制位不相同，则结果为1，否则为0。
* **左移运算符**（left shift）：符号为`<<`，表示将一个数的二进制值向左移动指定的位数，尾部补`0`，即乘以`2`的指定次方。向左移动的时候，最高位的符号位是一起移动的。
* **右移运算符**（right shift）：符号为`>>`，表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补`0`；如果是负数，头部全部补`1`。右移运算符基本上相当于除以`2`的指定次方（最高位即符号位参与移动）。
* 头部补零的右移运算符（`>>>`）与右移运算符（`>>`）只有一个差别，就是一个数的二进制形式向右移动时，头部一律补零，而不考虑符号位。所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符（`>>`）完全一致，区别主要在于负数。

## 异常机制

### 原生错误类型

> `SyntaxError`对象是解析代码时发生的语法错误。
>
> `ReferenceError`对象是引用一个不存在的变量时发生的错误。
>
> `RangeError`对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是`Number`对象的方法参数超出范围，以及函数堆栈超过最大值。
>
> `TypeError`对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用`new`命令，就会抛出这种错误，因为`new`命令的参数应该是一个构造函数
>
> `URIError`对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及`encodeURI()`、`decodeURI()`、`encodeURIComponent()`、`decodeURIComponent()`、`escape()`和`unescape()`这六个函数。

### 自定义异常

```js
function MyError(message) {
  this.message = message || '默认错误信息';
  this.name = 'MyError';
}

MyError.prototype = new Error();
MyError.prototype.constructor = MyError;

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

function test1() {
  throw new MyError('test1');
}

function test2() {
  throw new CustomError('test2');
}

try {
  test1();
} catch (e) {
  console.log(e.message); // test1
}

try {
  test2();
} catch (e) {
  console.log(e.message); // test2
}
```




## 参考教程
https://wangdoc.com/javascript/