# 流量治理

从客户端到应用实例的流量路径，以及反向代理、负载均衡、Ingress/Gateway 和 TLS 的职责边界。

## 典型链路

`DNS → CDN/WAF → 外部负载均衡 → Ingress/Gateway → Service → Pod`

每层都应明确超时、重试、连接上限、真实客户端 IP、TLS 终止位置、日志和健康检查，避免默认值在层间叠加。
