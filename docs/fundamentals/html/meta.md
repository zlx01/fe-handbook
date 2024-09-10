# [\<meta>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

* 应用1：最基本的功能是设置网页编码，本质是**设置http响应头**。通过meta设置其他响应头用得不多。

* 应用2：viewport设置**视口**大小，限制用户缩放页面；**适配iPhoneX底部安全区**就需要用到这个属性，具体可以参考vant ui官方文档进阶用法。

* 应用3：设置**SEO**相关的关键词，可以看下vue官网的案例。

* 应用4：配置**Content Security Policy**，如果公司比较注重安全的话，可以通过meta配置安全策略来检测并削弱某些攻击，例如 **XSS 和 数据注入攻击**。

## Standard metadata names

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name

## charset

文档响应头：`content-type: text/html; charset=utf-8`

文档中的meta标签：`<meta charset="utf-8">`

## viewport

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```



| Value           | Possible subvalues                                    | Description                                                  |
| :-------------- | :---------------------------------------------------- | :----------------------------------------------------------- |
| `width`         | A positive integer number, or the text `device-width` | Defines the pixel width of the viewport that you want the website to be rendered at. |
| `height`        | A positive integer, or the text `device-height`       | Defines the height of the viewport. Not used by any browser. |
| `initial-scale` | A positive number between `0.0` and `10.0`            | Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size. |
| `maximum-scale` | A positive number between `0.0` and `10.0`            | Defines the maximum amount to zoom in. It must be greater or equal to the `minimum-scale` or the behavior is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default. |
| `minimum-scale` | A positive number between `0.0` and `10.0`            | Defines the minimum zoom level. It must be smaller or equal to the `maximum-scale` or the behavior is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default. |
| `user-scalable` | `yes` or `no`                                         | If set to `no`, the user is not able to zoom in the webpage. The default is `yes`. Browser settings can ignore this rule, and iOS10+ ignores it by default. |
| `viewport-fit`  | `auto`, `contain` or `cover`                          | The `auto` value doesn't affect the initial layout viewport, and the whole web page is viewable.The `contain` value means that the viewport is scaled to fit the largest rectangle inscribed within the display.The `cover` value means that the viewport is scaled to fill the device display. It is highly recommended to make use of the [safe area inset](https://developer.mozilla.org/en-US/docs/Web/CSS/env) variables to ensure that important content doesn't end up outside the display. |



[使用viewport-fit=cover来解决关于ios在Safari浏览器内容被地址栏、菜单栏或工具栏遮挡导致的兼容问题](https://blog.csdn.net/weixin_44784401/article/details/130721270)


## SEO

```html
<meta name="description" content="HTML 语言入门">
<meta name="keywords" content="HTML,教程">
<meta name="author" content="Lee">
<meta name="application-name" content="Application Name">
<meta name="generator" content="program">
<meta name="subject" content="your document's subject">
```

```html
<meta name="referrer" content="no-referrer">
```

| `no-referrer`                     | Do not send a HTTP [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header. |
| --------------------------------- | ------------------------------------------------------------ |
| `origin`                          | Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document. |
| `no-referrer-when-downgrade`      | Send the full URL when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but send no referrer when it's less secure (HTTPS→HTTP). This is the default behavior. |
| `origin-when-cross-origin`        | Send the full URL (stripped of parameters) for same-origin requests, but only send the origin for other cases. |
| `same-origin`                     | Send the full URL (stripped of parameters) for same-origin requests. Cross-origin requests will contain no referrer header. |
| `strict-origin`                   | Send the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS), but send no referrer when it's less secure (HTTPS→HTTP). |
| `strict-origin-when-cross-origin` | Send the full URL (stripped of parameters) for same-origin requests. Send the origin when the destination is at least as secure as the current page (HTTP(S)→HTTPS). Otherwise, send no referrer. |
| `unsafe-URL`                      | Send the full URL (stripped of parameters) for same-origin or cross-origin requests. |

```html
<meta name="robots" content = "index, follow" />
```

| Value      | Description                                                 |
| :--------- | :---------------------------------------------------------- |
| `index`    | Allows the robot to index the page (default).               |
| `noindex`  | Requests the robot to not index the page.                   |
| `follow`   | Allows the robot to follow the links on the page (default). |
| `nofollow` | Requests the robot to not follow the links on the page.     |

## http-equiv

### 定时刷新
```html
<!--5s刷新一次-->
<meta http-equiv="refresh" content="5">
```

### 定时跳转

```html
<!--5s后跳转到百度-->
<meta http-equiv="refresh" content="5; url='https://www.baidu.com/'">
```
### redirect

```html
<!--立即跳转到百度-->
<meta http-equiv="refresh" content="0; url='https://www.baidu.com/'">
```

## Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src *; media-src example.org example.net; script-src userscripts.example.com">
```

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:;worker-src *.test.com 'self' blob:;script-src *.test.com 'unsafe-inline' 'unsafe-eval';object-src 'none'">
```

查看[详细介绍](../http/csp)