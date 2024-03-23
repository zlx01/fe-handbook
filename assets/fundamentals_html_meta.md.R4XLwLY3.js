import{_ as t,c as e,o as s,a4 as i}from"./chunks/framework.luo6lmAI.js";const E=JSON.parse('{"title":"<meta>","description":"","frontmatter":{},"headers":[],"relativePath":"fundamentals/html/meta.md","filePath":"fundamentals/html/meta.md","lastUpdated":1711215353000}'),a={name:"fundamentals/html/meta.md"},n=i(`<h1 id="meta" tabindex="-1"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" target="_blank" rel="nofollow noopener noreferrer">&lt;meta&gt;</a> <a class="header-anchor" href="#meta" aria-label="Permalink to &quot;[\\&lt;meta&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)&quot;">​</a></h1><h2 id="文档编码" tabindex="-1">文档编码 <a class="header-anchor" href="#文档编码" aria-label="Permalink to &quot;文档编码&quot;">​</a></h2><p>文档响应头：<code>content-type: text/html; charset=utf-8</code></p><p>文档中的meta标签：<code>&lt;meta charset=&quot;utf-8&quot;&gt;</code></p><h2 id="standard-metadata-names" tabindex="-1">Standard metadata names <a class="header-anchor" href="#standard-metadata-names" aria-label="Permalink to &quot;Standard metadata names&quot;">​</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name" target="_blank" rel="nofollow noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name</a></p><h2 id="viewport" tabindex="-1">viewport <a class="header-anchor" href="#viewport" aria-label="Permalink to &quot;viewport&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width,initial-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">Value</th><th style="text-align:left;">Possible subvalues</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;">A positive integer number, or the text <code>device-width</code></td><td style="text-align:left;">Defines the pixel width of the viewport that you want the website to be rendered at.</td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;">A positive integer, or the text <code>device-height</code></td><td style="text-align:left;">Defines the height of the viewport. Not used by any browser.</td></tr><tr><td style="text-align:left;"><code>initial-scale</code></td><td style="text-align:left;">A positive number between <code>0.0</code> and <code>10.0</code></td><td style="text-align:left;">Defines the ratio between the device width (<code>device-width</code> in portrait mode or <code>device-height</code> in landscape mode) and the viewport size.</td></tr><tr><td style="text-align:left;"><code>maximum-scale</code></td><td style="text-align:left;">A positive number between <code>0.0</code> and <code>10.0</code></td><td style="text-align:left;">Defines the maximum amount to zoom in. It must be greater or equal to the <code>minimum-scale</code> or the behavior is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.</td></tr><tr><td style="text-align:left;"><code>minimum-scale</code></td><td style="text-align:left;">A positive number between <code>0.0</code> and <code>10.0</code></td><td style="text-align:left;">Defines the minimum zoom level. It must be smaller or equal to the <code>maximum-scale</code> or the behavior is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.</td></tr><tr><td style="text-align:left;"><code>user-scalable</code></td><td style="text-align:left;"><code>yes</code> or <code>no</code></td><td style="text-align:left;">If set to <code>no</code>, the user is not able to zoom in the webpage. The default is <code>yes</code>. Browser settings can ignore this rule, and iOS10+ ignores it by default.</td></tr><tr><td style="text-align:left;"><code>viewport-fit</code></td><td style="text-align:left;"><code>auto</code>, <code>contain</code> or <code>cover</code></td><td style="text-align:left;">The <code>auto</code> value doesn&#39;t affect the initial layout viewport, and the whole web page is viewable.The <code>contain</code> value means that the viewport is scaled to fit the largest rectangle inscribed within the display.The <code>cover</code> value means that the viewport is scaled to fill the device display. It is highly recommended to make use of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/env" target="_blank" rel="nofollow noopener noreferrer">safe area inset</a> variables to ensure that important content doesn&#39;t end up outside the display.</td></tr></tbody></table><h2 id="seo相关" tabindex="-1">SEO相关 <a class="header-anchor" href="#seo相关" aria-label="Permalink to &quot;SEO相关&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;description&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTML 语言入门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;keywords&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HTML,教程&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;author&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Lee&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application-name&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Application Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;generator&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;program&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subject&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your document&#39;s subject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;referrer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;no-referrer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><table><thead><tr><th><code>no-referrer</code></th><th>Do not send a HTTP <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer" target="_blank" rel="nofollow noopener noreferrer"><code>Referer</code></a> header.</th></tr></thead><tbody><tr><td><code>origin</code></td><td>Send the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Origin" target="_blank" rel="nofollow noopener noreferrer">origin</a> of the document.</td></tr><tr><td><code>no-referrer-when-downgrade</code></td><td>Send the full URL when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but send no referrer when it&#39;s less secure (HTTPS→HTTP). This is the default behavior.</td></tr><tr><td><code>origin-when-cross-origin</code></td><td>Send the full URL (stripped of parameters) for same-origin requests, but only send the origin for other cases.</td></tr><tr><td><code>same-origin</code></td><td>Send the full URL (stripped of parameters) for same-origin requests. Cross-origin requests will contain no referrer header.</td></tr><tr><td><code>strict-origin</code></td><td>Send the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but send no referrer when it&#39;s less secure (HTTPS→HTTP).</td></tr><tr><td><code>strict-origin-when-cross-origin</code></td><td>Send the full URL (stripped of parameters) for same-origin requests. Send the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS). Otherwise, send no referrer.</td></tr><tr><td><code>unsafe-URL</code></td><td>Send the full URL (stripped of parameters) for same-origin or cross-origin requests.</td></tr></tbody></table><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;robots&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;index, follow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">Value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>index</code></td><td style="text-align:left;">Allows the robot to index the page (default).</td></tr><tr><td style="text-align:left;"><code>noindex</code></td><td style="text-align:left;">Requests the robot to not index the page.</td></tr><tr><td style="text-align:left;"><code>follow</code></td><td style="text-align:left;">Allows the robot to follow the links on the page (default).</td></tr><tr><td style="text-align:left;"><code>nofollow</code></td><td style="text-align:left;">Requests the robot to not follow the links on the page.</td></tr></tbody></table><h2 id="http-equiv" tabindex="-1">http-equiv <a class="header-anchor" href="#http-equiv" aria-label="Permalink to &quot;http-equiv&quot;">​</a></h2><h3 id="定时刷新" tabindex="-1">定时刷新 <a class="header-anchor" href="#定时刷新" aria-label="Permalink to &quot;定时刷新&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--5s刷新一次--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;refresh&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="定时跳转" tabindex="-1">定时跳转 <a class="header-anchor" href="#定时跳转" aria-label="Permalink to &quot;定时跳转&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--5s后跳转到百度--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;refresh&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5; url=&#39;https://www.baidu.com/&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="redirect" tabindex="-1">redirect <a class="header-anchor" href="#redirect" aria-label="Permalink to &quot;redirect&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--立即跳转到百度--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;refresh&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0; url=&#39;https://www.baidu.com/&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,22),l=[n];function h(d,o,r,p,k,c){return s(),e("div",null,l)}const u=t(a,[["render",h]]);export{E as __pageData,u as default};
