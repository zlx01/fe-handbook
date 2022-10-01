# 判断元素是否在视窗内

## Element.getBoundingClientRect()

* 监听滚动事件，获取元素坐标，与视口尺寸比较
* 频繁触发，性能差

## IntersectionObserver API

* 注册监听元素交叉监听事件
* 利用浏览器空闲时段触发，性能好

## Reference

* https://juejin.cn/post/6844903788914933774
* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
* https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
