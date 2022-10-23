# uniapp

[uni-app](https://uniapp.dcloud.io/) 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

## 特点

1. 跨平台
    - 在跨端的同时，通过条件编译+平台特有API调用，可以优雅的为某平台写个性化代码，调用专有能力而不影响其他平台。
    - 支持原生代码混写和原生sdk集成。

2. 学习成本
    - 基于通用的前端技术栈，采用**vue语法+微信小程序标签、api**，无额外学习成本。

3. 周边生态
    - [插件市场](https://ext.dcloud.net.cn/?orderBy=WeekDownload)
    - 支持NPM、支持小程序组件和SDK。
    - 微信生态的各种sdk可直接用于跨平台App。

## hello-uni-app

- 演示地址：https://hellouniapp.dcloud.net.cn/pages/component/view/view

## 创建项目

### 1.HBuilderX

### 2.vue-cli

## HBuilderX插件

插件市场：https://ext.dcloud.net.cn/?orderBy=TotalDownload

### 必装插件

- [scss/sass编译](https://ext.dcloud.net.cn/plugin?id=2046)，[less编译](https://ext.dcloud.net.cn/plugin?id=2031)，[es6编译](https://ext.dcloud.net.cn/plugin?，id=2045)，[eslint-js](https://ext.dcloud.net.cn/plugin?id=2037)

### 推荐插件

- Forms 表单：https://ext.dcloud.net.cn/plugin?id=2773，[演示](https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms)
- 路由、拦截、最优雅解决方案：https://ext.dcloud.net.cn/plugin?id=578，[官网](https://hhyang.cn/v2/)
- sl-filter 条件筛选组件：https://ext.dcloud.net.cn/plugin?id=381
- uParse 富文本解析：https://ext.dcloud.net.cn/plugin?id=183
- 仿京东地址选择：https://ext.dcloud.net.cn/plugin?id=1297
- 三级地址联动：https://ext.dcloud.net.cn/plugin?id=1084

## 开发规范

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.io/component/README)
- 接口能力（JS API）靠近微信小程序规范，但需将前缀 `wx` 替换为 `uni`，详见[uni-app接口规范](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
- 为兼容多端运行，建议使用flex布局进行开发

## 语法

rpx：https://ask.dcloud.net.cn/article/36130

## uni-app引用npm第三方库

- 参考文章 https://ask.dcloud.net.cn/article/19727

## 微信小程序编译模式

- 在pages.json中配置，仅开发期间生效

```json
{
  "condition": {
    "current": 1,
    "list": [
      {
        "name": "detail",
        "path": "pages/product/detail",
        "query": "id=10000041&phone=13xxxxxxxx"
      }
    ]
  }
}
```

## 相关文章

- html、vue、小程序的区别：https://ask.dcloud.net.cn/article/35657
- vue和微信小程序的区别、比较： https://segmentfault.com/a/1190000015684864
- 小程序开发：用原生还是选框架（wepy/mpvue/taro/uni-app）https://ask.dcloud.net.cn/article/35947
- 微信小程序转换uni-app详细指南：https://ask.dcloud.net.cn/article/35786
