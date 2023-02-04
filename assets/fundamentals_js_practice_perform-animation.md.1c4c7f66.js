import{_ as e,c as a,o as t,d as i}from"./app.a658d899.js";const p=JSON.parse('{"title":"动画实现方式","description":"","frontmatter":{},"headers":[{"level":2,"title":"CSS: transition animation","slug":"css-transition-animation","link":"#css-transition-animation","children":[]},{"level":2,"title":"HTML: canvas svg","slug":"html-canvas-svg","link":"#html-canvas-svg","children":[]},{"level":2,"title":"JavaScript: setTimeout setInterval","slug":"javascript-settimeout-setinterval","link":"#javascript-settimeout-setinterval","children":[]},{"level":2,"title":"JavaScript: window.requestAnimationFrame","slug":"javascript-window-requestanimationframe","link":"#javascript-window-requestanimationframe","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"relativePath":"fundamentals/js/practice/perform-animation.md","lastUpdated":1675522891000}'),n={name:"fundamentals/js/practice/perform-animation.md"},r=i('<h1 id="动画实现方式" tabindex="-1">动画实现方式 <a class="header-anchor" href="#动画实现方式" aria-hidden="true">#</a></h1><h2 id="css-transition-animation" tabindex="-1">CSS: transition animation <a class="header-anchor" href="#css-transition-animation" aria-hidden="true">#</a></h2><h2 id="html-canvas-svg" tabindex="-1">HTML: canvas svg <a class="header-anchor" href="#html-canvas-svg" aria-hidden="true">#</a></h2><h2 id="javascript-settimeout-setinterval" tabindex="-1">JavaScript: setTimeout setInterval <a class="header-anchor" href="#javascript-settimeout-setinterval" aria-hidden="true">#</a></h2><blockquote><p>setTimeout 和 setInterval 的问题是，它们不够精确。它们的内在运行机制决定了 时间间隔参数 实际上只是指定了把动画代码添加到 浏览器UI线程队列 中以等待执行的时间。如果队列前面已经加入了其它任务，那动画代码就要等前面的 任务完成后 再执行，并且如果时间间隔过短（小于16.7ms）会造成丢帧，所以就会导致动画可能不会按照预设的去执行，降低用户体验。</p></blockquote><h2 id="javascript-window-requestanimationframe" tabindex="-1">JavaScript: window.requestAnimationFrame <a class="header-anchor" href="#javascript-window-requestanimationframe" aria-hidden="true">#</a></h2><blockquote><ul><li>回调函数执行次数通常是每秒 60 次，但在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与 浏览器屏幕刷新次数 相匹配。</li><li>为了提高性能和电池寿命，因此在大多数浏览器里，当requestAnimationFrame() 运行在后台标签页或者隐藏的&lt;iframe&gt; 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命。</li></ul></blockquote><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-hidden="true">#</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/E8uLMN3cYwBiQkyMtlDt0w" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/E8uLMN3cYwBiQkyMtlDt0w</a></li></ul>',9),s=[r];function o(l,c,d,m,h,u){return t(),a("div",null,s)}const f=e(n,[["render",o]]);export{p as __pageData,f as default};