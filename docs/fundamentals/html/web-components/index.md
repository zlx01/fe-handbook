# Web Components

* official site: https://www.webcomponents.org
* MDN: https://developer.mozilla.org/zh-CN/docs/Web/Web_Components

## 三大技术

* **Custom Elements**：一组 JavaScript API，自定义html元素的行为
* **Shadow DOM**：一组 JavaScript API，用于封装一个元素的样式和结构，使其不受外部css影响，自带scoped
* **HTML template**：`<template>` 元素，用于存放html模板，不会被渲染，`<slot>` 元素，用于插入模板内容

### Custom Elements

* 类式写法，继承现有的HTML元素类
* 重点是定义各个生命周期回调
* 使用前需要注册，`customElements.define('my-element', MyElement);`
* `attributeChangedCallback` 可以监听属性变化

### Shadow DOM

* **Shadow host**: 影子 DOM 附加到的常规 DOM 节点。 
* **Shadow tree**: 影子 DOM 内部的 DOM 树。 
* **Shadow boundary**: 影子 DOM 终止，常规 DOM 开始的地方。 
* **Shadow root**: 影子树的根节点。

* 通过 `attachShadow` 方法创建
* 可以通过配置mode来允许页面js访问shadow dom

## Web Components的优势

* 标准化，原生支持
* 封装性，隔离性
* 跨框架兼容

## 为什么不推荐使用Web Components

* 兼容性问题
* 复杂的状态管理、生命周期管理、事件处理
* 性能优化
* 响应式系统
* 声明式UI
* 生态系统

## 使用现状

* 头部案例：Twitter、YouTube、GitHub
* 基础/组件库：[lit](https://github.com/lit/lit/)  [omi](https://github.com/Tencent/omi)


## References

* https://www.cnblogs.com/zhoulujun/p/17972261
* https://developer.jdcloud.com/article/3706 
* https://www.albertaz.com/blog/web-components-ststus
