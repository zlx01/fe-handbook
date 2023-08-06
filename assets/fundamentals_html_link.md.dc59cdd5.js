import{_ as e,c as s,o as a,d as l}from"./app.ab3bd27a.js";const n="/fe-handbook/assets/image-20230805155801407.8974b6bf.png",u=JSON.parse('{"title":"<link>","description":"","frontmatter":{},"headers":[{"level":2,"title":"引入css样式表","slug":"引入css样式表","link":"#引入css样式表","children":[]},{"level":2,"title":"media属性","slug":"media属性","link":"#media属性","children":[]},{"level":2,"title":"网站图标","slug":"网站图标","link":"#网站图标","children":[]},{"level":2,"title":"预加载","slug":"预加载","link":"#预加载","children":[{"level":3,"title":"preload","slug":"preload","link":"#preload","children":[]},{"level":3,"title":"prefetch","slug":"prefetch","link":"#prefetch","children":[]},{"level":3,"title":"preconnect","slug":"preconnect","link":"#preconnect","children":[]},{"level":3,"title":"dns-prefetch","slug":"dns-prefetch","link":"#dns-prefetch","children":[]},{"level":3,"title":"prerender","slug":"prerender","link":"#prerender","children":[]},{"level":3,"title":"以当前网站为例","slug":"以当前网站为例","link":"#以当前网站为例","children":[]}]}],"relativePath":"fundamentals/html/link.md","lastUpdated":1691335172000}'),t={name:"fundamentals/html/link.md"},o=l(`<h1 id="link" tabindex="-1"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" target="_blank" rel="nofollow noopener noreferrer">&lt;link&gt;</a> <a class="header-anchor" href="#link" aria-hidden="true">#</a></h1><h2 id="引入css样式表" tabindex="-1">引入css样式表 <a class="header-anchor" href="#引入css样式表" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="media属性" tabindex="-1">media属性 <a class="header-anchor" href="#media属性" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">desktop.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">media</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">screen and (min-width: 600px)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span></span>
<span class="line"></span></code></pre></div><h2 id="网站图标" tabindex="-1">网站图标 <a class="header-anchor" href="#网站图标" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/favicon.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image/x-icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-hidden="true">#</a></h2><h3 id="preload" tabindex="-1"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload" target="_blank" rel="nofollow noopener noreferrer">preload</a> <a class="header-anchor" href="#preload" aria-hidden="true">#</a></h3><blockquote><link rel="preload">告诉浏览器尽快下载并缓存资源（如脚本或样式表），该指令优先级较高，浏览器肯定会执行。当加载页面几秒钟后需要该资源时，它会很有用。下载后，浏览器不会对资源执行任何操作，脚本未执行，样式表未应用。它只是缓存，当其他东西需要它时，它立即可用。 </blockquote><h3 id="prefetch" tabindex="-1">prefetch <a class="header-anchor" href="#prefetch" aria-hidden="true">#</a></h3><ul><li>只能用于 https</li><li>标识预加载资源，非强制</li></ul><blockquote><p>如果后续的页面需要某个资源，并且希望预加载该资源，以便加速页面渲染。该指令不是强制性的，优先级较低，浏览器不一定会执行。</p></blockquote><h3 id="preconnect" tabindex="-1">preconnect <a class="header-anchor" href="#preconnect" aria-hidden="true">#</a></h3><ul><li>要求浏览器提前与某个域名建立 TCP 连接。</li></ul><h3 id="dns-prefetch" tabindex="-1">dns-prefetch <a class="header-anchor" href="#dns-prefetch" aria-hidden="true">#</a></h3><ul><li>要求浏览器提前执行某个域名的 DNS 解析。</li></ul><h3 id="prerender" tabindex="-1">prerender <a class="header-anchor" href="#prerender" aria-hidden="true">#</a></h3><ul><li>要求浏览器加载某个网页，并且提前渲染它。用户点击指向该网页的链接时，就会立即呈现该页面。如果确定用户下一步会访问该页面，这会很有帮助。</li></ul><h3 id="以当前网站为例" tabindex="-1">以当前网站为例 <a class="header-anchor" href="#以当前网站为例" aria-hidden="true">#</a></h3><p><img src="`+n+'" alt="image-20230805155801407"></p>',21),r=[o];function p(c,i,d,h,D,F){return a(),s("div",null,r)}const f=e(t,[["render",p]]);export{u as __pageData,f as default};
