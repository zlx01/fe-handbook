# [Pinia](https://pinia.vuejs.org/)

## Install Pinia

```bash
npm i pinia
# or
yarn add pinia
```

## Use Pinia

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

## Define an Option Store

```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    age: 0,
    name: '',
    users: [{id: '1', name: '111'}, {id: '2', name: '222'}]
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    /**
     * @returns {number}
     */
    doublePlusOne() {
      return this.doubleCount + 1
    },
    getUserById: (state) => {
      return (id) => state.users.find(user => user.id === id)
    }

  },
  actions: {
    increment(step = 1) {
      this.count += step
    },
    async fetchData() {
      const data = await fetch('https://api.github.com/users/posva')
      return data.json()
    }
  }
})
```

## Define a Setup Store

```js
import { defineStore } from 'pinia'
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter1', () => {
  const count = ref(0)
  const age = ref(0)
  const name = ref('')
  const users = ref([{id: '1', name: '111'}, {id: '2', name: '222'}])
  const doubleCount = computed(() => count.value * 2)
  const doublePlusOne = computed(() => doubleCount.value + 1)
  const getUserById = computed(() => {
    return (id) => users.value.find(user => user.id === id)
  })
  const increment = (step = 1) => count.value += step
  const fetchData = async () => {
    const data = await fetch('https://api.github.com/users/posva')
    return data.json()
  }
  return { count, name, age, doubleCount, doublePlusOne, getUserById, increment, fetchData}
})
```

## Use a Store

```js
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counter = useCounterStore()
console.log(counter.count, counter.doubleCount, counter.doublePlusOne)

// 直接修改store
counter.count++
// 通过 $patch 修改 store
counter.$patch({count: counter.count + 1})

// 同时修改多个属性，使用补丁对象
counter.$patch({
  count: counter.count + 1,
  age: 120,
  name: 'DIO',
})
// 同时修改多个属性，使用函数
counter.$patch(state => {
  state.count++
  state.age = 120
  state.name = 'DIO'
})

// 通过 storeToRefs 将 store 转换为响应式对象
const { count, doubleCount, doublePlusOne, getUserById } = storeToRefs(counter)
console.log(count.value, doubleCount.value, doublePlusOne.value)
const user = getUserById.value('1')
console.log(user)

counter.increment()
counter.fetchData()
// 作为 action 的 increment 可以直接解构
const { increment } = counter
increment()
```
