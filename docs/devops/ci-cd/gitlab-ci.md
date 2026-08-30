# [GitLab CI/CD](https://about.gitlab.com/solutions/continuous-integration/)

- documentation: https://docs.gitlab.com/ci/
- blog-1：[gitlab ci/cd文档翻译](https://www.cnblogs.com/cjsblog/p/12256843.html)
- blog-2：[前端自动化部署](https://zhuanlan.zhihu.com/p/184936276)
- video：[GitLab CI/CD 系列教程](https://space.bilibili.com/38841498/channel/series)

## Concepts

- pipeline
- stage
- job

## `.gitlab-ci.yml`

### Simple

```
-job1:
  script:
    echo 'Hello world!'

```

### image

- common used：alpine docker node nginx java python

### cache

- Caching is shared between pipelines and jobs.

```
build-job:
  cache:
    key: "${CI_JOB_NAME}"
    when: 'always'
    paths:
    - node_modules

```

### artifacts

```
build-job:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/**

```

### include

```
# 引用当前项目
include:
  - local: '/templates/.gitlab-ci-template.yml'

# 引用指定项目
include:
  - project: 'my-group/my-project'
    ref: main
    file: '/templates/.gitlab-ci-template.yml'

  - project: 'my-group/my-project'
    ref: v1.0.0
    file: '/templates/.gitlab-ci-template.yml'

  - project: 'my-group/my-project'
    ref: 787123b47f14b552955ca2786bc9542ae66fee5b  # Git SHA
    file: '/templates/.gitlab-ci-template.yml'

```

### extends

- 以英文远点开头的任务名都是隐藏的任务，不会被执行，用于被另一个job继承

```
.job1:
  script:
  - echo "job1..."

job2:
  extends: .job1
  script:
  - echo "job2..."

```

### rules

```yaml
job1:
  script: echo
  rules:
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'

job2:
  script: echo
  rules:
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
    - if: '$CI_COMMIT_BRANCH == "develop"'
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'

```

`only`/`except` 已弃用，新配置使用 `rules`，并通过 `$CI_DEFAULT_BRANCH` 避免硬编码默认分支名。

## Variables

- [Predefined variables](https://docs.gitlab.com/ci/variables/predefined_variables.html)
- `.gitlab-ci.yml`文件中用`variables`关键词定义变量
- 菜单 GitLab => Settings => CI/CD 中配置，一般用于配置秘钥等不适合放在`.gitlab-ci.yml`中的变量

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

- push/merge code
- 定时任务
- url触发
- 手动触发

### interrupt

1. 为job设置`interruptible: true`
2. 菜单 GitLab => Settings => CI/CD 中勾选 `Auto-cancel redundant pipelines`

## Practice

在公司部署前端项目时，一般是打包成`Docker`镜像，然后发布到`Harbor`镜像仓库，最后触发`rancher`上的`k8s`集群重启部署项目。开发团队共享一套`.gitlab-ci.yml`模板，模板文件主要有：**docker，node，maven，sonar、kubernetes**。项目的`.gitlab-ci.yml`根据需要**include**指定模板，在自定义job中**extends**或覆盖模板中的配置。多数情况只需配置项目相关的一些变量，如镜像名。开发成员操作空间较大的是项目的`Dockerfile`文件，可根据需要指定基础镜像（一般使用本地仓库定制化的镜像），项目打包构建也是在容器中进行的（可以用copy指令将当前workspace的代码拷贝到镜像中，用Run指令执行构建打包操作），根据`Dockerfile`这个“菜谱”制作出来的就是最终要运行的镜像。

