# [Rsbuild](https://rsbuild.dev/)







## 插件系统

* 通过插件实现对框架的支持：Vue，React
* 通用基础插件：Babel、Sass、Less、Stylus
* 检测：ESLint、Type Check、Check Syntax

* 性能优化相关：Assets Retry、Image Compress、CSS Minimizer





自动添加浏览器前缀。无需  [autoprefixer](https://github.com/postcss/autoprefixer) 插件



使用 [PostCSS](https://rsbuild.dev/zh/guide/basic/css-usage#使用-postcss) 来转换 CSS 代码



CSS 资源压缩



CSS 预处理器

使用 CSS Modules

CSS-in-JS

引用 node_modules 里的样式



内联 CSS 文件

将样式内联到 JS 文件中，当浏览器请求到 JS 文件后，JS 将动态地向 HTML 插入 `` 标签，以此加载 CSS 样式。

这将会增大你的 JS Bundle 体积，因此通常情况下，不太建议禁用 CSS 提取逻辑。



语法降级和 polyfill 注入



在进行 TypeScript 转译时，SWC 和 Babel 等工具不会执行类型检查。