# 数据类型

## 基本数据类型

* undefined
* boolean
* number
* string
* object
* null
* symbol  es2015
* bigint   es2020

##  引用数据类型

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

