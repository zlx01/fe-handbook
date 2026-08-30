# [Grafana Faro](https://grafana.com/oss/faro/)

Grafana Faro Web SDK 可以采集浏览器日志、错误、性能和 Web Tracing，并通过 Collector/Receiver 发送到 Grafana 可观测性后端。

## 接入重点

- 标记应用名、环境、版本和会话，便于关联部署。
- 配置允许的上报端点和跨域策略，避免遥测被任意站点滥用。
- 对 URL、用户属性、日志参数和错误上下文脱敏。
- 控制 Trace、性能和日志采样，监控上报失败与数据量。
- 将浏览器 Trace Context 传递给后端，关联 Tempo/其他 Trace 后端。

Faro 负责浏览器侧采集，不替代 Loki、Tempo、Prometheus 等存储查询组件，也不替代业务分析平台。
