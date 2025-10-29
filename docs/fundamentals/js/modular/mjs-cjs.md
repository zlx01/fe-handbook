> `.mjs`文件总是以 ES6 模块加载，`.cjs`文件总是以 CommonJS 模块加载，`.js`文件的加载取决于`package.json`里面`type`字段的设置。

## CommonJS 模块加载 ES6 模块

```js
(async () => {
  await import('./ejs-package.mjs');
})();
```

## ES6 模块加载 CommonJS 模块

```js
// 只能整体加载
import packageMain from 'cjs-package';
```

## 同时支持ESM和CJS的模块

```json
{
  "exports": {
    "require": "./index.js",
    "import": "./esm/index.js"
  }
}
```

## CommonJS vs ES6 Module (ESM)

| 对比项                | **CommonJS**                        | **ES6 Module (ESM)**                            |
| :----------------- | :---------------------------------- | :---------------------------------------------- |
| **语法**             | `require()` / `module.exports`      | `import` / `export`                             |
| **加载时机**           | **运行时加载**（执行时动态引入模块）                | **编译时加载**（编译阶段静态分析依赖）                           |
| **导出方式**           | 赋值给 `module.exports` 或 `exports` 对象 | 使用 `export` / `export default` 声明导出             |
| **导入方式**           | `const a = require('./a')`          | `import a from './a.js'`                        |
| **导出值的拷贝类型**       | **值拷贝（拷贝一份导出的结果）**                  | **引用绑定（实时绑定）**                                  |
| **执行顺序**           | 模块在第一次 `require()` 时同步执行一次          | 模块在编译阶段确定依赖关系后异步加载执行                            |
| **是否异步加载**         | 否（**同步加载**，适合 Node.js 后端）           | 是（**异步加载**，适合浏览器环境）                             |
| **作用域**            | 模块有自己的独立作用域                         | 模块也有自己的作用域（同样不会污染全局）                            |
| **this 指向**        | 顶层 `this` 指向 `module.exports`       | 顶层 `this` 为 `undefined`                         |
| **Node.js 原生支持情况** | Node.js 默认支持（无需额外配置）                | Node.js 需在 `"type": "module"` 下使用或文件扩展名为 `.mjs` |
| **浏览器支持情况**        | 不支持原生浏览器导入                          | 现代浏览器原生支持 `<script type="module">`              |
| **循环依赖处理**         | 返回已执行部分的结果（可能是空对象）                  | 返回绑定引用（引用可能未初始化）                                |
| **用途**             | Node.js 服务端模块系统                     | 前端标准模块系统（Node.js 也逐步支持）                         |


## Reference

* https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html

