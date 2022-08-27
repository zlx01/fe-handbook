# JavaScript对象属性遍历

定义对象

```js
const obj = Object.create(
  { a: 1, b: 2 },
  {
    c: {
      value: 3,
      writable: true,
      configurable: true,
      enumerable: true,
    },
    d: {
      value: 4,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  }
);
obj.e = 5;
obj.f = 6;
obj.a = 11;
```

## for in

* 它遍历的是对象所有可遍历（enumerable）的属性。

* 它不仅遍历对象自身的属性，还遍历继承的属性。
* 如果实例对象和原型链上的对象存在同名属性，以实例对象为准，也就是该属性只遍历1次。观察 `obj.a` （面试考点）

```js
for (let key in obj) {
  console.log("key: ", key, ", value: ", obj[key]);
}
// key:  c , value:  3
// key:  e , value:  5
// key:  f , value:  6
// key:  a , value:  11
// key:  b , value:  2
```

* 如果要排除原型链上的属性，用 `hasOwnProperty` 方法

  ```js
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log("key: ", key, ", value: ", obj[key]);
    }
  }
  // key:  c , value:  3
  // key:  e , value:  5
  // key:  f , value:  6
  // key:  a , value:  11
  ```

## Object.keys()

* 对象自身的（不含继承的）所有「可遍历属性」的键名

```js
console.log(Object.keys(obj))
// ['c', 'e', 'f', 'a']
```

## Object.getOwnPropertyNames()

* 对象自身的（不含继承的）所有键名，包括不可遍历属性。

```js
console.log(Object.getOwnPropertyNames(obj))
// [ 'c', 'd', 'e', 'f', 'a' ]
```