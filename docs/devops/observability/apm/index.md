# APM

APM（Application Performance Monitoring/Management）从服务端观察请求、事务、依赖调用、错误和资源消耗，用来发现慢请求、错误热点和跨服务瓶颈。

## 最小数据模型

- 服务、环境、版本和实例标识。
- 请求名称、状态、耗时和错误。
- 数据库、缓存、消息队列及外部 HTTP 调用。
- Trace/Span 上下文与结构化日志关联。
- 部署事件与性能变化的时间关联。

## 接入步骤

1. 从一个关键服务和关键路径开始，定义成功率与延迟 SLI。
2. 使用 OpenTelemetry SDK 或厂商 Agent 采集 Trace、Metrics 和错误。
3. 通过 Collector 完成批处理、采样、脱敏和导出。
4. 在 Dashboard 中关联服务版本、依赖和日志。
5. 用 SLO 消耗和用户影响告警，而不是对每条异常告警。

## 工具边界

- Elastic APM、Grafana Stack、Jaeger、Tempo 以及商业 APM 都可作为后端。
- Prometheus 主要存储时序指标；ELK/Elastic Stack 常用于日志检索和分析。
- APM 不能替代业务埋点、基础设施监控或真实用户监控。

Elastic 组件原理参见 [Server/Elastic](../../../server/elastic/apm.md)，浏览器侧参见 [RUM](../rum/)。
