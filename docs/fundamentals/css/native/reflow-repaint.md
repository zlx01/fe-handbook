# Reflow vs Repaint

## 重排（reflow）

当网页的内容或结构发生变化时，浏览器需要重新计算元素的位置、大小等布局信息。任何改变会引起整个文档的重新布局，这个过程称为重排。
## 重绘（repaint）
指当元素的外观发生变化（但没有改变其布局时），浏览器会重新绘制这些元素的样式

## 引起重排的原因

* 改变元素的大小（如 width, height, margin, padding, border 等）。
* 添加或删除 DOM 元素。
* 改变字体大小或内容（例如插入文本）。
* 获取某些属性（如 offsetWidth, offsetHeight, clientWidth, scrollTop 等），因为这些属性会触发浏览器去计算当前的布局。

## 引起重绘的原因

* 改变元素的颜色（如 color, background-color）。
* 改变可见性（如 visibility: hidden，但不包括 display: none，因为 display: none 会引发重排）。
* 改变边框颜色或样式。

## 比较

* 重排⼀定重绘，重绘不⼀定重排
* 重排性能开销较大
* 重绘性能开销较小

## 减少重绘和重排的⽅法

* 合并和减少 DOM 操作
* 避免逐个修改样式
* 合并样式变更
* 减少布局抖动（Layout Thrashing）
* 使用 CSS3 动画（硬件加速）通过 GPU 进行加速
* 使用 will-change 优化复杂动画。浏览器哪些元素的属性即将发生变化，浏览器会提前优化这些元素的渲染。它适用于需要优化性能的场景，但不要过度使用，因为它会占用更多内存。
* 使用 requestAnimationFrame
* 避免触发同步布局事件，例如获取 offsetWidth, scrollTop, clientHeight 等属性
* 优化复杂页面的渲染：虚拟滚动、分页加载内容
