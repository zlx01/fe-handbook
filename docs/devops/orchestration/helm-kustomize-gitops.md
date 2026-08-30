# Helm、Kustomize 与 GitOps

## 工具定位

- **Helm**：使用 Chart、模板和 values 打包可复用应用。
- **Kustomize**：在原生 YAML 基础上通过 base/overlay 组合环境差异。
- **GitOps**：以 Git 中声明的期望状态为准，由控制器持续同步集群。

Helm 与 Kustomize 可以组合使用，GitOps 也不限定模板工具。选择标准应是配置可读、差异可审查、渲染可验证，而不是模板能力越强越好。

## 最小交付流程

1. CI 构建并推送不可变镜像。
2. 更新部署仓库中的镜像 digest 或版本。
3. Pull Request 展示渲染后的清单差异并执行策略校验。
4. 合并后由 Argo CD 等控制器同步目标环境。
5. 控制器报告漂移和健康状态，告警系统判断用户影响。

## 生产注意事项

- Secret 不以明文提交到 Git；使用 External Secrets、SOPS 等受控方案。
- Chart 与应用版本分别管理，锁定依赖并测试升级与回滚。
- 限制 GitOps 控制器权限和可管理 Namespace。
- 紧急手工变更必须回写 Git，否则会被控制器覆盖或形成漂移。
