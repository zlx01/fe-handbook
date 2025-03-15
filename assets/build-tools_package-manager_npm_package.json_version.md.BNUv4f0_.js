import{_ as a,c as l,o as r,ag as t}from"./chunks/framework.C86mscM5.js";const m=JSON.parse('{"title":"version","description":"","frontmatter":{},"headers":[],"relativePath":"build-tools/package-manager/npm/package.json/version.md","filePath":"build-tools/package-manager/npm/package.json/version.md","lastUpdated":1742048178000}'),o={name:"build-tools/package-manager/npm/package.json/version.md"};function n(i,e,s,p,c,h){return r(),l("div",null,e[0]||(e[0]=[t('<h1 id="version" tabindex="-1">version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;version&quot;">​</a></h1><h2 id="semver" tabindex="-1"><a href="https://semver.org/" target="_blank" rel="nofollow noopener noreferrer">SemVer</a> <a class="header-anchor" href="#semver" aria-label="Permalink to &quot;[SemVer](https://semver.org/)&quot;">​</a></h2><ul><li>Semantic Versioning 语义化版本</li><li>MAJOR.MINOR.PATCH 主版本号.次版本号.修订号</li></ul><h2 id="版本号比较" tabindex="-1">版本号比较 <a class="header-anchor" href="#版本号比较" aria-label="Permalink to &quot;版本号比较&quot;">​</a></h2><p>1.0.0 &lt; 2.0.0 &lt; 2.1.0 &lt; 2.1.1</p><p>1.0.0-alpha &lt; 1.0.0</p><p>1.0.0-alpha &lt; 1.0.0-alpha.1 &lt; 1.0.0-alpha.beta &lt; 1.0.0-beta &lt; 1.0.0-beta.2 &lt; 1.0.0-beta.11 &lt; 1.0.0-rc.1 &lt; 1.0.0</p><h2 id="版本号递增规则" tabindex="-1">版本号递增规则 <a class="header-anchor" href="#版本号递增规则" aria-label="Permalink to &quot;版本号递增规则&quot;">​</a></h2><ul><li>主版本号：当你做了不兼容的 API 修改，</li><li>次版本号：当你做了向下兼容的功能性新增，</li><li>修订号：当你做了向下兼容的问题修正。</li></ul><h2 id="npm安装规则" tabindex="-1">npm安装规则 <a class="header-anchor" href="#npm安装规则" aria-label="Permalink to &quot;npm安装规则&quot;">​</a></h2><blockquote><p>指定版本：比如 1.2.2 ，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。</p><p>波浪号（tilde）+指定版本：比如 ~1.2.2 ，表示安装 1.2.x 的最新版本（不低于1.2.2），但是不安装 1.3.x，也就是说安装时不改变大版本号和次要版本号。</p><p>插入号（caret）+指定版本：比如 ˆ1.2.2，表示安装 1.x.x 的最新版本（不低于 1.2.2），但是不安装 2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。</p><p><code>npm install [package]</code>，第一次安装是最新版本，写到 <code>package.json</code> 中版本号是插入号形式。</p></blockquote><h2 id="版本锁定" tabindex="-1">版本锁定 <a class="header-anchor" href="#版本锁定" aria-label="Permalink to &quot;版本锁定&quot;">​</a></h2><ul><li>package-lock.json</li><li>yarn.lock</li><li>pnpm-lock.yaml</li></ul><h3 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h3><ul><li><a href="https://segmentfault.com/a/1190000039684460" target="_blank" rel="nofollow noopener noreferrer">https://segmentfault.com/a/1190000039684460</a></li><li><a href="https://semver.org/lang/zh-CN/" target="_blank" rel="nofollow noopener noreferrer">https://semver.org/lang/zh-CN/</a></li></ul>',15)]))}const u=a(o,[["render",n]]);export{m as __pageData,u as default};
