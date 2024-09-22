import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CFdyflnk.js";const E=JSON.parse('{"title":"Code Style","description":"","frontmatter":{},"headers":[],"relativePath":"other/code-style/index.md","filePath":"other/code-style/index.md","lastUpdated":1727024381000}'),e={name:"other/code-style/index.md"},t=n(`<h1 id="code-style" tabindex="-1">Code Style <a class="header-anchor" href="#code-style" aria-label="Permalink to &quot;Code Style&quot;">​</a></h1><h2 id="flow" tabindex="-1"><a href="https://flow.org/" target="_blank" rel="nofollow noopener noreferrer">Flow</a> <a class="header-anchor" href="#flow" aria-label="Permalink to &quot;[Flow](https://flow.org/)&quot;">​</a></h2><p>了解即可</p><h2 id="typescript" tabindex="-1"><a href="https://www.typescriptlang.org/" target="_blank" rel="nofollow noopener noreferrer">TypeScript</a> <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;[TypeScript](https://www.typescriptlang.org/)&quot;">​</a></h2><p>👍</p><h2 id="jsdoc" tabindex="-1"><a href="https://jsdoc.app/" target="_blank" rel="nofollow noopener noreferrer">JSDoc</a> <a class="header-anchor" href="#jsdoc" aria-label="Permalink to &quot;[JSDoc](https://jsdoc.app/)&quot;">​</a></h2><p>了解即可</p><h2 id="tsdoc" tabindex="-1"><a href="https://tsdoc.org/" target="_blank" rel="nofollow noopener noreferrer">TSDoc</a> <a class="header-anchor" href="#tsdoc" aria-label="Permalink to &quot;[TSDoc](https://tsdoc.org/)&quot;">​</a></h2><p>👍</p><h2 id="editorconfig" tabindex="-1"><a href="https://editorconfig.org/" target="_blank" rel="nofollow noopener noreferrer">EditorConfig</a> <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;[EditorConfig](https://editorconfig.org/)&quot;">​</a></h2><p>编辑器通用配置</p><h3 id="editorconfig-1" tabindex="-1">.editorconfig <a class="header-anchor" href="#editorconfig-1" aria-label="Permalink to &quot;.editorconfig&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># https://editorconfig.org</span></span>
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
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre></div><h2 id="formatting-prettier" tabindex="-1">Formatting: <a href="https://prettier.io/" target="_blank" rel="nofollow noopener noreferrer">Prettier</a> <a class="header-anchor" href="#formatting-prettier" aria-label="Permalink to &quot;Formatting: [Prettier](https://prettier.io/)&quot;">​</a></h2><p>专注代码格式问题</p><ul><li>vscode 配置：<a href="https://github.com/prettier/prettier-vscode" target="_blank" rel="nofollow noopener noreferrer">https://github.com/prettier/prettier-vscode</a></li><li>webstorm 配置：<a href="https://prettier.io/docs/en/webstorm.html" target="_blank" rel="nofollow noopener noreferrer">https://prettier.io/docs/en/webstorm.html</a></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;**/*.ts&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;**/*.ts&#39;</span></span></code></pre></div><h3 id="configuration-file" tabindex="-1">Configuration File <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration File&quot;">​</a></h3><ul><li>A <code>&quot;prettier&quot;</code> key in your <code>package.json</code> file.</li><li>A <code>.prettierrc</code> file written in JSON or YAML.</li><li>A <code>.prettierrc.json</code>, <code>.prettierrc.yml</code>, <code>.prettierrc.yaml</code>, or <code>.prettierrc.json5</code> file.</li><li>A <code>.prettierrc.js</code>, <code>.prettierrc.cjs</code>, <code>prettier.config.js</code>, or <code>prettier.config.cjs</code> file that exports an object using <code>module.exports</code>.</li><li>A <code>.prettierrc.toml</code> file.</li></ul><h3 id="prettierrc" tabindex="-1">.prettierrc <a class="header-anchor" href="#prettierrc" aria-label="Permalink to &quot;.prettierrc&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>semi: false</span></span>
<span class="line"><span>singleQuote: true</span></span>
<span class="line"><span>printWidth: 80</span></span>
<span class="line"><span>trailingComma: &#39;none&#39;</span></span>
<span class="line"><span>arrowParens: &#39;avoid&#39;</span></span></code></pre></div><h3 id="prettierrc-json" tabindex="-1">.prettierrc.json <a class="header-anchor" href="#prettierrc-json" aria-label="Permalink to &quot;.prettierrc.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;printWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tabWidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;useTabs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;semi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;singleQuote&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;trailingComma&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;bracketSpacing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;arrowParens&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;avoid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;typescript&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="prettierignore" tabindex="-1">.prettierignore <a class="header-anchor" href="#prettierignore" aria-label="Permalink to &quot;.prettierignore&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm-lock.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span># prettier doesn&#39;t respect newlines between chained methods</span></span>
<span class="line"><span># https://github.com/prettier/prettier/issues/7884</span></span>
<span class="line"><span>**/*.spec.js</span></span>
<span class="line"><span>**/*.spec.ts</span></span>
<span class="line"><span>**/dist</span></span>
<span class="line"><span># https://github.com/prettier/prettier/issues/5246</span></span>
<span class="line"><span>**/*.html</span></span></code></pre></div><h2 id="linting-eslint" tabindex="-1">Linting: <a href="https://eslint.org/" target="_blank" rel="nofollow noopener noreferrer">ESLint</a> <a class="header-anchor" href="#linting-eslint" aria-label="Permalink to &quot;Linting: [ESLint](https://eslint.org/)&quot;">​</a></h2><p>专注代码质量问题</p><h3 id="configuration-file-1" tabindex="-1">Configuration File <a class="header-anchor" href="#configuration-file-1" aria-label="Permalink to &quot;Configuration File&quot;">​</a></h3><ul><li><strong>JavaScript</strong> - use <code>.eslintrc.js</code> and export an object containing your configuration.</li><li><strong>JavaScript (ESM)</strong> - use <code>.eslintrc.cjs</code> when running ESLint in JavaScript packages that specify <code>&quot;type&quot;:&quot;module&quot;</code> in their <code>package.json</code>. Note that ESLint does not support ESM configuration at this time.</li><li><strong>YAML</strong> - use <code>.eslintrc.yaml</code> or <code>.eslintrc.yml</code> to define the configuration structure.</li><li><strong>JSON</strong> - use <code>.eslintrc.json</code> to define the configuration structure. ESLint’s JSON files also allow JavaScript-style comments.</li><li><strong>package.json</strong> - create an <code>eslintConfig</code> property in your <code>package.json</code> file and define your configuration there.</li></ul><h3 id="eslintrc" tabindex="-1">.eslintrc <a class="header-anchor" href="#eslintrc" aria-label="Permalink to &quot;.eslintrc&quot;">​</a></h3><h3 id="eslintignore" tabindex="-1">.eslintignore <a class="header-anchor" href="#eslintignore" aria-label="Permalink to &quot;.eslintignore&quot;">​</a></h3><h2 id="eslint-prettier" tabindex="-1">ESLint + Prettier <a class="header-anchor" href="#eslint-prettier" aria-label="Permalink to &quot;ESLint + Prettier&quot;">​</a></h2><p>参考 <a href="https://zhuanlan.zhihu.com/p/80574300" target="_blank" rel="nofollow noopener noreferrer">文章</a> <a href="https://github.com/prettier/eslint-plugin-prettier" target="_blank" rel="nofollow noopener noreferrer">eslint-plugin-prettier</a> <a href="https://github.com/prettier/eslint-config-prettier" target="_blank" rel="nofollow noopener noreferrer">eslint-config-prettier</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;plugin:prettier/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;no-console&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;no-useless-escape&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;no-empty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;browser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;commonjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;es6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;jest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint:recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;standard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;plugin:prettier/recommended&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;globals&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msCrypto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@babel/eslint-parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;no-var&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>If your ESLint preset has formatting rules, they may conflict with Prettier. We recommend disabling all formatting rules in your ESLint preset using eslint-config-prettier so that ESLint is only used for catching logical mistakes.</p></blockquote><h2 id="husky-lint-staged-prettier-eslint" tabindex="-1">husky lint-staged prettier eslint <a class="header-anchor" href="#husky-lint-staged-prettier-eslint" aria-label="Permalink to &quot;husky lint-staged prettier eslint&quot;">​</a></h2><ul><li>vue: <a href="https://github.com/zlx01/vue-husky-test" target="_blank" rel="nofollow noopener noreferrer">https://github.com/zlx01/vue-husky-test</a></li><li>react: <a href="https://github.com/zlx01/react-husky-test" target="_blank" rel="nofollow noopener noreferrer">https://github.com/zlx01/react-husky-test</a></li></ul><p>package.json</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;prepare&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;husky install&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write .&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;*.{js,ts,vue,json}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;prettier --write&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;*.{js,jsx}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;eslint --fix&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="typescript-eslint" tabindex="-1"><a href="https://typescript-eslint.io/" target="_blank" rel="nofollow noopener noreferrer">TypeScript ESLint</a> <a class="header-anchor" href="#typescript-eslint" aria-label="Permalink to &quot;[TypeScript ESLint](https://typescript-eslint.io/)&quot;">​</a></h2><h2 id="stylelint" tabindex="-1"><a href="https://stylelint.io/" target="_blank" rel="nofollow noopener noreferrer">Stylelint</a> <a class="header-anchor" href="#stylelint" aria-label="Permalink to &quot;[Stylelint](https://stylelint.io/)&quot;">​</a></h2><h2 id="git-hooks" tabindex="-1">git-hooks <a class="header-anchor" href="#git-hooks" aria-label="Permalink to &quot;git-hooks&quot;">​</a></h2><p>commit msg from vue</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env bash</span></span>
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
<span class="line"><span>yarn-error.log*</span></span></code></pre></div><p>simple configuration</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.DS_Store</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>node_modules</span></span></code></pre></div>`,55),p=[t];function l(h,r,o,k,d,c){return a(),i("div",null,p)}const u=s(e,[["render",l]]);export{E as __pageData,u as default};