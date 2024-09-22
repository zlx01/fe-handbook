import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.CFdyflnk.js";const F=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[],"relativePath":"build-tools/package-manager/npm/index.md","filePath":"build-tools/package-manager/npm/index.md","lastUpdated":1727024381000}'),e={name:"build-tools/package-manager/npm/index.md"},p=n(`<h1 id="npm" tabindex="-1"><a href="https://www.npmjs.com/" target="_blank" rel="nofollow noopener noreferrer">npm</a> <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;[npm](https://www.npmjs.com/)&quot;">​</a></h1><ul><li>官网：<a href="https://www.npmjs.com/" target="_blank" rel="nofollow noopener noreferrer">https://www.npmjs.com/</a></li><li>文档：<a href="https://docs.npmjs.com/" target="_blank" rel="nofollow noopener noreferrer">https://docs.npmjs.com/</a></li><li>仓库：<a href="https://registry.npmjs.org/" target="_blank" rel="nofollow noopener noreferrer">https://registry.npmjs.org/</a></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>安装 <code>Node</code> 时会顺带安装 <code>npm</code></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看node版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将npm更新至最新版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm@latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看npm版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看node、npm、v8等核心库的版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看帮助</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span></code></pre></div><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看包版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package] versions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装最新版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package]@latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看安装过哪些包(插件)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dept</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dept</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 全局</span></span></code></pre></div><blockquote><p><strong>-g -S -D</strong></p><ul><li><code>-g</code>：全局安装。 将会安装在C：\\ Users \\ Administrator \\ AppData \\ Roaming \\ npm，<strong>并且写入系统环境变量</strong>，因此可以通过命令行在任何地方调用它</li><li><code>-S</code>：即<code>npm install [package] --save</code>,写入<code>package.json</code>的<code>dependencies</code> ,<code>dependencies</code> 生产依赖</li><li><code>-D</code>：即<code>npm install [package] --save-dev</code>,写入<code>package.json</code>的<code>devDependencies</code> ,<code>devDependencies</code> 开发依赖</li></ul></blockquote><blockquote><p><strong>--save --save-dev</strong><strong>在 npm 5 之前的版本</strong>：使用 npm install 默认选项安装包时，仅仅会把包下载到 node_modules/ 中，并不会同时修改 package.json。而使用 --save 选项就可以在安装包的同时，修改 package.json 文件。 <strong>在 npm 5 之后的版本</strong>：npm install 安装包时，默认便会修改 package.json 文件，所以 --save 选项已经不再需要了。</p></blockquote><h2 id="国内镜像" tabindex="-1">国内镜像 <a class="header-anchor" href="#国内镜像" aria-label="Permalink to &quot;国内镜像&quot;">​</a></h2><ul><li><a href="https://registry.npmmirror.com" target="_blank" rel="nofollow noopener noreferrer">https://registry.npmmirror.com</a></li><li>阿里做的镜像库，只负责从<a href="https://registry.npmjs.org/" target="_blank" rel="nofollow noopener noreferrer">源库</a>定期复制到镜像库（只读，不支持publish）</li><li>注意：旧的<a href="https://registry.npm.taobao.org" target="_blank" rel="nofollow noopener noreferrer">淘宝镜像库</a>即将停止解析，详见<a href="https://npmmirror.com/" target="_blank" rel="nofollow noopener noreferrer">官网说明</a></li></ul><h3 id="使用方式一-临时指定-不推荐" tabindex="-1">使用方式一：临时指定（不推荐） <a class="header-anchor" href="#使用方式一-临时指定-不推荐" aria-label="Permalink to &quot;使用方式一：临时指定（不推荐）&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package] --registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://registry.npmmirror.com</span></span></code></pre></div><h3 id="使用方式二-全局指定-个人开发推荐" tabindex="-1">使用方式二：全局指定（个人开发推荐）👍 <a class="header-anchor" href="#使用方式二-全局指定-个人开发推荐" aria-label="Permalink to &quot;使用方式二：全局指定（个人开发推荐）:+1:&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置镜像仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmmirror.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span></code></pre></div><h3 id="使用方式三-npmrc" tabindex="-1">使用方式三：<code>.npmrc</code> <a class="header-anchor" href="#使用方式三-npmrc" aria-label="Permalink to &quot;使用方式三：\`.npmrc\`&quot;">​</a></h3><ul><li>方式二的配置会写在用户目录下的 <code>.npmrc</code> 文件，所以也可以直接修改文件。</li><li>项目目录也可以新建对应的 <code>.npmrc</code> 文件（团队开发推荐）👍</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registry=https://registry.npmmirror.com</span></span></code></pre></div><h3 id="使用方式四-安装cnpm-不推荐" tabindex="-1">使用方式四：安装cnpm（不推荐） <a class="header-anchor" href="#使用方式四-安装cnpm-不推荐" aria-label="Permalink to &quot;使用方式四：安装cnpm（不推荐）&quot;">​</a></h3><p>cnpm 支持 npm 除了 publish 之外的所有命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=https://registry.npmmirror.com</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试是否成功安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用cnpm代替npm来安装包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package]</span></span></code></pre></div>`,21),l=[p];function t(h,k,r,o,d,c){return i(),a("div",null,l)}const m=s(e,[["render",t]]);export{F as __pageData,m as default};