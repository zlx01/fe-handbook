# globalThis

`globalThis` 是一个标准化的全局对象引用，可以在任何环境中访问全局对象，而不需要考虑具体的运行环境（如浏览器、Node.js 等）。

```js
console.log(globalThis === window); // 浏览器中为 true
console.log(globalThis === global); // Node.js 中为 true
```

| 环境         | 全局对象     |
| ------------ | ------------ |
| 浏览器主线程 | `window`     |
| Web Worker   | `self`       |
| Node.js      | `global`     |
| 通用写法     | `globalThis` |


## [globals](https://www.npmjs.com/package/globals)

* 提供不同 JavaScript 运行环境中预定义的全局变量清单。
* 给 ESLint 提供“当前运行环境有哪些合法全局变量”的字典。

