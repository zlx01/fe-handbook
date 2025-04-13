# [\<link>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

* 应用1：引入外部样式
* 应用2：设置网站图标
* 应用3：**预加载资源，**进行**网站性能优化、提升用户体验**的技巧之一。可以看下vue官网使用案例。

## 引入css样式表

```html
<link href="style.css" rel="stylesheet" />
```

## media属性

```html
<link
  href="desktop.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)" />
<link
```

## 网站图标

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
```

## rel属性

* `rel="modulepreload"`：rel 属性指定了链接资源与当前文档之间的关系。modulepreload 表示预加载 JavaScript 模块，告诉浏览器提前获取并解析该模块，以便在需要使用时能更快地执行，减少等待时间。

当浏览器解析到 `<link rel="modulepreload" as="script">` 标签时，会立即开始下载对应的 JavaScript 模块文件，同时并行进行解析，但不会执行该模块。当后续代码中真正需要使用这个模块时，由于它已经被下载和解析好了，就可以直接执行，从而显著提升页面的加载速度和响应性能。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module Preload Example</title>
    <!-- 预加载 utils.js 模块 -->
    <link rel="modulepreload" as="script" href="utils.js">
</head>

<body>
    <script type="module">
        // 引入预加载的模块
        import { someFunction } from './utils.js';
        someFunction();
    </script>
</body>

</html>
```

在上述示例中，`<link rel="modulepreload" as="script" href="utils.js">` 会让浏览器提前下载并解析 utils.js 模块。当 `<script type="module">` 标签中的代码需要引入 utils.js 时，由于该模块已经准备好，就可以立即使用，避免了额外的等待时间。

## 预加载

### [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload)

> <link rel="preload">告诉浏览器尽快下载并缓存资源（如脚本或样式表），该指令优先级较高，浏览器肯定会执行。当加载页面几秒钟后需要该资源时，它会很有用。下载后，浏览器不会对资源执行任何操作，脚本未执行，样式表未应用。它只是缓存，当其他东西需要它时，它立即可用。

### prefetch

* 只能用于 https
* 标识预加载资源，非强制

> 如果后续的页面需要某个资源，并且希望预加载该资源，以便加速页面渲染。该指令不是强制性的，优先级较低，浏览器不一定会执行。

### preconnect

* 要求浏览器提前与某个域名建立 TCP 连接。

### dns-prefetch

* 要求浏览器提前执行某个域名的 DNS 解析。

### prerender

* 要求浏览器加载某个网页，并且提前渲染它。用户点击指向该网页的链接时，就会立即呈现该页面。如果确定用户下一步会访问该页面，这会很有帮助。

![vue官网head](assets/vue官网head.png)


## crossorigin

### **允许跨域资源共享**

当你引入的资源（如 CSS 文件、字体文件等）来自不同的域名时，浏览器会遵循同源策略，对跨域请求进行限制。`crossorigin` 属性可以帮助你突破这种限制，允许浏览器从其他域名加载资源。它有以下两种取值：

### **1. `anonymous`**

* **作用**：这是一种较为常用的取值。当设置为 `anonymous` 时，浏览器会发起一个跨域请求，但不会在请求中包含用户的凭证信息（如 cookie、HTTP 认证等）。服务器需要正确配置 CORS 响应头（如 `Access-Control-Allow-Origin`），以允许跨域请求。

```css
<link rel="stylesheet" href="<https://example.com/styles.css>" crossorigin="anonymous">
```

• **应用场景**：适用于那些不需要用户凭证信息的跨域资源加载，比如公共的 CSS 库、字体文件等。

### **2. `use-credentials`**

* **作用**：当设置为 `use-credentials` 时，浏览器会在跨域请求中包含用户的凭证信息。同样，服务器需要配置相应的 CORS 响应头，不仅要允许跨域请求，还要允许携带凭证信息（`Access-Control-Allow-Credentials: true`）。
* **示例**：

```css
<link rel="stylesheet" href="<https://example.com/styles.css>" crossorigin="use-credentials">
```

### **配合错误处理**

`crossorigin` 属性还能与 JavaScript 的 `onerror` 事件结合，用于处理跨域资源加载失败的情况。当资源加载失败时，可以通过 `onerror` 事件执行相应的错误处理逻辑。

```css
<link rel="stylesheet" href="<https://example.com/styles.css>"
      integrity="sha384-abcdef1234567890"
      crossorigin="anonymous">
```

### **对资源完整性验证的影响**

在使用 `integrity` 属性进行子资源完整性（SRI）验证时，`crossorigin` 属性也起到关键作用。如果要对跨域资源进行完整性验证，就必须设置 `crossorigin` 属性，否则验证会失败。



## as属性

* **`as="script"`**：`as` 属性进一步明确了预加载资源的类型，这里指定为 `script`，表明预加载的资源是 JavaScript 脚本。
