# \<form>

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



## v-model 无法检测 Chrome 自动填充问题

https://deepinout.com/vue-js/vue-js-questions/509_vuejs_vue_vmodel_not_detecting_chrome_autocompletion.html

原因：v-model是监听输入框的input事件，Chrome自动填充功能会通过更改DOM的方式将值填充到输入框中，而不会触发input事件。

解决方法：通过监听输入框的change事件来手动更新数据





