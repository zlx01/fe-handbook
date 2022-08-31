# Content Security Policy

通过在html页面meta标签或者 `Content-Security-Policy` 响应头配置一些安全策略，来检测并削弱某些攻击，例如 XSS 和 数据注入攻击。

> 一个 CSP 兼容的浏览器将会仅执行从白名单域获取到的脚本文件，忽略所有的其他脚本 (包括内联脚本和 HTML 的事件处理属性)。

## example

1. 各种内容默认仅允许从文档所在的源获取，但存在如下例外：图片可以从任何地方加，多媒体文件仅允许从 media1.com 和 media2.com 加载 (不允许从这些站点的子域名)。可运行脚本仅允许来自于 userscripts.example.com。

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com">
```

2. 各种内容默认仅允许https源，worker脚本允许从文档所在源、test.com及其子域名、blob: 协议源获取；js脚本允许从test.com及其子域名获取，且允许内联代码执行；禁止安装插件。

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:;worker-src *.test.com 'self' blob:;script-src *.test.com 'unsafe-inline' 'unsafe-eval';object-src 'none'">
```

## Reference

* https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy