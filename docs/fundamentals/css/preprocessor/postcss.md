# [postcss](https://postcss.org/)

> :+1: A tool for transforming CSS with JavaScript

## 使用场景

* Add vendor prefixes to CSS rules using values from Can I Use. [Autoprefixer](https://github.com/postcss/autoprefixer) will use the data based on current browser popularity and property support to apply prefixes for you.
* [PostCSS Preset Env](https://preset-env.cssdb.org/), lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments, using [cssdb](https://cssdb.org/).
* [css-modules](https://github.com/css-modules/css-modules) means you never need to worry about your names being too generic, just use whatever makes the most sense.
* Enforce consistent conventions and avoid errors in your stylesheets with [stylelint](https://github.com/stylelint/stylelint), a modern CSS linter. It supports the latest CSS syntax, as well as CSS-like syntaxes, such as SCSS.

### 1. 自动添加浏览器前缀（Autoprefixer）

这是 PostCSS 最知名、使用量最大的场景。`autoprefixer` 插件基于 [Can I Use](https://caniuse.com/) 的数据，自动为 CSS 属性添加所需的厂商前缀。

* **输入**：

  ```css
  .box {
    user-select: none;
  }
  ```

* **输出**：

  ```css
  .box {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  ```

相比 Sass/Less 的混合宏，它更精准、数据可配置，且无需手动维护。

------

### 2. 使用未来的 CSS 语法（postcss-preset-env）

`postcss-preset-env` 可以将 **W3C 规范中已稳定但浏览器尚未完全支持** 的 CSS 特性，编译成当前浏览器能理解的代码。它其实是一个预设插件包，包含了众多 polyfill 类插件。

常见转换包括：

* **CSS 嵌套**（对标 Sass 嵌套，但遵循未来原生语法）
* **自定义属性**（CSS 变量）在不支持的浏览器中静态替换
* **`oklch()`、`hwb()` 等颜色函数** 降级为 `rgb/rgba`
* **`clamp()`、`min()`、`max()`** 的降级处理
* **逻辑属性**（如 `margin-inline-start`）转为物理属性
* **`:has()`、`:is()`、`:where()` 等伪类** 的兼容处理

这让开发者在 **直接书写标准 CSS** 的同时，享受到预处理器的便利，且代码未来可无损切换为原生。

------

### 3. CSS 模块化（CSS Modules）

CSS Modules 本身并非 PostCSS 插件，但它的主流实现（如 `css-loader`、`vite` 内建支持）底层都依赖 PostCSS 来完成作用域隔离：

* 将 `.title` 编译成 `.title_abc123` 这样唯一的类名。
* 配合 `postcss-modules-values` 等插件实现变量跨文件共享。
* 解决全局污染和样式冲突，尤其适合 React、Vue 等组件化开发。

------

### 4. 代码质量与风格检查（Stylelint）

Stylelint 是目前最主流的 CSS 代码检查工具。它通过 PostCSS 解析 CSS（以及类 CSS 的 SCSS、Less、CSS-in-JS），理解代码结构后进行规则校验：

* 禁止重复选择器
* 强制声明顺序（配合 `postcss-sorting`）
* 限制最大嵌套深度
* 检查颜色格式、单位使用等

几乎所有的 Lint 规则都在 PostCSS AST 上运行。

------

### 5. 高级压缩与优化（cssnano）

`cssnano` 是一个用于生产环境的 PostCSS 插件集合，专门对 CSS 进行深度优化：

* 移除空格、注释、无用的分号
* 缩短颜色值（`#ffffff` → `#fff`）
* 合并相邻规则（如 `margin-top`, `margin-bottom` → `margin`）
* 重新计算 z-index
* 去除重复的 `@keyframes` 和字体声明

通常被 Vite、Webpack 的 CSS 处理流程直接内建调用。

------

### 6. 自定义预处理能力（按需组装“轻量级预处理器”）

如果不愿引入 Sass/Less 整个生态，可以用 PostCSS 插件**按需搭建**一个轻量级预处理器：

| 需求          | 插件举例                 |
| :------------ | :----------------------- |
| 变量          | `postcss-simple-vars`    |
| 混合宏        | `postcss-mixins`         |
| 循环          | `postcss-for`            |
| 条件判断      | `postcss-conditionals`   |
| 嵌套          | `postcss-nested`         |
| 颜色函数      | `postcss-color-function` |
| 引入/合并文件 | `postcss-import`         |

这种方式生成的是标准 CSS，不绑定特定方言，且处理速度通常更快。

------

### 7. 设计系统与自动化转换

PostCSS 可以充当设计令牌与代码之间的桥梁：

* **px → rem / vw**：`postcss-pxtorem` 或 `postcss-px-to-viewport` 自动将像素单位转换为弹性单位，常用于移动端适配。
* **RTL（从右到左）适配**：`postcss-rtlcss` 或 `rtlcss` 基于源 CSS 自动生成反转后的样式（如交换 `left` / `right`）。
* **CSS Sprite 自动合并**：`postcss-sprites` 自动扫描背景图并合并成雪碧图，同时更新坐标。
* **颜色主题生成**：通过循环函数批量生成浅色/深色变体。

------

### 8. 构建工具的核心流水线

Vite、Webpack、Parcel、Rollup 等主流构建工具的 CSS 处理管线，几乎都以 PostCSS 作为最后一道处理器。典型配置中：

* 先用 Sass/Less 编译，
* 然后将结果交给 PostCSS（运行 Autoprefixer、preset-env 等），
* 最终输出优化后的 CSS。

它充当了 **CSS 处理的统一后处理器**，保证了不管用什么预处理器，最终都能应用相同的兼容和优化策略。

------

### 9. CSS-in-JS 的底层引擎

部分 CSS-in-JS 库（如早期的 styled-components、astroturf、linaria 等）也使用 PostCSS 在编译期处理样式，从而获得语法转换、自动补全前缀、压缩等能力，而无需在运行时处理。



## [Plugins](https://github.com/csstools/postcss-plugins)

