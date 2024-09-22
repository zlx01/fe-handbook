import{_ as a,c as e,o as t,a4 as o}from"./chunks/framework.CFdyflnk.js";const u=JSON.parse('{"title":"<iframe>","description":"","frontmatter":{},"headers":[],"relativePath":"fundamentals/html/iframe.md","filePath":"fundamentals/html/iframe.md","lastUpdated":1727024381000}'),i={name:"fundamentals/html/iframe.md"},l=o('<h1 id="iframe" tabindex="-1">&lt;iframe&gt; <a class="header-anchor" href="#iframe" aria-label="Permalink to &quot;\\&lt;iframe&gt;&quot;">​</a></h1><ul><li>通常用于嵌入第三方内容、广告、文档预览、嵌入分析工具</li><li>微前端实现方案中也有基于iframe的，例如腾讯推出的<strong>无界</strong></li><li>搬砖的时候，老板可能会心血来潮要求把几个独立的页面整合在一起，复制代码是难以维护的，这时候iframe就派上用场了。一个spa页面，一个tabbar组件，三个菜单，三个iframe，看起来很简单，开开心心的部署后在真机调试，然后发现导航栏怎么被软键盘顶起了，浏览器的导航为什么要点两次才能返回上一页，网上一搜，还好别人已经踩过坑，改改代码解决了bug。</li><li>最好限制下沙盒环境的权限，避免跨站脚本攻击等安全问题，设置sandbox属性：<code>sandbox=&quot;allow-popups allow-scripts allow-same-origin allow-popups-to-escape-sandbox&quot;</code>.</li><li>iframe还需要掌握父子窗口的通信方法：同源时方法相互调用；跨域时用postMessage</li></ul>',2),r=[l];function s(n,m,_,d,c,f){return t(),e("div",null,r)}const h=a(i,[["render",s]]);export{u as __pageData,h as default};