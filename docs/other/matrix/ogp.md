# [Open Graph Protocol](https://ogp.me/)

**Open Graph Protocol（开放图谱协议，OGP）**

它的用途可以简单理解成：**告诉社交平台、聊天软件、搜索/内容平台“这个网页被【分享】出去时应该怎么展示”**。网页通过 `<head>` 里的 `<meta>` 标签声明标题、描述、封面图、URL 等信息。

比如你做一个博客页面：

```html
<head>
  <meta property="og:title" content="我的博客文章" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://example.com/article/123" />
  <meta property="og:image" content="https://example.com/cover.jpg" />
  <meta
    property="og:description"
    content="这是一篇介绍 Open Graph 的文章"
  />
</head>
```

当这个链接被分享到支持 OGP 的平台时，平台通常会抓这些信息，生成类似：

```text
┌──────────────────────────────┐
│        [文章封面图片]          │
│                              │
│ 我的博客文章                  │
│ 这是一篇介绍 Open Graph 的文章 │
│ example.com                  │
└──────────────────────────────┘
```

其中最核心的 4 个属性是：

| 属性         | 作用                          |
| ---------- | --------------------------- |
| `og:title` | 分享卡片标题                      |
| `og:type`  | 内容类型，例如 `website`、`article` |
| `og:image` | 分享卡片封面                      |
| `og:url`   | 这个内容的规范 URL                 |

这 4 个也是 OGP 官方定义的基础必需属性。除此之外，经常还会用 `og:description`、`og:site_name`、`og:locale` 等。

你可以把它和普通 HTML 元数据这样区分：

```html
<title>浏览器标签页标题</title>

<meta name="description"
      content="主要用于搜索引擎等">

<meta property="og:title"
      content="主要用于链接分享卡片">

<meta property="og:image"
      content="/share-cover.png">
```



