# [Vuex](https://v3.vuex.vuejs.org/)

> Vuex is a **state management pattern + library** for Vue.js applications.

## 版本对应

* vue2 -> [vuex3](https://v3.vuex.vuejs.org/)
* vue3 -> [vuex4](https://vuex.vuejs.org/) (官方建议改用pinia)

> 状态管理模式：应用全局共享单一实例store对象（单例模式），state属性定义状态值，getter定义由状态衍生的数据，mutation定义对state的更新操作，只能做同步操作，action用于分发mutation，可以执行异步操作。之所以不直接操作state而是通过mutation，是为了方便调试工具追踪状态变更操作，mutation操作之后可以保存快照，进而实现time-travel。

![vuex](./assets/vuex.png)

## 使用

```bash
npm install vuex
yarn add vuex
```

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({})
// 为了在 Vue 组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制
new Vue({  el: '#app',  store,})
```


## 数据持久化

[vuex-persist](https://www.npmjs.com/package/vuex-persist)

```bash
npm install --save vuex-persist
yarn add vuex-persist
```

```js
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const store = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  plugins: [vuexLocal.plugin]
}
```
