# SSR (Server Side Rendering)

> SSR 是 "Server-Side Rendering"（服务器端渲染）的缩写。它表示由服务器生成网页的 HTML，并将其发送给客户端，而不是只发送一个空的 HTML 外壳，并依赖 JavaScript 来生成页面内容。
>
> 在传统的客户端渲染中，服务器会向客户端发送一个空的 HTML 外壳和一些 JavaScript 脚本，然后从服务器的 API 中获取数据，并用动态内容填充页面。这会导致页面的初始加载时间较慢，不利于用户体验和 SEO。
>
> 使用 SSR 后，服务器会生成已经包含动态内容的 HTML，并将其发送给客户端。这使得首屏加载速度更快，并对 SEO 更加友好，因为搜索引擎可以爬取到渲染后的页面。

## SSR 加载流程

1. 浏览器加载 HTML → 用户立即看到完整内容
2. JavaScript 加载完成 → React hydrate（水合），绑定事件交互
3. 后续页面导航 → SPA 模式，客户端渲染
