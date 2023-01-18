import{_ as s,c as a,o as n,d as e}from"./app.6779d363.js";const F=JSON.parse('{"title":".mjs vs .cjs","description":"","frontmatter":{},"headers":[{"level":2,"title":"ESM vs CJS","slug":"esm-vs-cjs","link":"#esm-vs-cjs","children":[]},{"level":2,"title":"CommonJS \u6A21\u5757\u52A0\u8F7D ES6 \u6A21\u5757","slug":"commonjs-\u6A21\u5757\u52A0\u8F7D-es6-\u6A21\u5757","link":"#commonjs-\u6A21\u5757\u52A0\u8F7D-es6-\u6A21\u5757","children":[]},{"level":2,"title":"ES6 \u6A21\u5757\u52A0\u8F7D CommonJS \u6A21\u5757","slug":"es6-\u6A21\u5757\u52A0\u8F7D-commonjs-\u6A21\u5757","link":"#es6-\u6A21\u5757\u52A0\u8F7D-commonjs-\u6A21\u5757","children":[]},{"level":2,"title":"\u540C\u65F6\u652F\u6301ESM\u548CCJS\u7684\u6A21\u5757","slug":"\u540C\u65F6\u652F\u6301esm\u548Ccjs\u7684\u6A21\u5757","link":"#\u540C\u65F6\u652F\u6301esm\u548Ccjs\u7684\u6A21\u5757","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"relativePath":"server/nodejs/mjs-cjs.md","lastUpdated":1674058600000}'),o={name:"server/nodejs/mjs-cjs.md"},l=e(`<h1 id="mjs-vs-cjs" tabindex="-1">.mjs vs .cjs <a class="header-anchor" href="#mjs-vs-cjs" aria-hidden="true">#</a></h1><h2 id="esm-vs-cjs" tabindex="-1">ESM vs CJS <a class="header-anchor" href="#esm-vs-cjs" aria-hidden="true">#</a></h2><blockquote><p><code>.mjs</code>\u6587\u4EF6\u603B\u662F\u4EE5 ES6 \u6A21\u5757\u52A0\u8F7D\uFF0C<code>.cjs</code>\u6587\u4EF6\u603B\u662F\u4EE5 CommonJS \u6A21\u5757\u52A0\u8F7D\uFF0C<code>.js</code>\u6587\u4EF6\u7684\u52A0\u8F7D\u53D6\u51B3\u4E8E<code>package.json</code>\u91CC\u9762<code>type</code>\u5B57\u6BB5\u7684\u8BBE\u7F6E\u3002</p></blockquote><h2 id="commonjs-\u6A21\u5757\u52A0\u8F7D-es6-\u6A21\u5757" tabindex="-1">CommonJS \u6A21\u5757\u52A0\u8F7D ES6 \u6A21\u5757 <a class="header-anchor" href="#commonjs-\u6A21\u5757\u52A0\u8F7D-es6-\u6A21\u5757" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./ejs-package.mjs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="es6-\u6A21\u5757\u52A0\u8F7D-commonjs-\u6A21\u5757" tabindex="-1">ES6 \u6A21\u5757\u52A0\u8F7D CommonJS \u6A21\u5757 <a class="header-anchor" href="#es6-\u6A21\u5757\u52A0\u8F7D-commonjs-\u6A21\u5757" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u53EA\u80FD\u6574\u4F53\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> packageMain </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cjs-package</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u540C\u65F6\u652F\u6301esm\u548Ccjs\u7684\u6A21\u5757" tabindex="-1">\u540C\u65F6\u652F\u6301ESM\u548CCJS\u7684\u6A21\u5757 <a class="header-anchor" href="#\u540C\u65F6\u652F\u6301esm\u548Ccjs\u7684\u6A21\u5757" aria-hidden="true">#</a></h2><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\uFF1A</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">require</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">import</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./esm/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html" target="_blank" rel="noreferrer">https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html</a></li></ul>`,11),p=[l];function c(t,r,i,d,D,y){return n(),a("div",null,p)}const h=s(o,[["render",c]]);export{F as __pageData,h as default};