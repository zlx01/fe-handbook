# [Kubernetes](https://kubernetes.io/)

> Production-Grade Container Orchestration

## What is Kubernetes?

> [Kubernetes](https://kubernetes.io/docs/concepts/overview/), also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.


## Kubernetes 生产必需项

### Workload 与网络

- 无状态服务通常使用 Deployment，有稳定身份或持久存储需求时评估 StatefulSet。
- Service 为 Pod 提供稳定入口；外部流量通过 Ingress 或 Gateway API 进入。
- Job/CronJob 用于有限任务，DaemonSet 用于每节点代理。

### 配置与 Secret

ConfigMap 保存非敏感配置，Secret 保存敏感值，但 Base64 不是加密。生产环境应启用静态加密、最小 RBAC，并评估外部 Secret 系统。配置变化是否自动生效应由应用和发布流程明确约定。

### 探针

- `startupProbe` 保护慢启动应用，避免过早重启。
- `readinessProbe` 决定是否接收流量，不应把非关键外部依赖全部纳入。
- `livenessProbe` 只检测无法自行恢复的僵死状态，错误配置会制造重启风暴。

### 资源与扩缩容

为容器设置合理的 CPU/内存 requests 和 limits，以历史监控数据校准。HPA 需要可靠指标和足够副本，不能替代容量规划。通过 PodDisruptionBudget 和反亲和性降低维护或单节点故障影响。

### 发布与回滚

使用滚动更新参数控制最大不可用和额外副本；发布后结合就绪状态、烟雾测试和 SLI 判断。`kubectl rollout undo` 只能恢复工作负载模板，配置、数据库和外部依赖仍需独立恢复策略。

### 排障顺序

1. 查看 Deployment、ReplicaSet、Pod 和 Event 状态。
2. 检查调度、镜像拉取、启动参数、探针和资源限制。
3. 查看当前日志和上一次容器日志。
4. 从 Service Endpoint、DNS、NetworkPolicy 到 Gateway 逐层验证网络。
5. 对比最近部署、配置和依赖变更。
