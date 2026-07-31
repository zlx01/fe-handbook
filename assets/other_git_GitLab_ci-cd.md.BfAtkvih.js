import{_ as a,c as n,o as p,aM as e}from"./chunks/framework.kKeYZnSg.js";const g=JSON.parse('{"title":"GitLab CI/CD","description":"","frontmatter":{},"headers":[],"relativePath":"other/git/GitLab/ci-cd.md","filePath":"other/git/GitLab/ci-cd.md","lastUpdated":1785481197000}'),l={name:"other/git/GitLab/ci-cd.md"};function i(t,s,c,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="gitlab-ci-cd" tabindex="-1">GitLab CI/CD <a class="header-anchor" href="#gitlab-ci-cd" aria-label="Permalink to &quot;GitLab CI/CD&quot;">​</a></h1><h2 id="link" tabindex="-1">Link <a class="header-anchor" href="#link" aria-label="Permalink to &quot;Link&quot;">​</a></h2><ul><li>official document：<a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="nofollow noopener noreferrer">docs.gitlab.com</a></li><li>blog-1：<a href="https://www.cnblogs.com/cjsblog/p/12256843.html" target="_blank" rel="nofollow noopener noreferrer">gitlab ci/cd文档翻译</a></li><li>blog-2：<a href="https://zhuanlan.zhihu.com/p/184936276" target="_blank" rel="nofollow noopener noreferrer">前端自动化部署</a></li><li>video：<a href="https://space.bilibili.com/38841498/channel/series" target="_blank" rel="nofollow noopener noreferrer">GitLab CI/CD 系列教程</a></li></ul><h2 id="concepts" tabindex="-1">Concepts <a class="header-anchor" href="#concepts" aria-label="Permalink to &quot;Concepts&quot;">​</a></h2><ul><li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="nofollow noopener noreferrer">CI/CD</a> <a href="https://www.redhat.com/zh/topics/devops/what-is-ci-cd" target="_blank" rel="nofollow noopener noreferrer">CI/CD</a></li><li>pipeline</li><li>stage</li><li>job</li></ul><h2 id="gitlab-ci-yml" tabindex="-1">.gitlab-ci.yml <a class="header-anchor" href="#gitlab-ci-yml" aria-label="Permalink to &quot;.gitlab-ci.yml&quot;">​</a></h2><h3 id="simple" tabindex="-1">Simple <a class="header-anchor" href="#simple" aria-label="Permalink to &quot;Simple&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-job1:</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    echo &#39;Hello world!&#39;</span></span></code></pre></div><h3 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h3><ul><li>common used：alpine docker node nginx java python</li></ul><h3 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;cache&quot;">​</a></h3><ul><li>Caching is shared between pipelines and jobs.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>build-job:</span></span>
<span class="line"><span>  cache:</span></span>
<span class="line"><span>    key: &quot;\${CI_JOB_NAME}&quot;</span></span>
<span class="line"><span>    when: &#39;always&#39;</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>    - node_modules</span></span></code></pre></div><h3 id="artifacts" tabindex="-1">artifacts <a class="header-anchor" href="#artifacts" aria-label="Permalink to &quot;artifacts&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>build-job:</span></span>
<span class="line"><span>  stage: build</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>  artifacts:</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>      - dist/**</span></span></code></pre></div><h3 id="include" tabindex="-1">include <a class="header-anchor" href="#include" aria-label="Permalink to &quot;include&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 引用当前项目</span></span>
<span class="line"><span>include:</span></span>
<span class="line"><span>  - local: &#39;/templates/.gitlab-ci-template.yml&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 引用指定项目</span></span>
<span class="line"><span>include:</span></span>
<span class="line"><span>  - project: &#39;my-group/my-project&#39;</span></span>
<span class="line"><span>    ref: master</span></span>
<span class="line"><span>    file: &#39;/templates/.gitlab-ci-template.yml&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - project: &#39;my-group/my-project&#39;</span></span>
<span class="line"><span>    ref: v1.0.0</span></span>
<span class="line"><span>    file: &#39;/templates/.gitlab-ci-template.yml&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - project: &#39;my-group/my-project&#39;</span></span>
<span class="line"><span>    ref: 787123b47f14b552955ca2786bc9542ae66fee5b  # Git SHA</span></span>
<span class="line"><span>    file: &#39;/templates/.gitlab-ci-template.yml&#39;</span></span></code></pre></div><h3 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h3><ul><li>以英文远点开头的任务名都是隐藏的任务，不会被执行，用于被另一个job继承</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.job1:</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>  - echo &quot;job1...&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>job2:</span></span>
<span class="line"><span>  extends: .job1</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>  - echo &quot;job2...&quot;</span></span></code></pre></div><h3 id="only" tabindex="-1">only <a class="header-anchor" href="#only" aria-label="Permalink to &quot;only&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>job1:</span></span>
<span class="line"><span>  script: echo</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>  - master</span></span>
<span class="line"><span></span></span>
<span class="line"><span>job2:</span></span>
<span class="line"><span>  script: echo</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>    refs:</span></span>
<span class="line"><span>    - master</span></span>
<span class="line"><span>    - develop</span></span>
<span class="line"><span>    - merge_requests</span></span></code></pre></div><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><ul><li><a href="https://docs.gitlab.com/ee/ci/variables/predefined_variables.html" target="_blank" rel="nofollow noopener noreferrer">Predefined variables</a></li><li><code>.gitlab-ci.yml</code>文件中用<code>variables</code>关键词定义变量</li><li>菜单 GitLab =&gt; Settings =&gt; CI/CD 中配置，一般用于配置秘钥等不适合放在<code>.gitlab-ci.yml</code>中的变量</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">variables:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TEST1:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;HELLO WORLD&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TEST2:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;GITLAB&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test_variable:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  stage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  script:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CI_JOB_STAGE</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$TEST1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下job会在作业运行日志中输出所有变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_all_var:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  stage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  script:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span></span></code></pre></div><h2 id="pipeline" tabindex="-1">Pipeline <a class="header-anchor" href="#pipeline" aria-label="Permalink to &quot;Pipeline&quot;">​</a></h2><h3 id="trigger" tabindex="-1">trigger <a class="header-anchor" href="#trigger" aria-label="Permalink to &quot;trigger&quot;">​</a></h3><ul><li>push/merge code</li><li>定时任务</li><li>url触发</li><li>手动触发</li></ul><h3 id="interrupt" tabindex="-1">interrupt <a class="header-anchor" href="#interrupt" aria-label="Permalink to &quot;interrupt&quot;">​</a></h3><ol><li>为job设置<code>interruptible: true</code></li><li>菜单 GitLab =&gt; Settings =&gt; CI/CD 中勾选 <code>Auto-cancel redundant pipelines</code></li></ol><h2 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h2><ul><li>Project-Front-End</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>image: node:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stages:</span></span>
<span class="line"><span>  - install</span></span>
<span class="line"><span>  - test</span></span>
<span class="line"><span>  - build-dist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在流水线中使用package.json缓存node_modules,只要package.json内容没变就一直使用缓存</span></span>
<span class="line"><span>cache:</span></span>
<span class="line"><span>  key:</span></span>
<span class="line"><span>    files:</span></span>
<span class="line"><span>      - package.json</span></span>
<span class="line"><span>  paths:</span></span>
<span class="line"><span>    - node_modules</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义安装npm包的job</span></span>
<span class="line"><span>install:</span></span>
<span class="line"><span>  stage: install</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm config set sass_binary_site &lt;https://npm.taobao.org/mirrors/node-sass/&gt;</span></span>
<span class="line"><span>    - npm install --registry=http://registry.npm.taobao.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义代码验证的job</span></span>
<span class="line"><span>code-lint:</span></span>
<span class="line"><span>  stage: test</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run lint</span></span>
<span class="line"><span>  allow_failure: true # 运行失败,代码验证失败后仍然会执行后续job</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译生成文件的job</span></span>
<span class="line"><span>build-dist:</span></span>
<span class="line"><span>  stage: build-dist</span></span>
<span class="line"><span>  before_script:</span></span>
<span class="line"><span>    - &#39;command -v ssh-agent &gt;/dev/null || ( apt-get update -y &amp;&amp; apt-get install openssh-client -y )&#39;</span></span>
<span class="line"><span>    - eval $(ssh-agent -s)</span></span>
<span class="line"><span>    - echo &quot;$SSH_PRIVATE_KEY&quot; | tr -d &#39;\\\\r&#39; | ssh-add -</span></span>
<span class="line"><span>    - mkdir -p ~/.ssh</span></span>
<span class="line"><span>    - chmod 700 ~/.ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - ssh-keyscan 115.159.52.223 &gt;&gt; ~/.ssh/known_hosts</span></span>
<span class="line"><span>    - chmod 644 ~/.ssh/known_hosts</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>    - scp -r dist root@115.159.52.223:/usr/local/www</span></span>
<span class="line"><span>  artifacts:</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>      - dist</span></span>
<span class="line"><span>  only: # 只在master分支编译,为了能够</span></span>
<span class="line"><span>    - master</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 上传</span></span>
<span class="line"><span>.deploy-job:</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - sshpass -p $PASSWORD scp -r ./build $CUSTOM_USERNAME@$CUSTOM_IP:/var/www/html</span></span></code></pre></div><ul><li><a href="https://fizzz.blog.csdn.net/article/details/108346647" target="_blank" rel="nofollow noopener noreferrer">镜像部署，服务器部署</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>image: node:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stages:</span></span>
<span class="line"><span>  - install</span></span>
<span class="line"><span>  - code-lint</span></span>
<span class="line"><span>  - build</span></span>
<span class="line"><span>  - deploy-test</span></span>
<span class="line"><span>  - deploy-uat</span></span>
<span class="line"><span>  - deploy-pro</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cache:</span></span>
<span class="line"><span>  paths:</span></span>
<span class="line"><span>    - node_modules</span></span>
<span class="line"><span></span></span>
<span class="line"><span>install:</span></span>
<span class="line"><span>  stage: install</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm config set sass_binary_site &lt;https://npm.taobao.org/mirrors/node-sass/&gt;</span></span>
<span class="line"><span>    - npm install --registry=http://registry.npm.taobao.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>code-lint:</span></span>
<span class="line"><span>  stage: code-lint</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run lint</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy-test-server:</span></span>
<span class="line"><span>  stage: deploy-test</span></span>
<span class="line"><span>  before_script:</span></span>
<span class="line"><span>    # 如果没有安装 \`ssh-agent\`,就安装，基于RPM的镜像可以将apt-get替换为yum</span></span>
<span class="line"><span>    - &#39;command -v ssh-agent &gt;/dev/null || ( apt-get update -y &amp;&amp; apt-get install openssh-client -y )&#39;</span></span>
<span class="line"><span>    - eval $(ssh-agent -s) # 运行ssh-agent</span></span>
<span class="line"><span>    - echo &quot;$SSH_PRIVATE_KEY&quot; | tr -d &#39;\\\\r&#39; | ssh-add -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 创建对应的目录并给相应的权限</span></span>
<span class="line"><span>    - mkdir -p ~/.ssh</span></span>
<span class="line"><span>    - chmod 700 ~/.ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - ssh-keyscan 115.159.52.223 &gt;&gt; ~/.ssh/known_hosts</span></span>
<span class="line"><span>    - chmod 644 ~/.ssh/known_hosts</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>    - scp -r dist/* root@115.159.52.223:/usr/local/www/hello-vue</span></span>
<span class="line"><span>#   only:</span></span>
<span class="line"><span>#     - master</span></span>
<span class="line"><span>  when: manual</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy-uat-server:</span></span>
<span class="line"><span>  stage: deploy-uat</span></span>
<span class="line"><span>  before_script:</span></span>
<span class="line"><span>    # 如果没有安装 \`ssh-agent\`,就安装，基于RPM的镜像可以将apt-get替换为yum</span></span>
<span class="line"><span>    - &#39;command -v ssh-agent &gt;/dev/null || ( apt-get update -y &amp;&amp; apt-get install openssh-client -y )&#39;</span></span>
<span class="line"><span>    - eval $(ssh-agent -s) # 运行ssh-agent</span></span>
<span class="line"><span>    - echo &quot;$SSH_PRIVATE_KEY&quot; | tr -d &#39;\\\\r&#39; | ssh-add -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 创建对应的目录并给相应的权限</span></span>
<span class="line"><span>    - mkdir -p ~/.ssh</span></span>
<span class="line"><span>    - chmod 700 ~/.ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - ssh-keyscan 115.159.52.223 &gt;&gt; ~/.ssh/known_hosts</span></span>
<span class="line"><span>    - chmod 644 ~/.ssh/known_hosts</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>    - scp -r dist/* root@115.159.52.223:/usr/local/www/hello-vue</span></span>
<span class="line"><span>#   only:</span></span>
<span class="line"><span>#     - master</span></span>
<span class="line"><span>  when: manual</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy-pro-server:</span></span>
<span class="line"><span>  stage: deploy-pro</span></span>
<span class="line"><span>  before_script:</span></span>
<span class="line"><span>    # 如果没有安装 \`ssh-agent\`,就安装，基于RPM的镜像可以将apt-get替换为yum</span></span>
<span class="line"><span>    - &#39;command -v ssh-agent &gt;/dev/null || ( apt-get update -y &amp;&amp; apt-get install openssh-client -y )&#39;</span></span>
<span class="line"><span>    - eval $(ssh-agent -s) # 运行ssh-agent</span></span>
<span class="line"><span>    - echo &quot;$SSH_PRIVATE_KEY&quot; | tr -d &#39;\\\\r&#39; | ssh-add -</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 创建对应的目录并给相应的权限</span></span>
<span class="line"><span>    - mkdir -p ~/.ssh</span></span>
<span class="line"><span>    - chmod 700 ~/.ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - ssh-keyscan 115.159.52.223 &gt;&gt; ~/.ssh/known_hosts</span></span>
<span class="line"><span>    - chmod 644 ~/.ssh/known_hosts</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>    - scp -r dist/* root@115.159.52.223:/usr/local/www/hello-vue</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>    - master</span></span>
<span class="line"><span>  when: manual</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy-test-image:</span></span>
<span class="line"><span>  image: $DOCKER_IMG</span></span>
<span class="line"><span>  stage: deploy-test</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL # 登录镜像仓库</span></span>
<span class="line"><span>    - docker build -t $APP_IMAGE_NAME . # 构建镜像</span></span>
<span class="line"><span>    - docker push $APP_IMAGE_TEST_NAME # 推送镜像</span></span>
<span class="line"><span>    - docker rmi $APP_IMAGE_TEST_NAME # 删除本地镜像</span></span>
<span class="line"><span>    # 如果有容器名为$APP_CONTAINER_NAME的容器在运行则强行上删除</span></span>
<span class="line"><span>    - if [ $(docker ps -aq --filter name=$APP_CONTAINER_TEST_NAME) ]; then docker rm -f $APP_CONTAINER_TEST_NAME; docker image rm -f $APP_IMAGE_TEST_NAME;fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 登录镜像仓库</span></span>
<span class="line"><span>    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 使用8001端口,镜像名为$APP_CONTAINER_NAME的后台方式 运行一个镜像</span></span>
<span class="line"><span>    - docker run -d -p 8001:80 --name $APP_CONTAINER_TEST_NAME $APP_IMAGE_TEST_NAME</span></span>
<span class="line"><span>    - echo &#39;deploy test websit success 端口：8001&#39;</span></span>
<span class="line"><span>  when: manual # 手动执行,需要点击</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy-uat-image:</span></span>
<span class="line"><span>  image: $DOCKER_IMG</span></span>
<span class="line"><span>  stage: deploy-uat</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL # 登录镜像仓库</span></span>
<span class="line"><span>    - docker build -t $APP_IMAGE_UAT_NAME . # 构建镜像</span></span>
<span class="line"><span>    - docker push $APP_IMAGE_UAT_NAME # 推送镜像</span></span>
<span class="line"><span>    - docker rmi $APP_IMAGE_UAT_NAME # 删除本地镜像</span></span>
<span class="line"><span>    # 如果有容器名为$APP_CONTAINER_NAME的容器在运行则强行上删除</span></span>
<span class="line"><span>    - if [ $(docker ps -aq --filter name=$APP_CONTAINER_UAT_NAME) ]; then docker rm -f $APP_CONTAINER_UAT_NAME; docker image rm -f $APP_IMAGE_UAT_NAME;fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 登录镜像仓库</span></span>
<span class="line"><span>    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 使用8001端口,镜像名为$APP_CONTAINER_NAME的后台方式 运行一个镜像</span></span>
<span class="line"><span>    - docker run -d -p 8002:80 --name $APP_CONTAINER_UAT_NAME $APP_IMAGE_UAT_NAME</span></span>
<span class="line"><span>    - echo &#39;deploy uat websit success 端口:8002&#39;</span></span>
<span class="line"><span>  when: manual # 手动执行,需要点击</span></span>
<span class="line"><span></span></span>
<span class="line"><span>deploy-pro-image:</span></span>
<span class="line"><span>  image: $DOCKER_IMG</span></span>
<span class="line"><span>  stage: deploy-pro</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL # 登录镜像仓库</span></span>
<span class="line"><span>    - docker build -t $APP_IMAGE_PRO_NAME . # 构建镜像</span></span>
<span class="line"><span>    - docker push $APP_IMAGE_PRO_NAME # 推送镜像</span></span>
<span class="line"><span>    - docker rmi $APP_IMAGE_PRO_NAME # 删除本地镜像</span></span>
<span class="line"><span>    # 如果有容器名为$APP_CONTAINER_NAME的容器在运行则强行上删除</span></span>
<span class="line"><span>    - if [ $(docker ps -aq --filter name=$APP_CONTAINER_PRO_NAME) ]; then docker rm -f $APP_CONTAINER_PRO_NAME; docker image rm -f $APP_IMAGE_PRO_NAME;fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 登录镜像仓库</span></span>
<span class="line"><span>    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 使用8001端口,镜像名为$APP_CONTAINER_NAME的后台方式 运行一个镜像</span></span>
<span class="line"><span>    - docker run -d -p 8003:80 --name $APP_CONTAINER_PRO_NAME $APP_IMAGE_PRO_NAME</span></span>
<span class="line"><span>    - echo &#39;deploy product websit success 端口:8003&#39;</span></span>
<span class="line"><span>  when: manual # 手动执行,需要点击</span></span></code></pre></div><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>在公司部署前端项目时，一般是打包成<code>Docker</code>镜像，然后发布到<code>Harbor</code>镜像仓库，最后触发<code>rancher</code>上的<code>k8s</code>集群重启部署项目。开发团队共享一套<code>.gitlab-ci.yml</code>模板，模板文件主要有：<strong>docker，node，maven，sonar、kubernetes</strong>。项目的<code>.gitlab-ci.yml</code>根据需要<strong>include</strong>指定模板，在自定义job中<strong>extends</strong>或覆盖模板中的配置。多数情况只需配置项目相关的一些变量，如镜像名。开发成员操作空间较大的是项目的<code>Dockerfile</code>文件，可根据需要指定基础镜像（一般使用本地仓库定制化的镜像），项目打包构建也是在容器中进行的（可以用copy指令将当前workspace的代码拷贝到镜像中，用Run指令执行构建打包操作），根据<code>Dockerfile</code>这个“菜谱”制作出来的就是最终要运行的镜像。</p><h2 id="extensive-reading" tabindex="-1">Extensive Reading <a class="header-anchor" href="#extensive-reading" aria-label="Permalink to &quot;Extensive Reading&quot;">​</a></h2><h3 id="yaml" tabindex="-1">YAML <a class="header-anchor" href="#yaml" aria-label="Permalink to &quot;YAML&quot;">​</a></h3><ul><li>wiki：<a href="https://en.wikipedia.org/wiki/YAML" target="_blank" rel="nofollow noopener noreferrer">https://en.wikipedia.org/wiki/YAML</a></li><li>tutoral：<a href="https://www.ruanyifeng.com/blog/2016/07/yaml.html" target="_blank" rel="nofollow noopener noreferrer">https://www.ruanyifeng.com/blog/2016/07/yaml.html</a></li></ul>`,40)]))}const u=a(l,[["render",i]]);export{g as __pageData,u as default};
