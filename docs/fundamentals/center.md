# 布局：居中

## 水平居中

* **display: block** + **margin: 0 auto**
* **inline-block+text-align**
    * 对子框设置display:inline-block，对父框设置text-align:center。
    * text-align属性是具有继承性的，会导致自己元素内部的文本也是居中显示的，需要自身设置text-align覆盖
* **absolute+transform**：对父框设置position:relative，对子框设置position:absolute，left:50%，transform:translateX(-50%)。
* **flex+justify-content**：先将父框设置为display:flex，再设置justify-content:center。

## 垂直居中

* **absolute+transform**：先将父框设置为position:relative，再设置子框position:absolute，top:50%，transform:translateY(-50%)。
* **flex+align-items**：先将父框设置为position:flex，再设置align-items:center。

## 水平垂直居中

* absolute+transform
* flex+justify-content+align-items
