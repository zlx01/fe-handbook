import{_ as n,c as i,o as a,ag as l}from"./chunks/framework.C86mscM5.js";const d=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"devops/ci-cd/jenkins.md","filePath":"devops/ci-cd/jenkins.md","lastUpdated":1788092044000}'),p={name:"devops/ci-cd/jenkins.md"};function e(t,s,h,k,E,r){return a(),i("div",null,s[0]||(s[0]=[l(`<h1 id="jenkins" tabindex="-1"><a href="https://github.com/jenkinsci/jenkins" target="_blank" rel="nofollow noopener noreferrer">Jenkins</a> <a class="header-anchor" href="#jenkins" aria-label="Permalink to &quot;[Jenkins](https://github.com/jenkinsci/jenkins)&quot;">​</a></h1><p><strong>Written in Java.</strong></p><p>Jenkins 是一个开源的自动化服务器，主要用于实现 CI/CD（持续集成与持续交付/部署）。</p><p>简单来说：开发者提交代码后，Jenkins 可以自动拉取代码、安装依赖、运行测试、构建产物，并把应用部署到服务器。</p><p>典型流程如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>提交代码</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>Jenkins 检测到变更</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>拉取代码 → 安装依赖 → 代码检查 → 自动测试</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>构建镜像或发布包</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>部署到测试或生产环境</span></span></code></pre></div><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><ul><li><strong>Job（任务）</strong>：一项自动化工作，例如构建前端项目。</li><li><strong>Pipeline（流水线）</strong>：按阶段组织的一整套自动化流程。</li><li><strong>Stage（阶段）</strong>：流水线中的逻辑步骤，如测试、构建、部署。</li><li><strong>Agent（执行节点）</strong>：实际运行构建任务的机器或容器。</li><li><strong>Plugin（插件）</strong>：扩展 Jenkins 的能力，例如集成 GitHub、Docker、Kubernetes。</li><li><strong>Jenkinsfile</strong>：存放在代码仓库中的流水线配置文件。</li></ul><p>一个前端项目的简化 <code>Jenkinsfile</code>：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pipeline {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    agent any</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stages {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;安装依赖&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npm ci&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;检查与测试&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npm run lint&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npm test&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;构建&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npm run build&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stage(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;部署&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            steps {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                sh </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./deploy.sh&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="jenkins-的优势" tabindex="-1">Jenkins 的优势 <a class="header-anchor" href="#jenkins-的优势" aria-label="Permalink to &quot;Jenkins 的优势&quot;">​</a></h2><ul><li>免费、开源，生态和插件非常丰富。</li><li>能适配几乎所有语言、构建工具和部署环境。</li><li>支持流水线即代码，配置可以和业务代码一起版本管理。</li><li>支持分布式构建，可使用多台机器并行执行任务。</li><li>适合内网和需要高度定制的企业环境。</li></ul><h2 id="常见不足" tabindex="-1">常见不足 <a class="header-anchor" href="#常见不足" aria-label="Permalink to &quot;常见不足&quot;">​</a></h2><ul><li>通常需要自行安装、升级、备份和维护。</li><li>插件过多时容易出现兼容性及安全问题。</li><li>默认界面和配置体验相对传统。</li><li>流水线复杂后，Groovy 脚本的维护成本可能较高。</li><li>Jenkins 控制器和凭据管理需要认真做好安全加固。</li></ul><h2 id="jenkins-与其他-ci-cd-工具" tabindex="-1">Jenkins 与其他 CI/CD 工具 <a class="header-anchor" href="#jenkins-与其他-ci-cd-工具" aria-label="Permalink to &quot;Jenkins 与其他 CI/CD 工具&quot;">​</a></h2><p>Jenkins 更像一个高度可定制、自行托管的自动化平台。GitHub Actions、GitLab CI 等则与各自的代码托管平台结合得更紧密，初始配置通常更简单。</p><p>如果项目在 GitHub/GitLab 上且流程较标准，平台自带的 CI 往往更省事；如果需要内网部署、复杂插件、异构构建节点或深度定制，Jenkins 依然很有价值。</p>`,17)]))}const o=n(p,[["render",e]]);export{d as __pageData,o as default};
