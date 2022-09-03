# HTTPS

## Problems

### 1. https 页面请求 http（绝对路径） 的图片时， http 被强制转为 https

原因：浏览器安全策略限制，参考[blog](https://blog.chromium.org/2020/02/protecting-users-from-insecure.html)

解决方案：搭建一个 https 的代理来转发