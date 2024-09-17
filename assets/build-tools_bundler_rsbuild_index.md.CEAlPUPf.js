import{_ as e,c as r,o as t,a4 as l}from"./chunks/framework.CFdyflnk.js";const b=JSON.parse('{"title":"Rsbuild","description":"","frontmatter":{},"headers":[],"relativePath":"build-tools/bundler/rsbuild/index.md","filePath":"build-tools/bundler/rsbuild/index.md","lastUpdated":1726577403000}'),a={name:"build-tools/bundler/rsbuild/index.md"},s=l('<h1 id="rsbuild" tabindex="-1"><a href="https://rsbuild.dev/" target="_blank" rel="nofollow noopener noreferrer">Rsbuild</a> <a class="header-anchor" href="#rsbuild" aria-label="Permalink to &quot;[Rsbuild](https://rsbuild.dev/)&quot;">​</a></h1><h2 id="插件系统" tabindex="-1">插件系统 <a class="header-anchor" href="#插件系统" aria-label="Permalink to &quot;插件系统&quot;">​</a></h2><ul><li><p>通过插件实现对框架的支持：Vue，React</p></li><li><p>通用基础插件：Babel、Sass、Less、Stylus</p></li><li><p>检测：ESLint、Type Check、Check Syntax</p></li><li><p>性能优化相关：Assets Retry、Image Compress、CSS Minimizer</p></li></ul><p>自动添加浏览器前缀。无需 <a href="https://github.com/postcss/autoprefixer" target="_blank" rel="nofollow noopener noreferrer">autoprefixer</a> 插件</p><p>使用 <a href="https://rsbuild.dev/zh/guide/basic/css-usage#%E4%BD%BF%E7%94%A8-postcss" target="_blank" rel="nofollow noopener noreferrer">PostCSS</a> 来转换 CSS 代码</p><p>CSS 资源压缩</p><p>CSS 预处理器</p><p>使用 CSS Modules</p><p>CSS-in-JS</p><p>引用 node_modules 里的样式</p><p>内联 CSS 文件</p><p>将样式内联到 JS 文件中，当浏览器请求到 JS 文件后，JS 将动态地向 HTML 插入 `` 标签，以此加载 CSS 样式。</p><p>这将会增大你的 JS Bundle 体积，因此通常情况下，不太建议禁用 CSS 提取逻辑。</p><p>语法降级和 polyfill 注入</p><p>在进行 TypeScript 转译时，SWC 和 Babel 等工具不会执行类型检查。</p>',15),o=[s];function p(i,n,d,u,S,c){return t(),r("div",null,o)}const h=e(a,[["render",p]]);export{b as __pageData,h as default};
