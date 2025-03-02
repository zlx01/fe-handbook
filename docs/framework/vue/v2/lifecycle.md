## 生命周期

![Vue 实例生命周期](./assets/lifecycle.png)

![生命周期](./assets/生命周期.png)

## 在vue中watch和created哪个先执行？

对于immediate: true的watch，和init reactivity周期一同执行，所以早于created执行。
而正常的watch，则是mounted周期后触发data changes时才执行，所以晚于created。




