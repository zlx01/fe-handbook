# 安全与可靠性

安全与可靠性应贯穿代码、流水线、制品、部署和运行，而不是发布前的最后检查。

## 内容

- [Secret 管理](./secrets.md)
- [RBAC 与部署身份](./rbac.md)
- [依赖与镜像安全](./dependency-and-image-security.md)
- [SBOM 与供应链证明](./sbom.md)
- [SLI、SLO 与错误预算](./sli-slo.md)
- [事故响应](./incident-response.md)

## 闭环

`最小权限获取源码 → 可信依赖构建 → SBOM/扫描/签名 → 受控仓库 → 受限身份部署 → Secret 注入 → SLO 告警 → 事故响应与改进`

P1/P2 延伸方向包括策略即代码、准入控制、备份恢复、多集群容灾、Service Mesh、容量和成本治理；新增专题前应先有可运行的端到端示例和明确维护者。
