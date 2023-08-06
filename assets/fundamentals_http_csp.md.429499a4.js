import{_ as e,c as o,o as s,d as t}from"./app.ab3bd27a.js";const u=JSON.parse('{"title":"Content Security Policy","description":"","frontmatter":{},"headers":[{"level":2,"title":"example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"relativePath":"fundamentals/http/csp.md","lastUpdated":1691335172000}'),a={name:"fundamentals/http/csp.md"},l=t(`<h1 id="content-security-policy" tabindex="-1"><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank" rel="nofollow noopener noreferrer">Content Security Policy</a> <a class="header-anchor" href="#content-security-policy" aria-hidden="true">#</a></h1><p>通过在html页面meta标签或者 <code>Content-Security-Policy</code> 响应头配置一些安全策略，来检测并削弱某些攻击，例如 XSS 和 数据注入攻击。</p><blockquote><p>一个 CSP 兼容的浏览器将会仅执行从白名单域获取到的脚本文件，忽略所有的其他脚本 (包括内联脚本和 HTML 的事件处理属性)。</p></blockquote><h2 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><ol><li>各种内容默认仅允许从文档所在的源获取，但存在如下例外：图片可以从任何地方加，多媒体文件仅允许从 <a href="http://media1.com" target="_blank" rel="nofollow noopener noreferrer">media1.com</a> 和 <a href="http://media2.com" target="_blank" rel="nofollow noopener noreferrer">media2.com</a> 加载 (不允许从这些站点的子域名)。可运行脚本仅允许来自于 <a href="http://userscripts.example.com" target="_blank" rel="nofollow noopener noreferrer">userscripts.example.com</a>。</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Security-Policy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-src &#39;self&#39;; img-src *; media-src example.org example.net; script-src userscripts.example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>各种内容默认仅允许https源，worker脚本允许从文档所在源、test.com及其子域名、blob: 协议源获取；js脚本允许从test.com及其子域名获取，且允许内联代码执行；禁止安装插件。</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Security-Policy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default-src https:;worker-src *.test.com &#39;self&#39; blob:;script-src *.test.com &#39;unsafe-inline&#39; &#39;unsafe-eval&#39;;object-src &#39;none&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h2><ul><li><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="nofollow noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP</a></p></li><li><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank" rel="nofollow noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy</a></p></li></ul>`,10),n=[l];function r(p,c,i,d,h,m){return s(),o("div",null,n)}const D=e(a,[["render",r]]);export{u as __pageData,D as default};
