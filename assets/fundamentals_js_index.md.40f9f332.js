import{_ as s,c as n,o as a,d as l}from"./app.a658d899.js";const C=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[{"level":3,"title":"var声明","slug":"var声明","link":"#var声明","children":[]}]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[{"level":3,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":3,"title":"引用数据类型","slug":"引用数据类型","link":"#引用数据类型","children":[]},{"level":3,"title":"内存分配","slug":"内存分配","link":"#内存分配","children":[]},{"level":3,"title":"number","slug":"number","link":"#number","children":[]},{"level":3,"title":"null  和 undefined","slug":"null-和-undefined","link":"#null-和-undefined","children":[]},{"level":3,"title":"string","slug":"string","link":"#string","children":[]},{"level":3,"title":"object","slug":"object","link":"#object","children":[]},{"level":3,"title":"array","slug":"array","link":"#array","children":[]}]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[{"level":3,"title":"算术运算符","slug":"算术运算符","link":"#算术运算符","children":[]},{"level":3,"title":"and or 返回操作数","slug":"and-or-返回操作数","link":"#and-or-返回操作数","children":[]},{"level":3,"title":"位运算符","slug":"位运算符","link":"#位运算符","children":[]}]},{"level":2,"title":"异常机制","slug":"异常机制","link":"#异常机制","children":[{"level":3,"title":"原生错误类型","slug":"原生错误类型","link":"#原生错误类型","children":[]},{"level":3,"title":"自定义异常","slug":"自定义异常","link":"#自定义异常","children":[]}]},{"level":2,"title":"参考教程","slug":"参考教程","link":"#参考教程","children":[]}],"relativePath":"fundamentals/js/index.md","lastUpdated":1675522891000}'),o={name:"fundamentals/js/index.md"},e=l(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h1><p>EcmaScript</p><p>BOM</p><p>DOM</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h2><h3 id="var声明" tabindex="-1">var声明 <a class="header-anchor" href="#var声明" aria-hidden="true">#</a></h3><ul><li>未声明就是使用会报错：<code>ReferenceError: x is not defined</code></li><li>重复声明无效，第二次声明是无效的。但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。</li><li><strong>变量提升</strong></li><li>对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）</li></ul><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-hidden="true">#</a></h2><h3 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a></h3><ul><li>undefined</li><li>boolean</li><li>number</li><li>string</li><li>object</li><li>null</li><li>symbol es2015</li><li>bigint es2020</li></ul><h3 id="引用数据类型" tabindex="-1">引用数据类型 <a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a></h3><ul><li>object</li><li>array</li><li>function</li></ul><h3 id="内存分配" tabindex="-1">内存分配 <a class="header-anchor" href="#内存分配" aria-hidden="true">#</a></h3><ul><li>基本数据类型：栈中</li><li>引用数据类型：堆中</li></ul><h3 id="number" tabindex="-1">number <a class="header-anchor" href="#number" aria-hidden="true">#</a></h3><h4 id="nan" tabindex="-1">NaN <a class="header-anchor" href="#nan" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;number&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isNaN</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h4 id="infinity" tabindex="-1">Infinity <a class="header-anchor" href="#infinity" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">isFinite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isFinite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-Infinity</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isFinite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isFinite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#82AAFF;">isFinite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#82AAFF;">isFinite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h3 id="null-和-undefined" tabindex="-1">null 和 undefined <a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><h3 id="string" tabindex="-1">string <a class="header-anchor" href="#string" aria-hidden="true">#</a></h3><ul><li><code>btoa()</code>：任意值转为 Base64 编码</li><li><code>atob()</code>：Base64 编码转为原来的值</li></ul><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><ul><li><p>如果键名是数值，会被自动转为字符串。</p></li><li><p>数字键可以不加引号，因为会自动转成字符串。<code>obj[3]</code></p></li><li><p>delete删除对象不存在的属性也会返回true。</p></li><li><p><code>delete</code>命令只能删除对象本身的属性，无法删除继承的属性。</p></li><li><p><code>in</code>运算符用于检查对象是否包含某个属性。但它不能识别哪些属性是对象自身的，哪些属性是继承的。</p></li></ul><h3 id="array" tabindex="-1">array <a class="header-anchor" href="#array" aria-hidden="true">#</a></h3><ul><li>数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。<code>Object.keys(arr) // [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]</code></li><li>JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（232 - 1）个，也就是说<code>length</code>属性的最大值就是 4294967295。</li><li>只要是数组，就一定有<code>length</code>属性。该属性是一个动态的值，等于键名中的最大整数加上<code>1</code>。</li><li>数组的数字键不需要连续，<code>length</code>属性的值总是比最大的那个整数键大<code>1</code>。</li><li><code>length</code>属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员数量会自动减少到<code>length</code>设置的值。</li><li>清空数组的一个有效方法，就是将<code>length</code>属性设为0。</li><li>数组的空位值是undefined。使用<code>delete</code>命令删除一个数组成员，会形成空位，并且不会影响<code>length</code>属性。</li><li>如果是空位，使用数组的<code>forEach</code>方法、<code>for...in</code>结构、以及<code>Object.keys</code>方法进行遍历，空位都会被跳过。</li><li>如果一个对象的所有键名都是正整数或零，并且有<code>length</code>属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。</li><li>类数组对象：字符串，函数的<code>arguments</code>对象，以及大多数 DOM 元素集。</li><li>数组的<code>slice</code>方法可以将“类似数组的对象”变成真正的数组。</li><li></li></ul><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h2><h3 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a></h3><ul><li><strong>指数运算符</strong>：<code>x ** y</code></li><li><strong>余数运算符</strong>：<code>x % y</code> 余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果。</li></ul><h3 id="and-or-返回操作数" tabindex="-1">and or 返回操作数 <a class="header-anchor" href="#and-or-返回操作数" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 如果第一个操作数是对象，则返回第二个操作数</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">str</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// str</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> [])  </span><span style="color:#676E95;font-style:italic;">// []</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// [s:1]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果第二个操作数是对象，则只有第一个操作数求值为true时才返回该对象</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">([] </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 如果第一个操作数是对象则返回第一个操作数</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果第一个操作数求值为false，则返回第二个操作数</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// T</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> [])  </span><span style="color:#676E95;font-style:italic;">// []</span></span>
<span class="line"></span></code></pre></div><h3 id="位运算符" tabindex="-1">位运算符 <a class="header-anchor" href="#位运算符" aria-hidden="true">#</a></h3><ul><li><strong>二进制否运算符</strong>（not）：符号为<code>~</code>，一个数与自身的取反值相加，等于-1。</li><li><strong>异或运算符</strong>（xor）：符号为<code>^</code>，表示若两个二进制位不相同，则结果为1，否则为0。</li><li><strong>左移运算符</strong>（left shift）：符号为<code>&lt;&lt;</code>，表示将一个数的二进制值向左移动指定的位数，尾部补<code>0</code>，即乘以<code>2</code>的指定次方。向左移动的时候，最高位的符号位是一起移动的。</li><li><strong>右移运算符</strong>（right shift）：符号为<code>&gt;&gt;</code>，表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补<code>0</code>；如果是负数，头部全部补<code>1</code>。右移运算符基本上相当于除以<code>2</code>的指定次方（最高位即符号位参与移动）。</li><li>头部补零的右移运算符（<code>&gt;&gt;&gt;</code>）与右移运算符（<code>&gt;&gt;</code>）只有一个差别，就是一个数的二进制形式向右移动时，头部一律补零，而不考虑符号位。所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符（<code>&gt;&gt;</code>）完全一致，区别主要在于负数。</li></ul><h2 id="异常机制" tabindex="-1">异常机制 <a class="header-anchor" href="#异常机制" aria-hidden="true">#</a></h2><h3 id="原生错误类型" tabindex="-1">原生错误类型 <a class="header-anchor" href="#原生错误类型" aria-hidden="true">#</a></h3><blockquote><p><code>SyntaxError</code>对象是解析代码时发生的语法错误。</p><p><code>ReferenceError</code>对象是引用一个不存在的变量时发生的错误。</p><p><code>RangeError</code>对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是<code>Number</code>对象的方法参数超出范围，以及函数堆栈超过最大值。</p><p><code>TypeError</code>对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用<code>new</code>命令，就会抛出这种错误，因为<code>new</code>命令的参数应该是一个构造函数</p><p><code>URIError</code>对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及<code>encodeURI()</code>、<code>decodeURI()</code>、<code>encodeURIComponent()</code>、<code>decodeURIComponent()</code>、<code>escape()</code>和<code>unescape()</code>这六个函数。</p></blockquote><h3 id="自定义异常" tabindex="-1">自定义异常 <a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyError</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">默认错误信息</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MyError</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">MyError</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">MyError</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MyError</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomError</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CustomError</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">MyError</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CustomError</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">test1</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// test1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">test2</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// test2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="参考教程" tabindex="-1">参考教程 <a class="header-anchor" href="#参考教程" aria-hidden="true">#</a></h2><p><a href="https://wangdoc.com/javascript/" target="_blank" rel="noreferrer">https://wangdoc.com/javascript/</a></p>`,42),p=[e];function t(c,r,y,i,D,F){return a(),n("div",null,p)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
