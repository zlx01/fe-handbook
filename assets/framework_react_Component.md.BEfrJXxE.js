import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.luo6lmAI.js";const t="/fe-handbook/assets/component-trees.DntUts1j.png",y=JSON.parse('{"title":"Component","description":"","frontmatter":{},"headers":[],"relativePath":"framework/react/Component.md","filePath":"framework/react/Component.md","lastUpdated":1713631529000}'),e={name:"framework/react/Component.md"},l=n('<h1 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h1><blockquote><p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</p></blockquote><p>组件名称必须以大写字母开头，React 会将以小写字母开头的组件视为原生 DOM 标签。</p><h2 id="component-trees" tabindex="-1">Component trees <a class="header-anchor" href="#component-trees" aria-label="Permalink to &quot;Component trees&quot;">​</a></h2><p><img src="'+t+`" alt="Component trees"></p><h2 id="function-components" tabindex="-1">Function Components <a class="header-anchor" href="#function-components" aria-label="Permalink to &quot;Function Components&quot;">​</a></h2><ul><li>No this!</li></ul><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Welcome</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, {props.name}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="class-components" tabindex="-1">Class Components <a class="header-anchor" href="#class-components" aria-label="Permalink to &quot;Class Components&quot;">​</a></h2><ul><li>this is a trouble!</li></ul><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Welcome</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> React</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.props.name}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="handling-events" tabindex="-1">Handling Events <a class="header-anchor" href="#handling-events" aria-label="Permalink to &quot;Handling Events&quot;">​</a></h2><ul><li>React事件是合成事件，不是原生事件，好处：屏蔽浏览器实现差异</li><li>无须使用 <code>addEventListener</code></li><li>事件名使用camelCase</li><li>阻止默认行为必须显式调用 <code>e.preventDefault()</code></li><li>阻止冒泡必须显式调用 <code>e.stopPropagation()</code></li><li>通过事件委托方式处理（冒泡给根元素）（高效）</li><li>常用事件： <ul><li><code>onClick</code></li><li><code>onFocus onBlur</code></li><li><code>onChange onInput onSubmit</code></li><li><code>onScroll</code></li></ul></li><li>向事件处理程序传递参数</li></ul><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deleteRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id, e) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // e作为最后一个参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deleteRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id, e)}&gt;Delete Row&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.deleteRow.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, id)}&gt;Delete Row&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="conditional-rendering" tabindex="-1">Conditional Rendering <a class="header-anchor" href="#conditional-rendering" aria-label="Permalink to &quot;Conditional Rendering&quot;">​</a></h2><ul><li>if else</li><li><strong>Logical &amp;&amp; Operator 逻辑与，短路</strong></li><li><strong>Conditional Operator 三目运算符</strong></li><li>组件的返回值或者表达式的值是null，react就不会渲染</li><li>坑：Logical AND (&amp;&amp;) list.length === 0 （0不是false，也会渲染）</li></ul><h2 id="lists-and-keys" tabindex="-1">Lists and Keys <a class="header-anchor" href="#lists-and-keys" aria-label="Permalink to &quot;Lists and Keys&quot;">​</a></h2><ul><li>在 map() 方法中的元素需要设置 key 属性</li><li>key必须唯一</li><li>尽量不要使用索引作为key。会影响性能；会造成组件渲染错误，比如在有输入时。</li><li>没有指定key时，react会使用索引作为key</li></ul>`,18),h=[l];function p(k,o,r,d,E,c){return a(),i("div",null,h)}const u=s(e,[["render",p]]);export{y as __pageData,u as default};
