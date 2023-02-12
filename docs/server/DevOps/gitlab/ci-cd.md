# GitLab CI/CD

What is past is prologue. 凡是过去，皆为序章。	--William Shakespeare

<!--more-->

## Link

* official document：[docs.gitlab.com](https://docs.gitlab.com/ee/ci/)
* blog-1：[gitlab ci/cd文档翻译](https://www.cnblogs.com/cjsblog/p/12256843.html)
* blog-2：[前端自动化部署](https://zhuanlan.zhihu.com/p/184936276)

* blog column：[GitLab CI/CD 教程](https://blog.csdn.net/github_35631540/category_10804590.html)
* video：[GitLab CI/CD 系列教程](https://space.bilibili.com/38841498/channel/series)

## Concepts

* [CI/CD](https://docs.gitlab.com/ee/ci/)   [CI/CD](https://www.redhat.com/zh/topics/devops/what-is-ci-cd)
* pipeline
* stage
* job

## .gitlab-ci.yml

### Simple

```yml
-job1:
  script:
    echo 'Hello world!'
```

### [Keyword](https://docs.gitlab.com/ee/ci/yaml/index.html)

* [blog-1](https://blog.csdn.net/github_35631540/article/details/111029151)，[blog-2](https://fizzz.blog.csdn.net/article/details/111029163)，[blog-3](https://fizzz.blog.csdn.net/article/details/111029174)

#### image

* common used：alpine docker node nginx java python

#### cache

* Caching is shared between pipelines and jobs.

```yml
build-job:
  cache:
    key: "${CI_JOB_NAME}"
    when: 'always'
    paths:
    - node_modules
```

#### artifacts

```yml
build-job:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/**
```

#### include

```yml
# 引用当前项目
include:
  - local: '/templates/.gitlab-ci-template.yml'

# 引用指定项目
include:
  - project: 'my-group/my-project'
    ref: master
    file: '/templates/.gitlab-ci-template.yml'

  - project: 'my-group/my-project'
    ref: v1.0.0
    file: '/templates/.gitlab-ci-template.yml'

  - project: 'my-group/my-project'
    ref: 787123b47f14b552955ca2786bc9542ae66fee5b  # Git SHA
    file: '/templates/.gitlab-ci-template.yml'
```

#### extends

* 以英文远点开头的任务名都是隐藏的任务，不会被执行，用于被另一个job继承

```yml
.job1:
  script:
  - echo "job1..."

job2:
  extends: .job1
  script:
  - echo "job2..."
```

#### only

```yml
job1:
  script: echo
  only:
  - master

job2:
  script: echo
  only:
    refs:
    - master
    - develop
    - merge_requests
```



## Variables

* [Predefined variables](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)
* `.gitlab-ci.yml`文件中用`variables`关键词定义变量
* 菜单 GitLab => Settings => CI/CD 中配置，一般用于配置秘钥等不适合放在`.gitlab-ci.yml`中的变量

```bash
variables:
  TEST1: "HELLO WORLD"
  TEST2: "GITLAB"

test_variable:
  stage: test
  script:
    - echo $CI_JOB_STAGE
    - echo "$TEST1"

# 以下job会在作业运行日志中输出所有变量
get_all_var:
  stage: test
  script:
  - export
```



## Pipeline

### trigger

* push/merge code
* 定时任务
* url触发
* 手动触发

### interrupt

1. 为job设置`interruptible: true`

2. 菜单 GitLab => Settings => CI/CD 中勾选 `Auto-cancel redundant pipelines`



## Deployment

* Project-Front-End

```yml
image: node:latest
 
stages:
  - install
  - test
  - build-dist
 
# 在流水线中使用package.json缓存node_modules,只要package.json内容没变就一直使用缓存
cache:
  key:
    files:
      - package.json
  paths:
    - node_modules
 
# 定义安装npm包的job
install:
  stage: install
  script:
    - npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
    - npm install --registry=http://registry.npm.taobao.org
 
# 定义代码验证的job
code-lint:
  stage: test
  script:
    - npm run lint
  allow_failure: true # 运行失败,代码验证失败后仍然会执行后续job
 
# 编译生成文件的job
build-dist:
  stage: build-dist
  before_script:
    - 'command -v ssh-agent >/dev/null || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
 
    - ssh-keyscan 115.159.52.223 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - npm run build
    - scp -r dist root@115.159.52.223:/usr/local/www
  artifacts:
    paths:
      - dist
  only: # 只在master分支编译,为了能够
    - master

# 上传
.deploy-job:
  script:
    - sshpass -p $PASSWORD scp -r ./build $CUSTOM_USERNAME@$CUSTOM_IP:/var/www/html
```

* [镜像部署，服务器部署](https://fizzz.blog.csdn.net/article/details/108346647)

```yml
image: node:latest
 
stages:
  - install
  - code-lint
  - build
  - deploy-test
  - deploy-uat
  - deploy-pro
 
cache:
  paths:
    - node_modules
 
install:
  stage: install
  script:
    - npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
    - npm install --registry=http://registry.npm.taobao.org
 
code-lint:
  stage: code-lint
  script:
    - npm run lint
 
deploy-test-server:
  stage: deploy-test
  before_script:
    # 如果没有安装 `ssh-agent`,就安装，基于RPM的镜像可以将apt-get替换为yum
    - 'command -v ssh-agent >/dev/null || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s) # 运行ssh-agent
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
 
    # 创建对应的目录并给相应的权限
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
 
    - ssh-keyscan 115.159.52.223 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - npm run build
    - scp -r dist/* root@115.159.52.223:/usr/local/www/hello-vue
#   only:
#     - master
  when: manual

deploy-uat-server:
  stage: deploy-uat
  before_script:
    # 如果没有安装 `ssh-agent`,就安装，基于RPM的镜像可以将apt-get替换为yum
    - 'command -v ssh-agent >/dev/null || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s) # 运行ssh-agent
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
 
    # 创建对应的目录并给相应的权限
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
 
    - ssh-keyscan 115.159.52.223 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - npm run build
    - scp -r dist/* root@115.159.52.223:/usr/local/www/hello-vue
#   only:
#     - master
  when: manual

deploy-pro-server:
  stage: deploy-pro
  before_script:
    # 如果没有安装 `ssh-agent`,就安装，基于RPM的镜像可以将apt-get替换为yum
    - 'command -v ssh-agent >/dev/null || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s) # 运行ssh-agent
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
 
    # 创建对应的目录并给相应的权限
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
 
    - ssh-keyscan 115.159.52.223 >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script:
    - npm run build
    - scp -r dist/* root@115.159.52.223:/usr/local/www/hello-vue
  only:
    - master
  when: manual
 
deploy-test-image:
  image: $DOCKER_IMG
  stage: deploy-test
  script:
    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL # 登录镜像仓库
    - docker build -t $APP_IMAGE_NAME . # 构建镜像
    - docker push $APP_IMAGE_TEST_NAME # 推送镜像
    - docker rmi $APP_IMAGE_TEST_NAME # 删除本地镜像
    # 如果有容器名为$APP_CONTAINER_NAME的容器在运行则强行上删除
    - if [ $(docker ps -aq --filter name=$APP_CONTAINER_TEST_NAME) ]; then docker rm -f $APP_CONTAINER_TEST_NAME; docker image rm -f $APP_IMAGE_TEST_NAME;fi
 
    # 登录镜像仓库
    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL
 
    # 使用8001端口,镜像名为$APP_CONTAINER_NAME的后台方式 运行一个镜像
    - docker run -d -p 8001:80 --name $APP_CONTAINER_TEST_NAME $APP_IMAGE_TEST_NAME
    - echo 'deploy test websit success 端口：8001'
  when: manual # 手动执行,需要点击
 
 
deploy-uat-image:
  image: $DOCKER_IMG
  stage: deploy-uat
  script:
    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL # 登录镜像仓库
    - docker build -t $APP_IMAGE_UAT_NAME . # 构建镜像
    - docker push $APP_IMAGE_UAT_NAME # 推送镜像
    - docker rmi $APP_IMAGE_UAT_NAME # 删除本地镜像
    # 如果有容器名为$APP_CONTAINER_NAME的容器在运行则强行上删除
    - if [ $(docker ps -aq --filter name=$APP_CONTAINER_UAT_NAME) ]; then docker rm -f $APP_CONTAINER_UAT_NAME; docker image rm -f $APP_IMAGE_UAT_NAME;fi
 
    # 登录镜像仓库
    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL
 
    # 使用8001端口,镜像名为$APP_CONTAINER_NAME的后台方式 运行一个镜像
    - docker run -d -p 8002:80 --name $APP_CONTAINER_UAT_NAME $APP_IMAGE_UAT_NAME
    - echo 'deploy uat websit success 端口:8002'
  when: manual # 手动执行,需要点击
  
deploy-pro-image:
  image: $DOCKER_IMG
  stage: deploy-pro
  script:
    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL # 登录镜像仓库
    - docker build -t $APP_IMAGE_PRO_NAME . # 构建镜像
    - docker push $APP_IMAGE_PRO_NAME # 推送镜像
    - docker rmi $APP_IMAGE_PRO_NAME # 删除本地镜像
    # 如果有容器名为$APP_CONTAINER_NAME的容器在运行则强行上删除
    - if [ $(docker ps -aq --filter name=$APP_CONTAINER_PRO_NAME) ]; then docker rm -f $APP_CONTAINER_PRO_NAME; docker image rm -f $APP_IMAGE_PRO_NAME;fi
 
    # 登录镜像仓库
    - docker login -u $HARBOR_USERNAME -p $HARBOR_PWD $HARBOR_URL
 
    # 使用8001端口,镜像名为$APP_CONTAINER_NAME的后台方式 运行一个镜像
    - docker run -d -p 8003:80 --name $APP_CONTAINER_PRO_NAME $APP_IMAGE_PRO_NAME
    - echo 'deploy product websit success 端口:8003'
  when: manual # 手动执行,需要点击
```

## Practice

在公司部署前端项目时，一般是打包成`Docker`镜像，然后发布到`Harbor`镜像仓库，最后触发`rancher`上的`k8s`集群重启部署项目。开发团队共享一套`.gitlab-ci.yml`模板，模板文件主要有：**docker，node，maven，sonar、kubernetes**。项目的`.gitlab-ci.yml`根据需要**include**指定模板，在自定义job中**extends**或覆盖模板中的配置。多数情况只需配置项目相关的一些变量，如镜像名。开发成员操作空间较大的是项目的`Dockerfile`文件，可根据需要指定基础镜像（一般使用本地仓库定制化的镜像），项目打包构建也是在容器中进行的（可以用copy指令将当前workspace的代码拷贝到镜像中，用Run指令执行构建打包操作），根据`Dockerfile`这个“菜谱”制作出来的就是最终要运行的镜像。

## Extensive Reading

### YAML

* wiki：https://en.wikipedia.org/wiki/YAML
* tutoral：https://www.ruanyifeng.com/blog/2016/07/yaml.html
