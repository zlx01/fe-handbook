# [Babel](https://babeljs.io/)

Babel is a JavaScript compiler.

## use babel in browser

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>use babel in browser</title>
  </head>
  <body>
    <div id="output"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const getMessage = () => "Hello World";
      document.getElementById('output').innerHTML = getMessage();
    </script>
  </body>
</html>
```

## use babel in WebStorm

1. install dependencies


```shell
npm install @babel/preset-env --save-dev
npm install --save-dev @babel/cli
```

2. babel.config.json

```json
{
  "presets": ["@babel/preset-env"]
}
```

3. webstorm settings

![](./assets/webstorm-file-watchers.png)

4. 新增文件自动编译

![image-20220827170832518](./assets/image-20220827170832518.png)

## use babel in webpack

代码：https://github.com/zlx01/ok-babel

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'development'
};
```

入口文件 index.js

```js
const foo = () => {
  const element = document.createElement('div');
  element.innerHTML = "Hello World";
  document.body.appendChild(element);
}

foo();
```

webpack打包之后部分代码如下，可以看到还保留 ES6 的语法。

```js
eval("const foo = () => {\r\n  const element = document.createElement('div');\r\n  element.innerHTML = \"Hello World\";\r\n  document.body.appendChild(element);\r\n}\r\n\r\nfoo();\r\n\n\n//# sourceURL=webpack://hello/./src/index.js?");
```

接下来加入 [babel-loader](https://github.com/babel/babel-loader)

1. install dependencies

```shell
npm install @babel/preset-env --save-dev
npm install --save-dev babel-loader @babel/core
```

2. webpack.config.js

```js
{
  // ...
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
```

3. 观察打包后的代码

```js
eval("var foo = function foo() {\n  var element = document.createElement('div');\n  element.innerHTML = \"Hello World\";\n  document.body.appendChild(element);\n};\n\nfoo();\n\n//# sourceURL=webpack://hello/./src/index.js?");
```

## Configuration File Types

* Project-wide configuration
  * :+1: `babel.config.*` files, with the following extensions: `.json`, `.js`, `.cjs`, `.mjs`.
* File-relative configuration
  * `.babelrc.*` files, with the following extensions: `.json`, `.js`, `.cjs`, `.mjs`.
  * `.babelrc` file, with no extension.
  * `package.json` files, with a `"babel"` key.

## presets

* 预定义的babel配置
* 最常用：`@babel/preset-env` 转换最新的JavaScript语法

## plugins

* 本质上是一个函数
* 更小粒度的转换，专注于某个语法

## Other

* Babel 默认只转换新的 JavaScript syntax，而不转换新的 API

