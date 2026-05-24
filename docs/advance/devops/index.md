# DevOps

> 持续集成、持续交付、持续部署

## 持续集成工具

- [Jenkins](https://www.jenkins.io/)
- [Travis CI](https://travis-ci.org/)
- [CircleCI](https://circleci.com/)

## 规范

* 代码及依赖规范
* 命名规范
* 开发规范
* 配置规范
* 部署规范
* 安全规范
* 测试规范

## 代码静态检查

* SonarQube、SonarLint
* ESLint

## 环境

* 开发环境
* 测试环境（多套，不同机器，代理转发，whistle/nohost）
* 预发布环境
* 生产环境

## 配置

* 配置中心
* 配置文件
* 环境变量

## 私有仓库

* GitLab
* Nexus
* JFrog Artifactory
* Harbor

## 灰度发布

* 蓝绿发布：两套环境切换
* 滚动发布：逐步更新机器
* 金丝雀发布：特定用户


## 监控

* 用户侧监控，关注的是用户真正感受到的访问速度和结果
* 网络监控，即 CDN 与核心网络的监控
* 业务监控，关注的是核心业务指标的波动
* 应用监控，即服务调用链的监控
* 系统监控，即基础设施、虚拟机及操作系统的监控

## 回滚代码

* reset --hard  不推荐
* push -f 否则会被拒绝
* 应该用 revert 重新提交
