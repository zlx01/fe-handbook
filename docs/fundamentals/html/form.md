# \<form>

* 表单相关比较重要的标签：label，input，button，select，textarea。
* input标签的type属性有很多值，常用的有：text、password、radio、checkbox、file、submit、reset、button
* 重要事件：input、change、submit、reset
* 把**vue的表单输入绑定**、**React的受控组件/非受控组件**看完并熟悉就差不多了。
* 虽然说大多时候都用组件库，但是了解原生表单标签的属性和事件还是有必要的，有些简单的场景用原生表单标签就可以了，不需要引入组件库，杀鸡焉用牛刀。

## 手机号输入时344分段

https://github.com/zlx01/phone-number-344

## 解决 chrome 表单自动填充的问题

https://zhuanlan.zhihu.com/p/260775688


方法一：

```html
<input type="text" style="width: 0;height: 0"/>
<input type="password" style="width: 0;height: 0"/>
```

方法二：
```html
<input type="text" autocomplete="new-password"/>
<input type="password" autocomplete="new-password"/>
```

<iframe src="https://codesandbox.io/embed/n4dd8h?view=editor"
style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
title="form"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


## v-model 无法检测 Chrome 自动填充问题

https://deepinout.com/vue-js/vue-js-questions/509_vuejs_vue_vmodel_not_detecting_chrome_autocompletion.html

原因：v-model是监听输入框的input事件，Chrome自动填充功能会通过更改DOM的方式将值填充到输入框中，而不会触发input事件。

解决方法：通过监听输入框的change事件来手动更新数据





