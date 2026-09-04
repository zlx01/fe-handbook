# React Router

**什么叫多页应用（Multi-Page Application）？**

多页应用**（Multi-Page Application）**指的其页面是静态的 HTML 文件。 一般可以将任何包含多个入口、多个 HTML 文件产物的网页应用称为多页应用。 狭义的多页应用可能不包含客户端路由、仅通过 `<a>` 之类的标签元素进行 HTML 静态页面之间的跳转，但实践中上多页应用也经常需要为其入口配置客户端路由以满足不同需求。

相反地，通过 `react-router` 定义多个路由的单入口应用因为只生成一个 HTML 文件产物，所以被称为单页应用（Single Page Application）。
