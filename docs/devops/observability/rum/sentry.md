# [Sentry](https://sentry.io/)

Sentry 常用于采集前端和后端异常、性能事务、Release 与用户影响。

## 最小接入

- 设置 `environment`、`release` 和采样率，使事件能够关联部署版本。
- 构建时上传 Source Map，但不要将 Source Map 公开部署到 CDN。
- 配置 `beforeSend`、数据清洗和允许的 URL，移除 Token、Cookie、表单和个人信息。
- 对已知噪声、浏览器插件和取消请求进行过滤，不要隐藏真实回归。
- 告警按新问题、回归、影响用户数和版本变化设计。

## Source Map 流程

`构建带 Source Map → 使用 CI Token 上传到对应 Release → 发布不含公开 Map 的静态资源 → 验证错误栈还原 → 删除临时文件`

CI Token 仅授予上传所需权限，不能进入前端 Bundle 或构建日志。
