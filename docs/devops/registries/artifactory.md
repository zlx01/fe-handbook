# JFrog Artifactory

JFrog Artifactory 是支持多种包格式和通用文件的制品仓库管理器，可用于代理外部软件源、托管内部制品，并在多个环境或区域之间分发经过验证的构建产物。

## 核心概念

- **remote repository**：代理并缓存外部软件源。
- **local repository**：保存组织内部构建和发布的制品。
- **virtual repository**：将多个 remote 和 local 仓库组合成统一入口。

开发环境和 CI 通常从 virtual repository 下载依赖，发布流水线则把制品上传到用途明确的 local repository。

## npm 使用方式

将项目的下载地址指向 npm virtual repository：

```ini
registry=https://artifactory.example.com/artifactory/api/npm/npm-virtual/
```

发布私有包时使用对应的 local repository，并通过流水线的密钥管理能力注入访问令牌。不要在 `.npmrc` 或流水线配置中保存明文凭据。

## 生产建议

- 按包格式、团队或生命周期划分仓库，避免开发快照与正式制品混放。
- 对正式版本启用不可覆盖策略，并保留发布人、来源 Commit 和构建记录。
- 根据风险要求评估高可用、跨区域复制、制品签名和安全扫描能力。
- 为缓存、属性元数据和二进制文件制定一致的备份与恢复方案。
- 配置保留策略清理过期快照，同时保护仍被生产环境引用的制品。

Artifactory 的扩展能力较多，但部分治理、安全和高可用能力可能与产品版本或许可证有关。选型时应先验证所需功能和总体维护成本。
