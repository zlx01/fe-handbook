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

## 块级元素vs行内元素

| 特性           | 块级元素 block-level content   | 行内元素 inline-level content                                |
| -------------- | ------------------------------ | ------------------------------------------------------------ |
| 显示方式       | 独占一行                       | 与其他元素在同一行内显示                                     |
| 占据宽度       | 默认占满父容器的宽度           | 宽度仅取决于内容的宽度                                       |
|                | 默认高度是被内容撑开           | 宽度仅取决于内容的宽度                                       |
| 可以包含的内容 | 可以包含其他块级元素和行内元素 | 只能包含文本或行内元素                                       |
| 宽度和高度     | 可以设置                       | 无法设置，由内容决定，除非display: inline-block              |
| 边距           | 可以设置                       | 外边距和内边距在**左右方向**上会生效，但**上下方向**的外边距和内边距不会改变布局，只会影响元素之间的间距或文本的垂直对齐方式 |
| 常见应用场景   | 布局和结构化页面内容           | 标记小块内容或文本的一部分                                   |

## 可替换元素

[**可替换元素**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element#css_与可替换元素)，其内容不由HTML文档直接控制，而是通过外部资源或浏览器默认呈现的。

**常见的可替换元素：**

* img: 其内容由`src`属性指定的外部图片文件替换。
* input，浏览器根据`type`属性来替换内容，比如文本框、按钮等。
* iframe：嵌入的外部网页内容。
* video/audio：嵌入多媒体文件。

## 选择器

| 选择器       | 说明                       |
| ------------ | -------------------------- |
| 类型选择器   | 元素选择器                 |
| 类选择器     | class，最常用              |
| ID选择器     | id                         |
| 属性选择器   | 常用，vue scoped style     |
| 全局选择器   | *{ }                       |
| 复合选择器   |                            |
| 群组选择器   |                            |
| 后代选择器   | 不一定是直接后代           |
| 子元素选择器 | >                          |
| 兄弟选择器   | + 紧后一个<br/>~ 后边所有  |
| 伪类选择器   | [伪类](./pseudo-class)     |
| 伪元素选择器 | [伪元素](./pesudo-element) |

### 选择器权重

* 内联样式：权重是 1000
* id选择器：权重是 100
* 类、属性、伪类选择器：权重是 10
* 元素选择器：权重是 1
* 通配符：权重是 0

## 样式继承

### 会继承的样式：字体相关的

* font-size
* font-family
* color

### 不会继承的样式：背景相关的、布局相关的

* background
* width/height/margin/padding/border

## 度量

### 尺寸

* px
* % 相对于父元素
* em 相对于父元素 1em=100%
* rem 相对于html。默认 `1rem = 16px`	

```js
const htmlElement = document.documentElement;
const computedStyle = window.getComputedStyle(htmlElement);
const fontSize = computedStyle.fontSize;
const remValue = parseFloat(fontSize);
console.log(`当前浏览器中 1rem 等于 ${remValue} 像素`);
```

### 颜色

* 颜色单词
* 十六进制（#RRGGBB，#RRGGBBAA 注意兼容性问题）
* rgb(r, g, b)
* rgba(r, g, b, a)
* 用除法表示透明度

```css
@media (min-width: 768px) {
  .md\\:text-primary {
        --tw-text-opacity: 0.5;
        color: rgb(var(--color-primary-DEFAULT) / var(--tw-text-opacity, 1))
    }
}
```



## 基本样式

### 字体

* @font-face  指定自定义字体，通常字体文件比较大的话，会让设计师对字体进行裁剪，例如只保留数字和字母部分
* font-weight 跟字体有关，同样的值在不同机器表现可能不一致。通常设计稿写什么值就用什么值，再根据实际情况调整。字体权重匹配参考[博文](https://www.jianshu.com/p/f9c6f9729fbb)
* 行间距 = 行高 - 字体大小
* 单行文本垂直居中：height=line-height
* line-height 和 vertical-align，深度理解参考[博文](https://zhuanlan.zhihu.com/p/25808995)，可解释 height=line-height 字体确不居中的问题。

### 文本

* text-overflow: ellipsis 溢出省略
* white-space: nowrap 不换行

### 背景

* linear-gradient可以作为背景
* 同时指定两个背景，**写在后面的背景先绘制**

```css
.box {
  background: url('@/assets/images/bg-white.png'),
    linear-gradient(152.93deg, #fff6ef 13.09%, #ffffff 35.24%, #ffffff 79.67%);
  background-size: 100% 147px, 100% 100%;
  background-repeat: no-repeat;
}
```

### 阴影

box-shadow，不会影响布局

### 轮廓

outline，用法和border一模一样，但不会影响到可见框的大小

### 渐变

* linear-gradient
* radial-gradient

## 布局&定位

### display

* none
* block
* inline
* inline-block
* flex
* grid

### position

* **`static`**: 完全按正常文档流进行布局，不使用偏移属性。包含块是最近的块级父元素。
* **`relative`**: 元素保持在正常文档流中，偏移是相对于元素原始位。包含块是最近的块级父元素。
* **`absolute`**: 元素脱离文档流，偏移是相对于最近的已定位祖先元素，或视口。
* **`fixed`**: 元素脱离文档流，偏移是相对于浏览器视口，且不会随着页面滚动。包含块总是视口。
* **`sticky`**: 元素在文档流中，但在达到滚动阈值时会固定相对于视口。包含块是它的最近滚动祖先或父级元素。

### **正常布局流**（Normal Flow）

是指元素在HTML文档中按照默认的排版规则进行布局，而没有通过浮动、定位或弹性盒（Flexbox）等特殊布局方式进行干预。

正常布局流的基本规则：

* 块级元素的布局
* 内联元素的布局
* 替换元素的特殊行为

修改正常布局流的方法：

* float
* position: absolute
* position: fixed
* display: flex
* display: grid

### 盒模型

* 内容区
* 内边距
* 边框
* 外边距
  * 相邻的垂直方向外边距会发生重叠现象！（父子，兄弟）
* 溢出行为
* 盒子尺寸，默认content-box，设置border-box可以减少计算

### [Flex布局](./flex)

### [Grid布局](./grid)

### [居中布局](./center)

### 浮动float

flex、grid等布局的兼容性越来越好，基本不用了。维护一些旧项目可能还用到。

## [变形transform](./transform)

## [过渡transition](./transition)

## [动画animation](./animation)

## CSS Variable

```css
:root {
  --main-color: #3498db;
  --padding-size: 20px;
  --font-size-large: 18px;
}

.header {
  color: var(--main-color);
  padding: var(--padding-size);
}

.title {
  font-size: var(--font-size-large);
  color: var(--main-color);
}
```

```css
.box {
  --box-background: #f1c40f;
  background-color: var(--box-background);
}
```

```css
.content {
  color: var(--text-color, #333); /* 如果 --text-color 未定义，则使用 #333 */
}
```

动态更新 CSS 变量

```javascript
document.documentElement.style.setProperty('--main-color', '#e74c3c');
```

## [重置样式](./reset)

## [BEM](./bem)

## [Responsive Design](./responsive-design)

## [Reflow & Repaint](./reflow-repaint)

## [绘制图形/动画](./shape)
