# Build Toolchain

## 工具链

一组 JavaScript 构建工具链通常由这些组成：

* 一个包管理器，比如 Yarn 或 npm
* 一个打包器，比如 webpack 或 Parcel
* 一个编译器，比如 Babel

## 其他工具

* [Terser](https://terser.org/)：JavaScript 解析器和压缩器

## 过时的工具

* gulp：https://gulpjs.com/
* grunt：https://gruntjs.com/

## 前端构建工具进化历程

https://mp.weixin.qq.com/s/o8B8HAczZtIZM8V_HHwNqg





| Bundler        | Build Tool       |      |
| -------------- | ---------------- | ---- |
| Rspack         | Rsbuild          |      |
| Webpack        | Vue CLI          |      |
| Webpack        | Create React App |      |
| Esbuild+Rollup | Vite             |      |



|              | Rsbuild                                     | Vue CLI/CRA   | Vite                                              |
| ------------ | ------------------------------------------- | ------------- | ------------------------------------------------- |
| 底层框架     | Rspack                                      | Webpack       | Esbuild/Rollup                                    |
| 前端 UI 框架 | 解耦，通过插件支持Vue、React、Svelte、Solid | Vue/React专属 | 主要支持Vue，也可通过插件支持React、Svelte、Solid |
| 扩展性       | 配置、插件API、JavaScript API               |               |                                                   |
| 生态兼容性   | 兼容大部分webpack插件和所有rspack插件       |               | 兼容rollup插件                                    |
| 生产一致性   | 开发阶段和生产构建都使用rspack              |               | 开发阶段使用esbuild，生产构建使用rollup           |







