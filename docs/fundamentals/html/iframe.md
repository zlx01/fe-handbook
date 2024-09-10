# \<iframe>

* 通常用于嵌入第三方内容、广告、文档预览、嵌入分析工具
* 微前端实现方案中也有基于iframe的，例如腾讯推出的**无界**
* 搬砖的时候，老板可能会心血来潮要求把几个独立的页面整合在一起，复制代码是难以维护的，这时候iframe就派上用场了。一个spa页面，一个tabbar组件，三个菜单，三个iframe，看起来很简单，开开心心的部署后在真机调试，然后发现导航栏怎么被软键盘顶起了，浏览器的导航为什么要点两次才能返回上一页，网上一搜，还好别人已经踩过坑，改改代码解决了bug。
* 最好限制下沙盒环境的权限，避免跨站脚本攻击等安全问题，设置sandbox属性：`sandbox="allow-popups allow-scripts allow-same-origin allow-popups-to-escape-sandbox"`.
* iframe还需要掌握父子窗口的通信方法：同源时方法相互调用；跨域时用postMessage
