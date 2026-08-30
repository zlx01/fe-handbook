# [GitHub Packages](https://github.com/features/packages)

GitHub Packages 是与 GitHub 仓库、组织和 GitHub Actions 集成的托管制品仓库。它支持 npm、RubyGems、Maven、Gradle、NuGet，以及用于保存 Docker 和 OCI 镜像的 GitHub Container Registry（GHCR）。

## 仓库地址

常用的 GitHub.com 仓库地址如下：

| 制品类型 | 仓库地址 |
|---|---|
| npm | `https://npm.pkg.github.com` |
| Container / OCI | `ghcr.io` |

其他包格式的地址和客户端配置参见 [GitHub Packages 官方文档](https://docs.github.com/packages/working-with-a-github-packages-registry)。

## npm 使用方式

GitHub Packages 中的 npm 包必须使用用户或组织名作为 scope。可以在项目的 `.npmrc` 中配置：

```ini
@my-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

发布的包名需要使用相同的 scope：

```json
{
  "name": "@my-org/my-package",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

不要把访问令牌直接写入 `.npmrc` 或提交到代码仓库。

## GitHub Actions 集成

工作流发布当前仓库关联的包时，优先使用自动生成的 `GITHUB_TOKEN`，并显式声明最小权限：

```yaml
permissions:
  contents: read
  packages: write
```

安装其他私有仓库关联的包时，需要向工作流仓库授予该包的读取权限；无法使用 `GITHUB_TOKEN` 时，再使用具备最小 `read:packages` 权限的 Personal Access Token（classic）。具体工作流写法参见 [GitHub Actions](../ci-cd/github-actions.md)。

## 生产建议

- 区分读取、发布和删除权限，流水线只获得完成任务所需的最小权限。
- 正式版本使用不可重复的版本号；容器部署固定镜像 digest，不依赖浮动标签。
- 为包设置合适的可见性，并确认权限是继承自仓库还是单独管理。
- 为开发版本、预发布版本和正式版本设置不同的保留策略。
- 将包或镜像与来源 Commit、工作流、SBOM、签名及漏洞扫描结果关联。

