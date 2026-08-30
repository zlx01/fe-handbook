# 可观测性

可观测性帮助团队从系统输出推断内部状态并定位未知问题；监控则持续检查预先定义的状态和阈值。二者共同为发布验证、容量规划和事故响应提供反馈。

## 信号

- **Metrics**：适合聚合趋势、SLO 和告警。
- **Logs**：记录离散事件和上下文，适合检索与审计。
- **Traces**：展示请求跨服务的调用路径和耗时。
- **Profiles**：分析 CPU、内存等资源消耗位置。
- **RUM**：从真实浏览器观察用户体验、错误和资源加载。

## 内容

- [日志、指标、链路与告警](./signals-and-alerting.md)
- [APM](./apm/)
- [RUM](./rum/)
- [SLI、SLO 与错误预算](../security-reliability/sli-slo.md)
- [事故响应](../security-reliability/incident-response.md)

Elastic 等后端服务的安装与原理参见 [Server/Elastic](../../server/elastic/elasticsearch.md)，本节只介绍它们在观测链路中的职责。
