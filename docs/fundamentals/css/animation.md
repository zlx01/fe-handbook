# Animation

| 属性                          | 可选值                                                       | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **animation-name**            |                                                              | 要对当前元素生效的关键帧的名字                               |
| **animation-duration**        |                                                              | 动画的执行时间                                               |
| **animation-delay**           |                                                              | 动画的延时                                                   |
| **animation-timing-function** | ease-in-out<br />linear<br />setps(4, end)<br />             | 过渡时序                                                     |
| animation-iteration-count     | infinite                                                     |                                                              |
| animation-direction           | normal 默认值  从 from 向 to运行 每次都是这样 <br/>reverse 从 to 向 from 运行 每次都是这样 <br/>alternate 从 from 向 to运行 重复执行动画时反向执行<br/>alternate-reverse 从 to 向 from运行 重复执行动画时反向执行 | 指定动画运行的方向                                           |
| animation-play-state          | running 默认值 动画执行<br/>paused 动画停止播放并回到第一帧  | 设置动画的执行状态                                           |
| animation-fill-mode           | none 默认值 动画执行完毕元素回到原来位置<br/>forwards 当动画结束后，元素会停留在动画最后一帧的样式上，而不是回到动画开始前的初始样式<br/>backwards 动画延时等待时，在动画开始前，元素会立即应用动画第一帧的样式，而不是等到动画开始才改变样式<br/>both 结合了forwards 和 backwards | 动画的填充模式                                               |
| **@keyframes**                | from表示动画的开始位置 也可以使用 0%<br/>to动画的结束位置 也可以使用100% | 设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤 |


## 停止css动画播放

1. 通过animation-play-state属性设置为paused
```js
box.style.animationPlayState = 'paused';
```

2. 通过animation属性设置为none
```js
box.style.animation = 'none';
```

3. 移除动画类名
```js
box.classList.remove('animate');
```
