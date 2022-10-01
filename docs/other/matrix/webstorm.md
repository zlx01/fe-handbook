# WebStorm

## 高效开发

### HTML文档初始化

输入“!”或“html:5”，然后按Tab键

### 补全类名和id

```html
<!--p.bar#foo-->
<p class="bar" id="foo"></p>  
```

### 嵌套

* \>：子元素符号，表示嵌套的元素
* +：同级标签符号

```html
<!--(.foo>h1)+(.bar>h2)-->
<div class="foo">
<h1></h1>
</div><div class="bar">
<h2></h2>
</div>
```

### 定义多个元素

```html
<!--ul>li*3-->
<ul>
<li></li>
<li></li>
<li></li>
</ul>
```

### CSS缩写

输入“w100”，然后按Tab键

```css
body {
  width: 100px;
}
```

## Reference

* https://www.cnblogs.com/yeYu168/p/9424957.html
