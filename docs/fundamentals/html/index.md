# HTML

## What

* Hypertext Markup Language
* 超文本标记语言

## Tutorial

* https://wangdoc.com/html/index.html

## History

* 1993-06 first version
* 2014-10 H5

## Hello World

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    Hello world!
  </body>
</html>
```

## Glossary

* 标签：Tag
* 元素：Element
* 属性：Attribute

## Common tags

* Text: div, span, p, br, hr
* List: ol, ul, li
* Image: img
* Link: link, script, noscript, a
* Media: video, audio
* Table: table, thead, tbody, tfoot, th, tr, td
* Form: form, label, input, button, textarea
* Iframe: iframe

## Tag classification

* 行内标签：span, img, a
* 块标签：div, p

## URL encoding

url合法字符：

* 26个英语字母（包括大写和小写）
* 10个阿拉伯数字
* 连词号（`-`）
* 句点（`.`）
* 下划线（`_`）

其他字符转义方法：使用这些字符的十六进制 UTF-8 编码，每两位算作一组，然后每组头部添加百分号（`%`）。

## Character encoding

* 数字表示法，`&#字符的码点`
* 实体表示法 :+1:  `&amp;`  `&nbsp;`  `&lt;`  `&gt;`

## data-xxx 属性

存放额外数据

```html
<div class="test" data-content="This is the div content" data-tip="tip...">内容：</div>
```

```css
.test[data-role="mobile"] {
  display: inline-block;
}
.test:after {
  content: attr(data-content);
}
```

```js
const test = document.querySelector('.test');
console.log(test.dataset)
console.log(test.dataset.content)
console.log(test.dataset.tip)
console.log(Object.prototype.toString.call(test.dataset).slice(8, -1)); // DOMStringMap
```








