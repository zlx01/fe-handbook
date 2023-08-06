# \<a>

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


