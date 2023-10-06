import{_ as s,c as a,o as l,d as n}from"./app.880f4aae.js";const h=JSON.parse('{"title":"Semantic","description":"","frontmatter":{},"headers":[{"level":2,"title":"why","slug":"why","link":"#why","children":[]},{"level":2,"title":"tags","slug":"tags","link":"#tags","children":[]}],"relativePath":"fundamentals/html/semantic.md","lastUpdated":1696580746000}'),t={name:"fundamentals/html/semantic.md"},e=n(`<h1 id="semantic" tabindex="-1">Semantic <a class="header-anchor" href="#semantic" aria-hidden="true">#</a></h1><h2 id="why" tabindex="-1">why <a class="header-anchor" href="#why" aria-hidden="true">#</a></h2><ol><li>根据内容的结构（内容语义化），选择合适的标签，便于开发者阅读理解代码。</li><li>同时让浏览器的爬虫很好地解析，有利于SEO</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页眉</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文章标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">文章内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页尾</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="tags" tabindex="-1">tags <a class="header-anchor" href="#tags" aria-hidden="true">#</a></h2><ul><li>header</li><li>main，只能有一个</li><li>footer</li><li>aside</li><li>article</li><li>section</li><li>nav</li><li>h1~h6</li></ul>`,6),o=[e];function p(c,r,i,D,F,y){return l(),a("div",null,o)}const C=s(t,[["render",p]]);export{h as __pageData,C as default};
