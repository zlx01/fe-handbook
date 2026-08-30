# RBAC 与部署身份

Authentication 确认“是谁”，Authorization 决定“可以做什么”。RBAC 通过角色与绑定表达授权关系。

## Kubernetes 对象

- `ServiceAccount`：工作负载或自动化使用的集群身份。
- `Role` / `RoleBinding`：在单个 Namespace 内定义并绑定权限。
- `ClusterRole` / `ClusterRoleBinding`：定义集群级或可复用权限，使用范围更大。

## 最小权限示例

下面的角色只允许在 `production` Namespace 读取并更新 Deployment，不允许读取 Secret：

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: deployment-updater
  namespace: production
rules:
  - apiGroups: ["apps"]
    resources: ["deployments"]
    verbs: ["get", "list", "watch", "patch", "update"]
```

使用 RoleBinding 将其授予专用 CI ServiceAccount。先通过 `kubectl auth can-i --as=system:serviceaccount:production:deployer ...` 验证允许和拒绝场景。

## 设计原则

- 人员、应用和流水线使用独立身份，不共享管理员 kubeconfig。
- 优先 Namespace 级 Role，避免通配符资源、动词和 `cluster-admin`。
- CI 只操作目标工作负载；镜像推送、部署和 Secret 管理拆分身份。
- 使用短期 Token 或工作负载身份，避免长期静态凭据。
- 权限定期复核，临时提权设置到期时间，离职或服务下线时及时回收。

审计日志应能回答谁在什么时间以什么身份修改了哪些资源，以及授权来自哪个 Binding。
