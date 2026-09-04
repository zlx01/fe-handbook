# [Webpack](https://webpack.js.org/)

* Written in JavaScript

* [处理ts](./handle-ts)
* [构建umd格式的包](./build-umd-pkg)


## 替换字符串/环境变量

Vue.version = '__VERSION__'


## Plugins

### [Image Minimizer Plugin](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/)

需要配合其他图片压缩工具使用，如：

* imagemin
* sharp
* svgo


## [Module Federation](https://webpack.js.org/concepts/module-federation/)

> 模块联邦（Module Federation，简称 MF）是一种让多个 JavaScript 应用可以共享代码和资源的技术方案。它类似于服务端的微服务架构，允许你将大型应用拆分成多个独立的小应用，这些小应用可以独立开发、测试和部署，同时还能在运行时动态加载其他应用的模块。

> 使用模块联邦可以解决多个前端应用之间代码重复的问题。传统方式下，如果多个应用需要使用相同的组件或工具函数，需要在每个应用中重复安装这些代码，导致代码重复、维护成本高、应用体积变大。使用模块联邦后，你可以将公共代码放在一个应用中，其他应用按需动态加载，实现代码共享，减少重复。
