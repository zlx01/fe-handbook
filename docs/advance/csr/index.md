# CSR (Client Side Rendering)

> CSR 是 "Client-Side Rendering"（客户端渲染）的缩写。它表示页面是在浏览器中通过 JavaScript 渲染的，数据获取、模板和路由等逻辑都在浏览器端完成，而不是在服务器上。
>
> 在 CSR 中，服务器会向浏览器端发送一个空的 HTML 外壳和一些 JavaScript 脚本，然后由浏览器端从服务器的 API 中拉取数据，并将动态内容渲染到页面中。

## CSR 加载流程

1. 浏览器加载 HTML → 用户看到空白页面
2. JavaScript 加载完成 → React 渲染页面内容
3. 后续页面导航 → SPA 模式，客户端渲染

## 如何提升首屏性能

* code splitting：将 JavaScript 拆分成多个小文件，按需加载，减少首屏加载的 JS 体积。
* lazy loading：延迟加载非首屏内容，减少首屏渲染的阻塞。
