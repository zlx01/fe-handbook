# transition

* transition-property 指定要执行过渡的属性，例如height , width
  * 多个属性间使用,隔开
  * 如果所有属性都需要过渡，则使用all关键字
* transition-duration 指定过渡效果的持续时间，时间单位：s 和 ms
* transition-delay 过渡效果的延迟，等待一段时间后在执行过渡
* transition-timing-function 设置过渡时序
  * ease 默认值，慢速开始，先加速，再减速
  * linear 匀速运动
  * ease-in 加速运动
  * ease-out 减速运动
  * ease-in-out 先加速 后减速
  * cubic-bezier() 来指定时序函数 https://cubic-bezier.com
  * steps() 分步执行过渡效果，可以设置一个第二个值：end ， 在时间结束时执行过渡(默认值) start ， 在时间开始时执行过渡