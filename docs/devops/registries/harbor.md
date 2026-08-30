# [Harbor](https://github.com/goharbor/harbor)

**Written in Go.**

Harbor 是一个开源的企业级容器镜像仓库，用来集中存储、管理和分发 Docker/OCI 镜像。可以把它理解成“企业内部自建的 Docker Hub”，尤其适合 Kubernetes 和私有化部署环境。



## 核心能力

- **镜像仓库**：按项目组织、推送和拉取容器镜像
- **访问控制**：支持用户、角色和项目级权限管理
- **安全扫描**：扫描镜像中的已知漏洞
- **镜像签名与策略**：帮助确保镜像来源可信
- **跨仓库复制**：在多个 Harbor 或其他镜像仓库之间同步镜像
- **审计日志**：记录登录、推送、删除等操作
- **垃圾回收**：清理不再使用的镜像层，释放存储空间
- **OCI 支持**：除了容器镜像，还能保存 Helm Chart 等 OCI Artifact
- **高可用部署**：适合生产环境和较大规模的企业集群

## 基本工作方式

```text
开发者构建镜像
      ↓
推送到 Harbor
      ↓
安全扫描与权限检查
      ↓
Kubernetes / Docker 拉取镜像并部署
```

例如，Harbor 地址为 `harbor.example.com`：

```bash
docker login harbor.example.com

docker tag my-app:1.0 harbor.example.com/team-a/my-app:1.0
docker push harbor.example.com/team-a/my-app:1.0

docker pull harbor.example.com/team-a/my-app:1.0
```

镜像地址通常由三部分组成：

```text
harbor.example.com/team-a/my-app:1.0
└────仓库域名────┘ └项目┘ └镜像与标签┘
```

## 常见应用场景

1. **企业内部镜像托管**  
   避免业务镜像上传到公共平台，也方便统一管理权限。

2. **Kubernetes 私有镜像仓库**  
   集群通过 `imagePullSecrets` 登录 Harbor 并拉取私有镜像。

3. **CI/CD 流水线**  
   Jenkins、GitLab CI 或 GitHub Actions 构建镜像后推送到 Harbor，再触发部署。

4. **多地域镜像同步**  
   将总部的镜像复制到不同机房，提升拉取速度并增强容灾能力。

5. **供应链安全**  
   在部署前执行漏洞扫描、签名验证和准入策略检查。

## Harbor 与 Docker Registry 的区别

| 能力 | Docker Registry | Harbor |
|---|---|---|
| 镜像存储和分发 | 支持 | 支持 |
| Web 管理界面 | 基本没有 | 完整 |
| 用户与角色权限 | 较弱 | 完善 |
| 漏洞扫描 | 通常需自行集成 | 内置集成 |
| 镜像复制 | 较弱 | 支持 |
| 审计日志 | 较弱 | 支持 |
| 企业级管理 | 需要大量扩展 | 开箱即用 |

简单来说：**Docker Registry 提供底层镜像仓库能力，而 Harbor 在它之上补充了安全、权限、审计和运维管理功能。**

Harbor 通常通过 Docker Compose 或 Helm 部署。小型环境可以单机安装，生产环境则通常配合 Kubernetes、外部数据库、Redis、对象存储和负载均衡器构建高可用架构。

## 生产治理建议

- 发布标签设置为不可变，Kubernetes 生产清单优先引用镜像 digest。
- Robot Account 按项目和流水线拆分，只授予推送或拉取所需权限。
- 为分支镜像、候选版本和正式版本分别设置保留规则。
- 定期执行漏洞数据库更新、镜像扫描和垃圾回收；垃圾回收前确认备份与复制状态。
- 将签名、SBOM 和构建来源与镜像 digest 关联，部署前由准入策略验证。
- 监控容量、复制失败、扫描失败、认证异常和证书到期。

参见 [依赖与镜像安全](../security-reliability/dependency-and-image-security.md)和 [SBOM 与供应链证明](../security-reliability/sbom.md)。
