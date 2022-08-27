# JavaScript确定值的类型

## 1.typeof运算符

```js
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"

typeof undefined // "undefined"

typeof function(){} // "function"

typeof {} // "object"
typeof [] // "object"
typeof null // "object"
```

### 特殊说明

* typeof可以用来检查一个没有声明的变量，而不报错

  ```js
  v // ReferenceError: v is not defined
  typeof v // "undefined"
  ```

* 在 JavaScript 内部，数组本质上只是一种特殊的对象。
* null 也是一种特殊的对象。



## 2.instanceof运算符

**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```js
var v = {}
v instanceof Object // true

var v = []
v instanceof Array // true
v instanceof Object // true

function f(){}
f instanceof Function // true
f instanceof Object // true
```

### 特殊说明

* 构造函数即是函数，也是特殊的对象

    ```js
    Function instanceof Function // true
    Function instanceof Object // true
    Object instanceof Function // true
    Object instanceof Object // true
    ```

### 自定义instanceof （面试常考）

```js
function isInstanceof(obj, Type) {
  if (typeof Type !== 'function') {
    throw Error('Type 必须是一个构造函数！')
  }

  let pt = Type.prototype
  let proto = obj.__proto__;
  // let proto = Object.getPrototypeOf(obj);
  while(proto) {
    if (proto === pt) {
      return true
    }
    proto = proto.__proto__
    // proto = Object.getPrototypeOf(proto)
  }
  return false
}

function Foo(){}
function Person(){}
class Student extends Person{}

let p = new Person()
let s = new Student()

console.log(isInstanceof(p, Foo))       // false
console.log(isInstanceof(p, Person))    // true
console.log(isInstanceof(p, Object))    // true

console.log(isInstanceof(s, Student))  // true
console.log(isInstanceof(s, Person))  // true

console.log(isInstanceof(Foo, Function)) // true
console.log(isInstanceof(Foo, Object))   // true
```

### Object.prototype.isPrototypeOf()

```js
function isInstanceof(obj, Type) {
    return Object.prototype.isPrototypeOf.call(Type.prototype, obj)
}
```



## 3.Object.prototype.toString()

```js
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call(function (){})  // [object Function]
```

### 自定义函数获取类型（面试常考）

```js
function getDataType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    // return Object.prototype.toString.call(obj).match(/\[object (.*?)]/)[1].toLowerCase();
    // return Object.prototype.toString.call(obj).replace(/^\[object (.+)]$/, '$1').toLowerCase();
}

console.log(getDataType(34.4))  // number
console.log(getDataType({}))    // object
console.log(getDataType([]))    // array
console.log(getDataType(function (){})) // function
```

## Array
```js
[] instanceof Array	// true
Array.isArray([])	// true
```
## Object
```js
function isObject(value) {
  return value === Object(value);
}

isObject([]) // true
isObject({}) // true
isObject(function(){} ) // true
isObject(true) // false
```