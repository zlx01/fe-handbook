# 动画实现方式

## CSS: transition animation

## HTML: canvas svg

## JavaScript: setTimeout setInterval

> setTimeout 和 setInterval 的问题是，它们不够精确。它们的内在运行机制决定了 时间间隔参数 实际上只是指定了把动画代码添加到 浏览器UI线程队列 中以等待执行的时间。如果队列前面已经加入了其它任务，那动画代码就要等前面的 任务完成后 再执行，并且如果时间间隔过短（小于16.7ms）会造成丢帧，所以就会导致动画可能不会按照预设的去执行，降低用户体验。

## JavaScript: window.requestAnimationFrame

> * 回调函数执行次数通常是每秒 60 次，但在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与   浏览器屏幕刷新次数 相匹配。
> * 为了提高性能和电池寿命，因此在大多数浏览器里，当requestAnimationFrame() 运行在后台标签页或者隐藏的\<iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命。
> 

## Reference

* https://mp.weixin.qq.com/s/E8uLMN3cYwBiQkyMtlDt0w
