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

## Reference

* https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html

