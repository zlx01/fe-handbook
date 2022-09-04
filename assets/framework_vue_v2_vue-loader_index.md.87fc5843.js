import{_ as e,c as l,o as s,d}from"./app.18ebdc18.js";const g=JSON.parse('{"title":"Vue Loader","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5904\u7406\u8D44\u6E90\u8DEF\u5F84","slug":"\u5904\u7406\u8D44\u6E90\u8DEF\u5F84","link":"#\u5904\u7406\u8D44\u6E90\u8DEF\u5F84","children":[]},{"level":2,"title":"css\u9884\u5904\u7406\u5668","slug":"css\u9884\u5904\u7406\u5668","link":"#css\u9884\u5904\u7406\u5668","children":[]},{"level":2,"title":"Scoped CSS","slug":"scoped-css","link":"#scoped-css","children":[]},{"level":2,"title":"Vue \u5355\u6587\u4EF6\u7EC4\u4EF6 (SFC) \u89C4\u8303","slug":"vue-\u5355\u6587\u4EF6\u7EC4\u4EF6-sfc-\u89C4\u8303","link":"#vue-\u5355\u6587\u4EF6\u7EC4\u4EF6-sfc-\u89C4\u8303","children":[{"level":3,"title":"\u6A21\u677F","slug":"\u6A21\u677F","link":"#\u6A21\u677F","children":[]},{"level":3,"title":"\u811A\u672C","slug":"\u811A\u672C","link":"#\u811A\u672C","children":[]},{"level":3,"title":"\u6837\u5F0F","slug":"\u6837\u5F0F","link":"#\u6837\u5F0F","children":[]}]}],"relativePath":"framework/vue/v2/vue-loader/index.md","lastUpdated":1662288026000}'),a={name:"framework/vue/v2/vue-loader/index.md"},i=d('<h1 id="vue-loader" tabindex="-1">Vue Loader <a class="header-anchor" href="#vue-loader" aria-hidden="true">#</a></h1><blockquote><p>Vue Loader \u662F\u4E00\u4E2A webpack \u7684 loader\uFF0C\u5B83\u5141\u8BB8\u4F60\u4EE5\u4E00\u79CD\u540D\u4E3A\u5355\u6587\u4EF6\u7EC4\u4EF6 (SFCs)\u7684\u683C\u5F0F\u64B0\u5199 Vue \u7EC4\u4EF6</p></blockquote><p>\u4E0B\u9762\u8BB0\u5F55\u5F00\u53D1\u7ECF\u5E38\u4F7F\u7528\u7684</p><h2 id="\u5904\u7406\u8D44\u6E90\u8DEF\u5F84" tabindex="-1">\u5904\u7406\u8D44\u6E90\u8DEF\u5F84 <a class="header-anchor" href="#\u5904\u7406\u8D44\u6E90\u8DEF\u5F84" aria-hidden="true">#</a></h2><p>\u5F53 Vue Loader \u7F16\u8BD1\u5355\u6587\u4EF6\u7EC4\u4EF6\u4E2D\u7684 &lt;template&gt; &lt;style&gt;\u5757\u65F6\uFF0C\u5B83\u4E5F\u4F1A\u5C06\u6240\u6709\u9047\u5230\u7684\u8D44\u6E90 URL \u8F6C\u6362\u4E3A <strong>webpack \u6A21\u5757\u8BF7\u6C42</strong>\u3002\u5185\u90E8\u4F7F\u7528\u4E86\u4E24\u4E2Aloader\uFF1A</p><ul><li>file-loader \u53EF\u4EE5\u6307\u5B9A\u8981\u590D\u5236\u548C\u653E\u7F6E\u8D44\u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u7248\u672C\u54C8\u5E0C\u547D\u540D\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u7F13\u5B58\u3002\u6B64\u5916\uFF0C\u8FD9\u610F\u5473\u7740 \u4F60\u53EF\u4EE5\u5C31\u8FD1\u7BA1\u7406\u56FE\u7247\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u800C\u4E0D\u7528\u62C5\u5FC3\u90E8\u7F72\u65F6 URL \u7684\u95EE\u9898\u3002\u4F7F\u7528\u6B63\u786E\u7684\u914D\u7F6E\uFF0Cwebpack \u5C06\u4F1A\u5728\u6253\u5305\u8F93\u51FA\u4E2D\u81EA\u52A8\u91CD\u5199\u6587\u4EF6\u8DEF\u5F84\u4E3A\u6B63\u786E\u7684 URL\u3002</li><li>url-loader \u5141\u8BB8\u4F60\u6709\u6761\u4EF6\u5730\u5C06\u6587\u4EF6\u8F6C\u6362\u4E3A\u5185\u8054\u7684 base-64 URL (\u5F53\u6587\u4EF6\u5C0F\u4E8E\u7ED9\u5B9A\u7684\u9608\u503C)\uFF0C\u8FD9\u4F1A\u51CF\u5C11\u5C0F\u6587\u4EF6\u7684 HTTP \u8BF7\u6C42\u6570\u3002\u5982\u679C\u6587\u4EF6\u5927\u4E8E\u8BE5\u9608\u503C\uFF0C\u4F1A\u81EA\u52A8\u7684\u4EA4\u7ED9 file-loader \u5904\u7406\u3002</li></ul><h2 id="css\u9884\u5904\u7406\u5668" tabindex="-1">css\u9884\u5904\u7406\u5668 <a class="header-anchor" href="#css\u9884\u5904\u7406\u5668" aria-hidden="true">#</a></h2><blockquote><p>npm install -D sass-loader node-sass</p><p>npm install -D less less-loader</p><p>npm install -D stylus stylus-loader</p><p>npm install -D postcss-loader</p></blockquote><h2 id="scoped-css" tabindex="-1">Scoped CSS <a class="header-anchor" href="#scoped-css" aria-hidden="true">#</a></h2><ul><li><p>\u901A\u8FC7PostCSS\u8F6C\u6362\uFF0C\u539F\u6765\u7684\u9009\u62E9\u5668\u4F1A\u590D\u5408\u5C5E\u6027\u9009\u62E9\u5668[data-v-uid]</p></li><li><p>\u4F18\u5148\u9009\u62E9\u7C7B\u9009\u62E9\u5668\u6216id\u9009\u62E9\u5668</p></li><li><p>\u6DF7\u7528\u672C\u5730\u548C\u5168\u5C40\u6837\u5F0F\uFF1A\u5728\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u540C\u65F6\u4F7F\u7528\u6709 scoped \u548C\u975E scoped \u6837\u5F0F</p></li><li><p>\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\uFF1A\u4F7F\u7528 scoped \u540E\uFF0C\u7236\u7EC4\u4EF6\u7684\u6837\u5F0F\u5C06\u4E0D\u4F1A\u6E17\u900F\u5230\u5B50\u7EC4\u4EF6\u4E2D\u3002\u4E0D\u8FC7\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u7684\u6839\u8282\u70B9\u4F1A\u540C\u65F6\u53D7\u5176\u7236\u7EC4\u4EF6\u7684 scoped CSS \u548C\u5B50\u7EC4\u4EF6\u7684 scoped CSS \u7684\u5F71\u54CD\u3002</p></li><li><p>\u6DF1\u5EA6\u4F5C\u7528\u9009\u62E9\u5668</p><ul><li>stylus\u7684\u6837\u5F0F\u7A7F\u900F \u4F7F\u7528 &gt;&gt;&gt;</li><li>sass\u3001scss\u548Cless\u7684\u6837\u5F0F\u7A7F\u900F \u4F7F\u7528 /deep/</li><li>sass\u3001scss\u548Cless\u7684\u6837\u5F0F\u7A7F\u900F \u4F7F\u7528 ::v-deep</li><li>/deep/ ::v-deep \u90FD\u662F&gt;&gt;&gt;\u7684\u522B\u540D</li></ul></li><li><p>\u52A8\u6001\u751F\u6210\u7684\u5185\u5BB9\uFF1A\u901A\u8FC7 v-html \u521B\u5EFA\u7684 DOM \u5185\u5BB9\u4E0D\u53D7 scoped \u6837\u5F0F\u5F71\u54CD\uFF0C\u4F46\u662F\u4F60\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7\u6DF1\u5EA6\u4F5C\u7528\u9009\u62E9\u5668\u6765\u4E3A\u4ED6\u4EEC\u8BBE\u7F6E\u6837\u5F0F\u3002</p></li><li><p>\u5728\u9012\u5F52\u7EC4\u4EF6\u4E2D\u5C0F\u5FC3\u4F7F\u7528\u540E\u4EE3\u9009\u62E9\u5668! \u5BF9\u9009\u62E9\u5668 .a .b \u4E2D\u7684 CSS \u89C4\u5219\u6765\u8BF4\uFF0C\u5982\u679C\u5339\u914D .a \u7684\u5143\u7D20\u5305\u542B\u4E00\u4E2A\u9012\u5F52\u5B50\u7EC4\u4EF6\uFF0C\u5219\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E2D\u7684 .b \u90FD\u5C06\u88AB\u8FD9\u4E2A\u89C4\u5219\u5339\u914D</p></li></ul><h2 id="vue-\u5355\u6587\u4EF6\u7EC4\u4EF6-sfc-\u89C4\u8303" tabindex="-1">Vue \u5355\u6587\u4EF6\u7EC4\u4EF6 (SFC) \u89C4\u8303 <a class="header-anchor" href="#vue-\u5355\u6587\u4EF6\u7EC4\u4EF6-sfc-\u89C4\u8303" aria-hidden="true">#</a></h2><h3 id="\u6A21\u677F" tabindex="-1">\u6A21\u677F <a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a></h3><ul><li>\u6BCF\u4E2A <code>.vue</code> \u6587\u4EF6\u6700\u591A\u5305\u542B\u4E00\u4E2A <code>&lt;template&gt;</code> \u5757\u3002</li><li>\u5185\u5BB9\u5C06\u88AB\u63D0\u53D6\u5E76\u4F20\u9012\u7ED9 <code>vue-template-compiler</code> \u4E3A\u5B57\u7B26\u4E32\uFF0C\u9884\u5904\u7406\u4E3A JavaScript \u6E32\u67D3\u51FD\u6570\uFF0C\u5E76\u6700\u7EC8\u6CE8\u5165\u5230\u4ECE <code>&lt;script&gt;</code> \u5BFC\u51FA\u7684\u7EC4\u4EF6\u4E2D\u3002</li></ul><h3 id="\u811A\u672C" tabindex="-1">\u811A\u672C <a class="header-anchor" href="#\u811A\u672C" aria-hidden="true">#</a></h3><ul><li>\u6BCF\u4E2A <code>.vue</code> \u6587\u4EF6\u6700\u591A\u5305\u542B\u4E00\u4E2A <code>&lt;script&gt;</code> \u5757\u3002</li><li>\u8FD9\u4E2A\u811A\u672C\u4F1A\u4F5C\u4E3A\u4E00\u4E2A ES Module \u6765\u6267\u884C\u3002</li><li>\u5B83\u7684<strong>\u9ED8\u8BA4\u5BFC\u51FA</strong>\u5E94\u8BE5\u662F\u4E00\u4E2A Vue.js \u7684<a href="https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE" target="_blank" rel="noreferrer">\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61</a>\u3002\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u7531 <code>Vue.extend()</code> \u521B\u5EFA\u7684\u6269\u5C55\u5BF9\u8C61\uFF0C\u4F46\u662F\u666E\u901A\u5BF9\u8C61\u662F\u66F4\u597D\u7684\u9009\u62E9\u3002</li><li>\u4EFB\u4F55\u5339\u914D <code>.js</code> \u6587\u4EF6 (\u6216\u901A\u8FC7\u5B83\u7684 <code>lang</code> \u7279\u6027\u6307\u5B9A\u7684\u6269\u5C55\u540D) \u7684 webpack \u89C4\u5219\u90FD\u5C06\u4F1A\u8FD0\u7528\u5230\u8FD9\u4E2A <code>&lt;script&gt;</code> \u5757\u7684\u5185\u5BB9\u4E2D\u3002</li></ul><h3 id="\u6837\u5F0F" tabindex="-1">\u6837\u5F0F <a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a></h3><ul><li>\u9ED8\u8BA4\u5339\u914D\uFF1A<code>/\\.css$/</code>\u3002</li><li>\u4E00\u4E2A <code>.vue</code> \u6587\u4EF6\u53EF\u4EE5\u5305\u542B\u591A\u4E2A <code>&lt;style&gt;</code> \u6807\u7B7E\u3002</li><li><code>&lt;style&gt;</code>\xA0\u6807\u7B7E\u53EF\u4EE5\u6709\xA0scoped\xA0\u6216\u8005\xA0module\xA0\u5C5E\u6027\u3002</li><li>\u4EFB\u4F55\u5339\u914D <code>.css</code> \u6587\u4EF6 (\u6216\u901A\u8FC7\u5B83\u7684 <code>lang</code> \u7279\u6027\u6307\u5B9A\u7684\u6269\u5C55\u540D) \u7684 webpack \u89C4\u5219\u90FD\u5C06\u4F1A\u8FD0\u7528\u5230\u8FD9\u4E2A <code>&lt;style&gt;</code> \u5757\u7684\u5185\u5BB9\u4E2D\u3002</li></ul>',17),t=[i];function c(o,r,n,p,u,h){return s(),l("div",null,t)}const _=e(a,[["render",c]]);export{g as __pageData,_ as default};
