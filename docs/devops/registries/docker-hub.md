# [Docker Hub](https://hub.docker.com/)

Docker Hub 是公共 OCI 镜像仓库，包含官方镜像、组织仓库和自动化访问能力。

## 使用建议

- 基础镜像优先选择 Docker Official Image，并核对维护状态与支持版本。
- 生产构建固定版本或 digest，不直接依赖浮动的 `latest`。
- 自动化推送使用最小权限访问令牌，不共享个人密码。
- 公共镜像仍需进行漏洞扫描、SBOM 和许可证审查。
- 对外部镜像设置代理缓存或镜像同步，减少上游限流和不可用影响。

企业私有镜像、权限隔离、复制和审计需求可参考 [Harbor](./harbor.md)。

