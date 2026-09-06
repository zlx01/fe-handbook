# SSG (Static Site Generation)

> SSG 是 "Static Site Generation"（静态网站生成）的缩写。它表示网页在**构建阶段**被预先渲染成静态的 HTML，然后直接提供给客户端，而不需要服务器实时生成 HTML。
>
> 在传统的 SSR 中，每当用户请求一个页面时，服务器就会实时生成 HTML。有了 SSG，HTML 可以在构建过程中被提前生成，并被托管在 CDN 或其他静态资源服务中。
>
> 与传统的 SSR 相比，SSG 可以提供更快的加载速度以及更少的服务端开销，因为不需要维护一个服务器来实时生成 HTML。然而，SSG 不适合需要动态内容的网站，因为 HTML 是在构建过程中生成的，不支持实时更新。

## 优点

* 首屏渲染更快：用户无需等待 JavaScript 加载和执行，浏览器加载 HTML 后即可看到完整内容，而不是在用户访问时才进行渲染。
* SEO 友好：搜索引擎爬虫可以直接抓取到完整的 HTML 内容。
* 易于部署：产物是纯静态文件，无需部署服务器 API，可直接上传到 CDN 或任何静态托管服务。

## Tools

### Image hosting service

- [图壳](https://imgkr.com/)
- GitHub + jsdelivr + PicGo
- 各大云服务对象存储cos

### Discussion

- [disqus](https://disqus.com/)

### Search

- [algolia](https://www.algolia.com/) 非常好用
- [typesense](https://typesense.org/)

### Badge

- [badge](https://shields.io/) 一般用于开源项目，统计 star, fork, issues, pull request, release, deploy, visitors

### Code Image

- [https://www.codepng.app/](https://www.codepng.app/)
- [https://carbon.now.sh/](https://carbon.now.sh/)

- https://live2d.fghrsh.net/demo/1.4.2/waifu-tips.html)

## 缺点

* 构建时间长：对于大型网站，构建所有页面可能需要较长时间。
* 不适合动态内容：如果网站需要频繁更新内容，SSG 可能不适合，因为每次更新都需要重新构建整个网站。


## SSG 框架 

* [Vuepress](https://vuepress.vuejs.org/)
* [Vitepress](https://vitepress.dev/)
* [Rspress](https://rspress.rs/)
* [Hexo](https://hexo.io/zh-cn/)
* [Hugo](https://gohugo.io/)
* [Jekyll](https://jekyllrb.com/)
* [Astro](https://astro.build/)
* [Docusaurus](https://docusaurus.io/)
* [Gatsby](https://github.com/gatsbyjs/gatsby)
