# ES Module

ESM是JavaScript提出的官方标准化模块系统，可以直接在浏览器中执行import，动态引入模块。

无需打包整个应用，而是将依赖解析的工作交给浏览器，让浏览器去解析需要哪些文件并只对这些文件发起请求。

ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。

用于在现代浏览器中通过 `<script type="module">` 直接导入。

