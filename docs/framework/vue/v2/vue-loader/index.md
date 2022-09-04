# Vue Loader

> Vue Loader 是一个 webpack 的 loader，它允许你以一种名为单文件组件 (SFCs)的格式撰写 Vue 组件

下面记录开发经常使用的

## 处理资源路径

当 Vue Loader 编译单文件组件中的 \<template> \<style>块时，它也会将所有遇到的资源 URL 转换为 **webpack 模块请求**。内部使用了两个loader：

* file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。
* url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 file-loader 处理。

## css预处理器

> npm install -D sass-loader node-sass
>
> npm install -D less less-loader
>
> npm install -D stylus stylus-loader
>
> npm install -D postcss-loader

## Scoped CSS

* 通过PostCSS转换，原来的选择器会复合属性选择器[data-v-uid]

* 优先选择类选择器或id选择器

* 混用本地和全局样式：在一个组件中同时使用有 scoped 和非 scoped 样式
* 子组件的根元素：使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。
* 深度作用选择器
  * stylus的样式穿透 使用 >>>
  * sass、scss和less的样式穿透 使用 /deep/
  * sass、scss和less的样式穿透 使用 ::v-deep
  * /deep/  ::v-deep 都是>>>的别名

* 动态生成的内容：通过 v-html 创建的 DOM 内容不受 scoped 样式影响，但是你仍然可以通过深度作用选择器来为他们设置样式。
* 在递归组件中小心使用后代选择器! 对选择器 .a .b 中的 CSS 规则来说，如果匹配 .a 的元素包含一个递归子组件，则所有的子组件中的 .b 都将被这个规则匹配

## Vue 单文件组件 (SFC) 规范

### 模板

* 每个 `.vue` 文件最多包含一个 `<template>` 块。
* 内容将被提取并传递给 `vue-template-compiler` 为字符串，预处理为 JavaScript 渲染函数，并最终注入到从 `<script>` 导出的组件中。

### 脚本

* 每个 `.vue` 文件最多包含一个 `<script>` 块。
* 这个脚本会作为一个 ES Module 来执行。
* 它的**默认导出**应该是一个 Vue.js 的[组件选项对象](https://cn.vuejs.org/v2/api/#选项-数据)。也可以导出由 `Vue.extend()` 创建的扩展对象，但是普通对象是更好的选择。
* 任何匹配 `.js` 文件 (或通过它的 `lang` 特性指定的扩展名) 的 webpack 规则都将会运用到这个 `<script>` 块的内容中。

### 样式

* 默认匹配：`/\.css$/`。
* 一个 `.vue` 文件可以包含多个 `<style>` 标签。
* `<style>` 标签可以有 scoped 或者 module 属性。
* 任何匹配 `.css` 文件 (或通过它的 `lang` 特性指定的扩展名) 的 webpack 规则都将会运用到这个 `<style>` 块的内容中。