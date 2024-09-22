import{_ as a,c as s,o,j as e,a as t}from"./chunks/framework.CFdyflnk.js";const M=JSON.parse('{"title":"ES Module","description":"","frontmatter":{},"headers":[],"relativePath":"fundamentals/js/modular/esm.md","filePath":"fundamentals/js/modular/esm.md","lastUpdated":1727024381000}'),n={name:"fundamentals/js/modular/esm.md"},d=e("h1",{id:"es-module",tabindex:"-1"},[t("ES Module "),e("a",{class:"header-anchor",href:"#es-module","aria-label":'Permalink to "ES Module"'},"​")],-1),l=e("p",null,"ESM是JavaScript提出的官方标准化模块系统，可以直接在浏览器中执行import，动态引入模块。",-1),r=e("p",null,"无需打包整个应用，而是将依赖解析的工作交给浏览器，让浏览器去解析需要哪些文件并只对这些文件发起请求。",-1),c=e("p",null,"ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。",-1),i=e("p",null,[t("用于在现代浏览器中通过 "),e("code",null,'<script type="module">'),t(" 直接导入。")],-1),m=[d,l,r,c,i];function _(u,p,h,f,S,E){return o(),s("div",null,m)}const j=a(n,[["render",_]]);export{M as __pageData,j as default};