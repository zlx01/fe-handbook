# 性能优化

页面性能优化应先定位瓶颈，再选择措施，并在相同设备、网络和操作流程下比较优化前后的结果。本页整理常见的加载与产物优化方法，以及原有项目笔记中的适用条件。

## 检测工具与指标

* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)：通过实验室测试发现加载、资源体积等问题，适合建立基线和检查改动。
* [PageSpeed Insights](https://pagespeed.web.dev/)：结合实验室诊断与可用的真实用户数据；访问量不足时可能没有真实用户报告。
* Chrome DevTools：用 Network 查看请求与缓存，用 Performance 定位主线程耗时，用 Coverage 辅助查找未使用的代码。覆盖率取决于实际执行过的页面和操作，不能据此直接删除代码。

| 指标 | 关注的问题 | 良好值 |
| --- | --- | --- |
| LCP（最大内容绘制） | 主要内容多久可见 | ≤ 2.5 秒 |
| INP（交互到下一次绘制） | 点击、输入等交互是否及时响应 | ≤ 200 毫秒 |
| CLS（累积布局偏移） | 内容是否意外移动 | ≤ 0.1 |

以上是 [Core Web Vitals](https://web.dev/articles/vitals) 的良好阈值，真实用户评估以访问样本的第 75 百分位为准。单次 Lighthouse 得分不能替代真实用户体验；加载测试中的 TBT 也不等同于覆盖实际交互的 INP。

先记录首屏资源体积、关键请求和主要交互耗时，每次针对一个已确认的瓶颈验证收益，避免只追求请求数量或跑分。

## 代码分割

将代码按路由或功能拆分，让首屏只加载当前需要的部分。例如编辑器、图表、导出功能可以在使用时通过动态 `import()` 加载。构建工具需要支持并启用对应的分包能力。

分包也可以提取共享依赖，减少重复代码。按需加载与提取公共包的目的不同：文件拆开后若仍全部在首屏请求，未必能减少首屏工作量。

不要机械地把每个模块拆成小文件，也不要把所有依赖合成一个大包。需要结合请求开销、缓存复用、压缩效果和执行耗时确定边界；延后加载的功能还应有加载反馈和失败重试入口。参见 [web.dev：代码分割](https://web.dev/learn/performance/code-split-javascript)。

框架示例见 [React 代码分割](/framework/react/Code-Splitting)，构建工具配置见 [Webpack](/build-tools/bundler/webpack/) 和 [Vite](/build-tools/bundler/vite/)。

## 静态资源内联

内联少量关键 CSS 或很小的静态资源，可以省去额外请求，让首屏所需内容更早到达。图片转 data URL 的基础用法见 [图片转 base64](/other/matrix/image-to-base64)。

内联会增加 HTML 或引用文件体积，资源不能再单独缓存，跨页面使用时也可能重复传输；base64 编码本身还会增大原始数据。因此应只在实际测量有收益时使用，并检查站点 CSP 是否允许相应内联方式。

“减少 HTTP 请求”是手段，不是独立的优化目标。尤其在 HTTP/2、HTTP/3 场景下，应同时考虑关键资源是否被延迟、缓存是否失效和传输总量，不能仅根据请求数决定是否内联或合并。参见 [web.dev：优化资源加载](https://web.dev/learn/performance/optimize-resource-loading)。

## 产物体积优化

### 减少重复依赖

先检查依赖树和构建产物分析报告，定位同一库的多个版本、重复打包的工具函数或重复引入的 polyfill。对于兼容的版本，可以统一依赖范围、使用包管理器的去重能力，或调整公共模块提取方式。

依赖树中出现多个版本不一定意味着浏览器下载了多份代码，应以实际产物为准。不要为了去重强行覆盖不兼容的大版本；调整后需要验证依赖行为。

### 使用更轻量的库

只使用少量功能时，优先评估原生能力、库提供的按需入口，以及能被 tree shaking 消除未使用代码的模块形式。确实需要替换库时，比较最终产物及功能覆盖，而不是只看安装包大小。

日期、国际化、精度处理等库的替换可能改变行为。应保留业务必需能力，验证兼容性，并确认按需引入确实减少了产物；不要默认“换成具名导入”一定有效。

### 调整 Browserslist 目标范围

附件中的“提升 Browserslist 范围”更准确地说是：在业务允许时提高最低支持版本、缩小旧浏览器兼容范围，使使用这些目标的工具减少不必要的语法转换、前缀或 polyfill。

先依据用户浏览器分布和产品支持约定确定目标，再修改配置；这会影响旧设备的可用性，不能只为缩小包体而调整。不同工具读取目标的方式不同，需检查构建链是否实际使用 Browserslist。配置说明见 [Browserslist](/build-tools/compiler/babel/browserslist) 和 [官方项目文档](https://github.com/browserslist/browserslist)。

### 按需引入 polyfill

语法转换不等于运行时 API 补齐。使用 Babel 的项目可根据目标环境和代码用法，配置 `@babel/preset-env` 的 `useBuiltIns: 'usage'` 与匹配的 `core-js` 版本，减少不需要的 ECMAScript polyfill。

避免同时重复引入全量 polyfill。还需检查未经过 Babel 处理的依赖以及 Web API：`core-js` 不能补齐所有浏览器能力，例如 `fetch` 需要单独评估。参见 [Babel preset-env 文档](https://babeljs.io/docs/babel-preset-env/)。

### 图片压缩

按实际展示尺寸输出图片，根据画质需求选择压缩质量，并在兼容性允许时使用 WebP、AVIF 等格式。使用 `srcset`、`sizes` 为不同设备提供合适尺寸，避免小区域下载大图。

对首屏外图片按需懒加载，但不要将首屏关键图片，尤其是 LCP 图片，机械地设为懒加载。声明图片宽高或宽高比以预留空间，减少布局偏移。参见 [web.dev：图片性能](https://web.dev/learn/performance/image-performance)。

## 传输与缓存

### 文件合并与 CDN

旧笔记中的“将 vue.runtime.js、vue-router.js、vuex.js 合成一个文件”是减少请求的一种历史做法。合并可能减少请求开销，但也可能增加首屏下载量，并让其中一个依赖更新时整个文件的缓存失效，应结合前面的代码分割策略判断。

CDN 可以让静态资源从更靠近用户的节点分发，但缓存收益取决于资源 URL、响应头和命中情况；使用 CDN 并不自动意味着用户浏览器已有缓存。

### 传输压缩

在服务端或 CDN 为 HTML、JavaScript、CSS 等文本资源配置 gzip 或 Brotli，根据请求的 `Accept-Encoding` 协商，并通过响应的 `Content-Encoding` 标明编码；按编码协商缓存时还需正确设置 `Vary: Accept-Encoding`。

已经压缩的 JPEG、PNG、WebP 等图片通常不适合再次进行通用压缩，SVG 等文本资源则可以受益。图片内容压缩与 HTTP 传输压缩是不同层面的工作。参见 [MDN：HTTP 压缩](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression)。

### HTML 与静态资源缓存

对需要及时更新的 HTML，可使用 `Cache-Control: no-cache` 配合 ETag 或 Last-Modified，让浏览器复用前先向服务端验证；`no-cache` 并不是禁止存储。

内容变化时 URL 也变化的静态资源（例如带内容哈希的 JS、CSS），可设置较长的 `max-age` 和 `immutable`。发布时需确保 HTML 引用的文件可用，并适当保留旧版本资源供已打开的页面继续加载。个性化内容不能直接套用公共 CDN 缓存策略。

基础概念见 [HTTP 缓存](/fundamentals/network/http/caching)，策略说明见 [MDN：HTTP 缓存](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)。

## 框架特定技巧

### Vue 2 中的 Object.freeze（历史案例）

对于不需要响应式更新的大型只读数据，可在交给 Vue 2 观察前使用 `Object.freeze`，避免对冻结对象建立响应式跟踪。这依赖于数据确实无需修改，不能作为通用的 JavaScript 提速方式。参见 [Vue 2：实例与响应式数据](https://v2.vuejs.org/v2/guide/instance.html#Data-and-Methods)。

`Object.freeze` 是浅冻结，嵌套对象不会自动全部冻结；冻结后也不能再直接修改顶层属性或数组结构。不要对需要交互更新的数据套用这一方式，也不要假设对已经建立的响应式跟踪可以通过冻结来撤销。参见 [MDN：Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)。

以下保留原笔记中的大表格与 SVG 动画演示截图。截图缺少完整的环境、实现和优化后对照结果，仅作为历史案例，不代表可复现的性能收益：

![历史演示：大型表格渲染与 Object.freeze 优化开关](../../other/matrix/assets/image-20240713150457449.png)

![历史演示：1000 个 SVG 圆点动画与 Object.freeze 优化开关](../../other/matrix/assets/image-20240713150650468.png)
