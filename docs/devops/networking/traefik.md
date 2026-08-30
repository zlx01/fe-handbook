# [Traefik](https://traefik.io/)

Traefik 是面向动态基础设施的反向代理和负载均衡器，可以从 Docker、Kubernetes 等 Provider 发现路由配置。

## 核心模型

- **EntryPoint**：监听地址和端口，例如 HTTP/HTTPS。
- **Router**：根据 Host、Path 等规则匹配请求。
- **Middleware**：在转发前后执行重定向、鉴权、限流、Header 等处理。
- **Service**：定义实际后端及负载均衡方式。
- **Provider**：从文件、Docker、Kubernetes CRD/Gateway API 等来源获取配置。

## 使用建议

- 管理端 Dashboard 不直接暴露公网，启用认证和网络限制。
- 生产环境明确 TLS 证书存储和多副本时的协调方式。
- 固定镜像版本，升级前检查废弃配置与 CRD 兼容性。
- 为入口、路由和后端开启访问日志、指标和 Trace 关联。
- Kubernetes 中优先明确选择 Ingress 或 Gateway API，避免多套入口资源并存却无人负责。

参见 [流量入口与 Gateway](./traffic-routing.md)。

> The Cloud Native Application Proxy

