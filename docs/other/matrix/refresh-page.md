# CTRL+F5 和 F5 两种刷新有什么区别

## 一、刷新原理不同。

F5触发的HTTP请求的请求头中通常包含了If-Modified-Since 或 If-None-Match字段,或者两者兼有；

CTRL+F5触发的HTTP请求的请求头中没有上面的那两个头,却有Pragma: no-cache 或 Cache-Control: no-cache 字段,或者两者兼有。

## 二、服务端返回不同。

F5刷新服务端返回304 Not Modified；

Ctrl + F5刷新返回HTTP状态码200，原因是Ctrl+F5在发出请求时，会在请求消息头中加入Cache-Control:no-cache，Pragma:no-cache参数。

## 三、刷新结果不同。

F5刷新按钮只对当前页面进行刷新，只刷新本地缓存；

Ctrl + F5 的行为也是刷新页面，但是会把浏览器中的临时文件夹的文件删除再重新从服务器下载。

比如某网站更新了 style.css 文件，如果单纯按 F5 刷新，那么当前页面还是使用未修改的 style.css 文件内容，如果按 Ctrl + F5 就会重新从服务器下载 style.css 文件，并使用修改后的 style.css 文件。