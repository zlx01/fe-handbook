# [browserslist](https://github.com/browserslist/browserslist)

> Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env

> 会被 @babel/preset-env 和 Autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。

## Usage

* `browserslist` field in `package.json`
* `.browserslistrc` file

例如 vue 项目的 `browserslist` 配置

```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```

* "> 1%"：支持市场占有率大于 1% 的浏览器。
* "last 2 versions"：支持浏览器的最新两个版本。
* "not dead"：不支持已经停止维护的浏览器。

## 技术依赖

* https://github.com/browserslist/caniuse-lite
* https://caniuse.com/

