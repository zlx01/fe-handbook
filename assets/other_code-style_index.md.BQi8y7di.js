import{_ as a,c as n,o as i,aM as p}from"./chunks/framework.kKeYZnSg.js";const d=JSON.parse('{"title":"Code Style","description":"","frontmatter":{},"headers":[],"relativePath":"other/code-style/index.md","filePath":"other/code-style/index.md","lastUpdated":1785481197000}'),e={name:"other/code-style/index.md"};function l(t,s,h,o,r,k){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="code-style" tabindex="-1">Code Style <a class="header-anchor" href="#code-style" aria-label="Permalink to &quot;Code Style&quot;">​</a></h1><h2 id="flow" tabindex="-1"><a href="https://flow.org/" target="_blank" rel="nofollow noopener noreferrer">Flow</a> <a class="header-anchor" href="#flow" aria-label="Permalink to &quot;[Flow](https://flow.org/)&quot;">​</a></h2><p>了解即可</p><h2 id="typescript" tabindex="-1"><a href="https://www.typescriptlang.org/" target="_blank" rel="nofollow noopener noreferrer">TypeScript</a> <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;[TypeScript](https://www.typescriptlang.org/)&quot;">​</a></h2><p>👍</p><h2 id="jsdoc" tabindex="-1"><a href="https://jsdoc.app/" target="_blank" rel="nofollow noopener noreferrer">JSDoc</a> <a class="header-anchor" href="#jsdoc" aria-label="Permalink to &quot;[JSDoc](https://jsdoc.app/)&quot;">​</a></h2><p>了解即可</p><h2 id="tsdoc" tabindex="-1"><a href="https://tsdoc.org/" target="_blank" rel="nofollow noopener noreferrer">TSDoc</a> <a class="header-anchor" href="#tsdoc" aria-label="Permalink to &quot;[TSDoc](https://tsdoc.org/)&quot;">​</a></h2><p>👍</p><h2 id="editorconfig" tabindex="-1"><a href="https://editorconfig.org/" target="_blank" rel="nofollow noopener noreferrer">EditorConfig</a> <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;[EditorConfig](https://editorconfig.org/)&quot;">​</a></h2><p>编辑器通用配置</p><h3 id="editorconfig-1" tabindex="-1">.editorconfig <a class="header-anchor" href="#editorconfig-1" aria-label="Permalink to &quot;.editorconfig&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># https://editorconfig.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>insert_final_newline = false</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre></div><h2 id="husky-lint-staged-prettier-eslint" tabindex="-1">husky lint-staged prettier eslint <a class="header-anchor" href="#husky-lint-staged-prettier-eslint" aria-label="Permalink to &quot;husky lint-staged prettier eslint&quot;">​</a></h2><ul><li>vue: <a href="https://github.com/zlx01/vue-husky-test" target="_blank" rel="nofollow noopener noreferrer">https://github.com/zlx01/vue-husky-test</a></li><li>react: <a href="https://github.com/zlx01/react-husky-test" target="_blank" rel="nofollow noopener noreferrer">https://github.com/zlx01/react-husky-test</a></li></ul><p>package.json</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky install&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write .&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint .&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;*.{js,ts,vue,json}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;*.{js,jsx}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;eslint --fix&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>相关的库</p><ul><li>eslint</li><li>@eslint/compat</li><li>@eslint/js</li><li>eslint-plugin-vue</li><li>eslint-plugin-react</li><li>eslint-plugin-react-hooks</li><li>typescript-eslint</li></ul><h2 id="stylelint" tabindex="-1"><a href="https://stylelint.io/" target="_blank" rel="nofollow noopener noreferrer">Stylelint</a> <a class="header-anchor" href="#stylelint" aria-label="Permalink to &quot;[Stylelint](https://stylelint.io/)&quot;">​</a></h2><h2 id="git-hooks" tabindex="-1">git-hooks <a class="header-anchor" href="#git-hooks" aria-label="Permalink to &quot;git-hooks&quot;">​</a></h2><p><a href="https://pre-commit.com/" target="_blank" rel="nofollow noopener noreferrer">https://pre-commit.com/</a></p><p>commit msg from vue</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Validate commit log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">commit_regex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;^Merge.+|(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert|types)(\\(.+\\))?: .{1,50}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -iqE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$commit_regex</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;  Error: proper commit message format is required for automated changelog generation.&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;  - Use </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to interactively generate a commit message.&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;  - See .github/COMMIT_CONVENTION.md for more details.&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><p>pre-commit from vue</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">files_to_lint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name-only</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --diff-filter=ACM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\\.js$&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$files_to_lint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">production</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eslint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --quiet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $files_to_lint</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><h2 id="gitignore" tabindex="-1">.gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;.gitignore&quot;">​</a></h2><p>from vue project</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.DS_Store</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>/dist</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># local env files</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Log files</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Editor directories and files</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>*.suo</span></span>
<span class="line"><span>*.ntvs*</span></span>
<span class="line"><span>*.njsproj</span></span>
<span class="line"><span>*.sln</span></span>
<span class="line"><span>*.sw?</span></span></code></pre></div><p>from react project</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># See https://help.github.com/articles/ignoring-files/ for more about ignoring files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># dependencies</span></span>
<span class="line"><span>/node_modules</span></span>
<span class="line"><span>/.pnp</span></span>
<span class="line"><span>.pnp.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span># testing</span></span>
<span class="line"><span>/coverage</span></span>
<span class="line"><span></span></span>
<span class="line"><span># production</span></span>
<span class="line"><span>/build</span></span>
<span class="line"><span></span></span>
<span class="line"><span># misc</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.development.local</span></span>
<span class="line"><span>.env.test.local</span></span>
<span class="line"><span>.env.production.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span></code></pre></div><p>from rspack</p><div class="language-.gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">.gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Local</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>*.local</span></span>
<span class="line"><span>*.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Dist</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IDE</span></span>
<span class="line"><span>.vscode/*</span></span>
<span class="line"><span>!.vscode/extensions.json</span></span>
<span class="line"><span>.idea</span></span></code></pre></div><p>simple configuration</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.DS_Store</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>node_modules</span></span></code></pre></div>`,35)]))}const g=a(e,[["render",l]]);export{d as __pageData,g as default};
