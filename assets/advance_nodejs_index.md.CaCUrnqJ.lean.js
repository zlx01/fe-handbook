import{_ as e,c as a,o as i,a4 as s}from"./chunks/framework.luo6lmAI.js";const v=JSON.parse('{"title":"Nodejs","description":"","frontmatter":{},"headers":[],"relativePath":"advance/nodejs/index.md","filePath":"advance/nodejs/index.md","lastUpdated":1711215353000}'),t={name:"advance/nodejs/index.md"},o=s('<h1 id="nodejs" tabindex="-1"><a href="https://nodejs.org/en/" target="_blank" rel="nofollow noopener noreferrer">Nodejs</a> <a class="header-anchor" href="#nodejs" aria-label="Permalink to &quot;[Nodejs](https://nodejs.org/en/)&quot;">​</a></h1><p>一个基于 Chrome V8 引擎的JavaScript运行环境。</p><p>一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。</p><p>事件驱动、异步驱动、非阻塞式IO</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><p>没有锁，没有死锁问题</p></li><li><p>Node.js 中几乎没有函数直接执行 I/O 操作（除非你使用 Node.js 标准库中的同步函数版本），其进程从不会被阻塞</p></li><li><p>Node处理请求时是单线程，但是在后台拥有一个I/O线程池.</p></li><li><p>就像浏览器的 JavaScript 一样 —— 事件循环对用户是隐藏的。</p></li><li><p>支持流式和低延迟</p></li><li><p>Node.js 被设计成单线程运行</p></li></ul><h2 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h2><h3 id="规范" tabindex="-1">规范 <a class="header-anchor" href="#规范" aria-label="Permalink to &quot;规范&quot;">​</a></h3><p>CommonJS</p><h3 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h3><ul><li>核心模块 <ul><li>由node引擎提供的模块，核心模块的标识就是模块的名字</li><li>包括文件系统I/O、网络（ HTTP、 TCP、 UDP、 DNS、TLS/SSL等）、二进制数据流、加密算法、数据流 等等</li></ul></li><li>文件模块 <ul><li>由用户自己创建的模块，文件模块的标识就是文件的路径（绝对路径或相对路径，一般用相对路径）</li></ul></li></ul><h2 id="env" tabindex="-1">.env <a class="header-anchor" href="#env" aria-label="Permalink to &quot;.env&quot;">​</a></h2><h3 id="process-env-node-env" tabindex="-1">process.env.NODE_ENV <a class="header-anchor" href="#process-env-node-env" aria-label="Permalink to &quot;process.env.NODE_ENV&quot;">​</a></h3><ul><li>development</li><li>production</li></ul><p>指定运行环境</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">production</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  app.js</span></span></code></pre></div>',16),l=[o];function n(r,d,p,h,c,u){return i(),a("div",null,l)}const m=e(t,[["render",n]]);export{v as __pageData,m as default};
