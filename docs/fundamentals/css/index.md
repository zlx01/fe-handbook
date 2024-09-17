# CSS

## What

* Cascading Style Sheet
* 层叠样式表

## Tutorial

* https://developer.mozilla.org/en-US/docs/Web/CSS
* https://cssreference.io/
* https://css-tricks.com/

## How

```html
<div class="box" style="color: red">
    Hello world!
</div>
```

```html
<style>
  .box {
    width: 100px;
    height: 200px;
    margin: 20px;
    padding: 100px;
    background-color: rebeccapurple;
  }
</style>
```

```html
<link rel="stylesheet" href="nav.css">
```

```html
<style>
  /* @import 必须在其他样式规则之前，否则会无效*/
  @import "nav.css";
  @import url("sidebar.css");
</style>
```

## 块级元素与行内元素的区别



| 特性           | 块级元素 block-level content   | 行内元素 inline-level content                                |
| -------------- | ------------------------------ | ------------------------------------------------------------ |
| 显示方式       | 独占一行                       | 与其他元素在同一行内显示                                     |
| 占据宽度       | 默认占满父容器的宽度           | 宽度仅取决于内容的宽度                                       |
| 可以包含的内容 | 可以包含其他块级元素和行内元素 | 只能包含文本或行内元素                                       |
| 宽度和高度     | 可以设置                       | 无法设置，由内容决定，除非display: inline-block              |
| 边距           | 可以设置                       | 外边距和内边距在**左右方向**上会生效，但**上下方向**的外边距和内边距不会改变布局，只会影响元素之间的间距或文本的垂直对齐方式 |
| 常见应用场景   | 布局和结构化页面内容           | 标记小块内容或文本的一部分                                   |

## [可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element#css_与可替换元素)

**可替换元素**，其内容不由HTML文档直接控制，而是通过外部资源或浏览器默认呈现的。

**常见的可替换元素：**

* img: 其内容由`src`属性指定的外部图片文件替换。
* input，浏览器根据`type`属性来替换内容，比如文本框、按钮等。
* iframe：嵌入的外部网页内容。
* video/audio：嵌入多媒体文件。

选择器

盒模型

布局

float

position

display



响应式设计

## 字体

* font-weight，字体权重匹配参考[博文](https://www.jianshu.com/p/f9c6f9729fbb)

* line-height 和 vertical-align，深度理解参考[博文](https://zhuanlan.zhihu.com/p/25808995)，可解释 height=line-height 字体确不居中的问题。

## Flex布局

* 强烈推荐阮一峰老师的[博文1](https://ruanyifeng.com/blog/2015/07/flex-grammar.html)，[博文2](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
* [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
* [flex:1](https://zhuanlan.zhihu.com/p/136223806)

## Grid布局

* 强烈推荐阮一峰老师的[博文](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
* [grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)

## [伪类](./pseudo-class)

## [伪元素](./pesudo-element)

## [绘制图形](./shape)
