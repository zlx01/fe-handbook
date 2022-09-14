import{_ as s,c as n,o as a,d as l}from"./app.2fdcb704.js";const o="/fe-handbook/assets/164993edd0d44021bde16c69089eb22c.ed0d5cd7.webp",u=JSON.parse('{"title":"JavaScript\u7C7B\u578B\u8F6C\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"to boolean","slug":"to-boolean","link":"#to-boolean","children":[]},{"level":2,"title":"to number","slug":"to-number","link":"#to-number","children":[]},{"level":2,"title":"to string","slug":"to-string","link":"#to-string","children":[]}],"relativePath":"fundamentals/js/type-conversion.md","lastUpdated":1663167553000}'),p={name:"fundamentals/js/type-conversion.md"},e=l('<h1 id="javascript\u7C7B\u578B\u8F6C\u6362" tabindex="-1">JavaScript\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#javascript\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h1><p><img src="'+o+`" alt=""></p><h2 id="to-boolean" tabindex="-1">to boolean <a class="header-anchor" href="#to-boolean" aria-hidden="true">#</a></h2><ul><li>\u5176\u4ED6\u7C7B\u578B\u8F6C\u5E03\u5C14\u503C\uFF0C\u53EF\u4EE5\u7528 <code>Boolean()</code> \u51FD\u6570\u6216\u8005\u4E24\u6B21\u53D6\u53CD <code>!!</code></li><li>\u9664\u4E86\u4E0B\u9762\u516D\u4E2A\u503C\u88AB\u8F6C\u4E3Afalse\uFF0C\u5176\u4ED6\u503C\u90FD\u89C6\u4E3Atrue\u3002 <ul><li>undefined</li><li>null</li><li>false</li><li>0</li><li>NaN</li><li><code>&quot;&quot;</code> or <code>&#39;&#39;</code>\uFF08\u7A7A\u5B57\u7B26\u4E32\uFF09</li></ul></li></ul><h2 id="to-number" tabindex="-1">to number <a class="header-anchor" href="#to-number" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// undefined\u662F\u4E00\u4E2A\u8868\u793A&quot;\u6B64\u5904\u65E0\u5B9A\u4E49&quot;\u7684\u539F\u59CB\u503C\uFF0C\u8F6C\u4E3A\u6570\u503C\u65F6\u4E3ANaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// null\u662F\u4E00\u4E2A\u8868\u793A\u201C\u7A7A\u201D\u7684\u5BF9\u8C61\uFF0C\u8F6C\u4E3A\u6570\u503C\u65F6\u4E3A0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">))   </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">))   </span><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// 12</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// NaN\uFF0C\u53EA\u8981\u5B57\u7B26\u4E32\u770B\u4E0A\u53BB\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u8F6C\u6362\u5C31\u5931\u8D25\uFF01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4ECE\u5DE6\u5230\u53F3\u5C3D\u53EF\u80FD\u89E3\u6790\u51FA\u4E00\u4E2A\u6574\u6570\uFF0C\u89E3\u6790\u4E0D\u51FA\u5C31NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Number</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12aaa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// 12\uFF0C\u6700\u597D\u6307\u5B9A\u57FA\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u53EA\u80FD\u89E3\u6790\u5341\u8FDB\u5236\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Number</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseFloat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// 12\uFF0C\u6CE8\u610F\u662F\u6574\u6570\uFF01\u4F1A\u5C3D\u53EF\u80FD\u8F6C\u6210\u6574\u6570</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u8C61\uFF1A\u5148\u5BF9\u5BF9\u8C61valueOf\u8FD4\u56DE\u503C\u8F6C\u6362\uFF0C\u5982\u679C\u662FNaN\u5219\u5BF9\u5BF9\u8C61toString\u8FD4\u56DE\u503C\u8F6C\u6362</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">([])) </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> v1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">valueOf</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toString</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> v2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">toString</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(v1)) </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(v2)) </span><span style="color:#676E95;">// 2</span></span>
<span class="line"></span></code></pre></div><h2 id="to-string" tabindex="-1">to string <a class="header-anchor" href="#to-string" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// &quot;0&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// &quot;false&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// &quot;null&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// Symbol(foo)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]))  </span><span style="color:#676E95;">// &quot;1,2,3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">))  </span><span style="color:#676E95;">// &quot;function () {}&quot;</span></span>
<span class="line"></span></code></pre></div>`,10),c=[e];function t(r,A,y,D,F,C){return a(),n("div",null,c)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};