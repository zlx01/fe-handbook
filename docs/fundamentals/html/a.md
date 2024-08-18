# \<a>

## href属性

值不仅可以是http协议，还可以是 javascript协议

```html
<a href="javascript:alert('回到过去')">past</a>
<a href="javascript:">无事</a>
```

因此在当前页面渲染不可信内容，一定要过滤处理，避免注入问题。

还可以是 tel:协议、mailto协议

```html
<a href="mailto:contact@example.com">联系我们</a>
```

href还可以实现锚点功能

```html
<!--点击下面的链接会定位到id为C4的链接处-->
<p><a href="#C4">查看 Chapter 4</a></p>
```


## rel属性

### nofollow

* 告诉搜索引擎忽略该链接

> 搜索引擎基本的 PageRank 算法，其基本假设是：更重要的页面往往更多地被其他页面引用。所以我们可以使用 nofollow 来告知 Google 不要跟踪链接到的网页，这样就不会分走我们页面的权重。

### noreferrer

* Do not send a HTTP Referer header.
* 隐藏点击来源

### noopener

* 不让链接窗口通过 JavaScript 的window.opener属性引用原始窗口

## download属性

* download属性只在链接与网址同源时，才会生效。
* 可以设置下载文件名（通常是服务器的 HTTP 响应头Content-Disposition字段设置）


