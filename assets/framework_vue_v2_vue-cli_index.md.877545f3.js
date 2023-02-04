import{_ as s,c as a,o as n,d as l}from"./app.a658d899.js";const d=JSON.parse('{"title":"Vue CLI","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML 和静态资源","slug":"html-和静态资源","link":"#html-和静态资源","children":[]},{"level":2,"title":"调整 webpack 配置","slug":"调整-webpack-配置","link":"#调整-webpack-配置","children":[]},{"level":2,"title":"模式和环境变量","slug":"模式和环境变量","link":"#模式和环境变量","children":[{"level":3,"title":"模式","slug":"模式","link":"#模式","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"使用环境变量","slug":"使用环境变量","link":"#使用环境变量","children":[]}]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"vue.config.js","slug":"vue-config-js","link":"#vue-config-js","children":[]}],"relativePath":"framework/vue/v2/vue-cli/index.md","lastUpdated":1675522891000}'),p={name:"framework/vue/v2/vue-cli/index.md"},e=l(`<h1 id="vue-cli" tabindex="-1"><a href="https://cli.vuejs.org/" target="_blank" rel="noreferrer">Vue CLI</a> <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h1><blockquote><p>Vue CLI is in Maintenance Mode!</p><p>For new projects, please use <a href="https://github.com/vuejs/create-vue" target="_blank" rel="noreferrer">create-vue</a> to scaffold <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>-based projects. Also refer to the <a href="https://vuejs.org/guide/scaling-up/tooling.html" target="_blank" rel="noreferrer">Vue 3 Tooling Guide</a> for the latest recommendations.</p></blockquote><p>Install:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vue/cli</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vue/cli</span></span>
<span class="line"></span></code></pre></div><p>Create a project:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-project</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ui</span></span>
<span class="line"></span></code></pre></div><p>Check version:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"></span></code></pre></div><p>Update:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vue/cli</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vue/cli</span></span>
<span class="line"></span></code></pre></div><p>Installing Plugins in an Existing Project</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue-router</span></span>
<span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vuex</span></span>
<span class="line"><span style="color:#FFCB6B;">vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint</span></span>
<span class="line"></span></code></pre></div><h2 id="html-和静态资源" tabindex="-1">HTML 和静态资源 <a class="header-anchor" href="#html-和静态资源" aria-hidden="true">#</a></h2><ul><li>模板插值：除了被 html-webpack-plugin 暴露的默认值之外，所有客户端环境变量也可以直接使用。</li><li>resouce hint: preload prefetch</li><li>放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。需要通过绝对路径来引用它们。如果应用没有部署在根路径，引用时需要加上前缀： <ul><li>html <code>&lt;%= BASE_URL %&gt;</code></li><li>template <code>p<wbr>rocess.env.BASE_URL</code></li></ul></li></ul><h2 id="调整-webpack-配置" tabindex="-1">调整 webpack 配置 <a class="header-anchor" href="#调整-webpack-配置" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// vue.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">configureWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyAwesomeWebpackPlugin</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 需要区分环境</span></span>
<span class="line"><span style="color:#A6ACCD;">  configureWebpack: </span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 为生产环境修改配置...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 为开发环境修改配置...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 链式调用  </span></span>
<span class="line"><span style="color:#A6ACCD;">  chainWebpack: </span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">module</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rule</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tap</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">options</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;font-style:italic;">// 修改它的选项...</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">) </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="模式和环境变量" tabindex="-1">模式和环境变量 <a class="header-anchor" href="#模式和环境变量" aria-hidden="true">#</a></h2><h3 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-hidden="true">#</a></h3><ul><li><code>development</code> 模式用于 <code>vue-cli-service serve</code></li><li><code>test</code> 模式用于 <code>vue-cli-service test:unit</code></li><li><code>production</code> 模式用于 <code>vue-cli-service build</code> 和 <code>vue-cli-service test:e2e</code></li></ul><p>当运行 <code>vue-cli-service</code> 命令时，所有的环境变量都从对应的<a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">环境文件</a>中载入。如果文件内部不包含 <code>NODE_ENV</code> 变量，它的值将取决于模式。</p><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h3><blockquote><p>.env # 在所有的环境中被载入 .env.[mode] # 只在指定的模式中被载入</p></blockquote><h3 id="使用环境变量" tabindex="-1">使用环境变量 <a class="header-anchor" href="#使用环境变量" aria-hidden="true">#</a></h3><p>只有 <code>NODE_ENV</code>，<code>BASE_URL</code> 和以 <code>VUE_APP_</code> 开头的变量将通过 <code>webpack.DefinePlugin</code> 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。</p><ul><li><code>NODE_ENV</code> - 会是 <code>&quot;development&quot;</code>、<code>&quot;production&quot;</code> 或 <code>&quot;test&quot;</code> 中的一个。取决于应用运行的模式。</li><li><code>BASE_URL</code> - 会和 <code>vue.config.js</code> 中的 <code>publicPath</code> 选项相符，即你的应用会部署到的基础路径。</li></ul><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-hidden="true">#</a></h2><p>通常都是部署到nginx上，参考<a href="https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx" target="_blank" rel="noreferrer">指引</a></p><h2 id="vue-config-js" tabindex="-1">vue.config.js <a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a></h2><ul><li><p>publicPath，默认 /，部署在非根路径时需要配置</p></li><li><p>configureWebpack，配置webpack</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">configureWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">assets</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div></li><li><p>chainWebpack，配置webpack</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">chainWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">alias</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div></li><li><p>devServer，配置代理，跨域</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">devServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        target</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;url&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        ws</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        changeOrigin</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        target</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;other_url&gt;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul>`,29),o=[e];function c(t,r,i,y,F,D){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
