# [Jenkins](https://github.com/jenkinsci/jenkins)

**Written in Java.**

Jenkins 是一个开源的自动化服务器，主要用于实现 CI/CD（持续集成与持续交付/部署）。

简单来说：开发者提交代码后，Jenkins 可以自动拉取代码、安装依赖、运行测试、构建产物，并把应用部署到服务器。

典型流程如下：

```text
提交代码
   ↓
Jenkins 检测到变更
   ↓
拉取代码 → 安装依赖 → 代码检查 → 自动测试
   ↓
构建镜像或发布包
   ↓
部署到测试或生产环境
```

## 核心概念

- **Job（任务）**：一项自动化工作，例如构建前端项目。
- **Pipeline（流水线）**：按阶段组织的一整套自动化流程。
- **Stage（阶段）**：流水线中的逻辑步骤，如测试、构建、部署。
- **Agent（执行节点）**：实际运行构建任务的机器或容器。
- **Plugin（插件）**：扩展 Jenkins 的能力，例如集成 GitHub、Docker、Kubernetes。
- **Jenkinsfile**：存放在代码仓库中的流水线配置文件。

一个前端项目的简化 `Jenkinsfile`：

```groovy
pipeline {
    agent any

    stages {
        stage('安装依赖') {
            steps {
                sh 'npm ci'
            }
        }

        stage('检查与测试') {
            steps {
                sh 'npm run lint'
                sh 'npm test'
            }
        }

        stage('构建') {
            steps {
                sh 'npm run build'
            }
        }

        stage('部署') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}
```

## Jenkins 的优势

- 免费、开源，生态和插件非常丰富。
- 能适配几乎所有语言、构建工具和部署环境。
- 支持流水线即代码，配置可以和业务代码一起版本管理。
- 支持分布式构建，可使用多台机器并行执行任务。
- 适合内网和需要高度定制的企业环境。

## 常见不足

- 通常需要自行安装、升级、备份和维护。
- 插件过多时容易出现兼容性及安全问题。
- 默认界面和配置体验相对传统。
- 流水线复杂后，Groovy 脚本的维护成本可能较高。
- Jenkins 控制器和凭据管理需要认真做好安全加固。

## Jenkins 与其他 CI/CD 工具

Jenkins 更像一个高度可定制、自行托管的自动化平台。GitHub Actions、GitLab CI 等则与各自的代码托管平台结合得更紧密，初始配置通常更简单。

如果项目在 GitHub/GitLab 上且流程较标准，平台自带的 CI 往往更省事；如果需要内网部署、复杂插件、异构构建节点或深度定制，Jenkins 依然很有价值。
