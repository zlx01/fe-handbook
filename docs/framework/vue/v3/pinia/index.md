# [Pinia](https://pinia.vuejs.org/)

## What

* A state store library for vue.

* works for both Vue 2 and Vue 3
* **doesn't require you to use the composition API**
* 



## Comparison with Vuex

* offers Composition-API-style APIs
* has solid type inference support when used with TypeScript
* *mutations* no longer exist. devtools快照已不成问题
* No *namespaced modules*.

* 

## Get Started

下文以 vue3 代码为例

### Installation

```bash
yarn add pinia
```

### Use Pinia

```js
import { createPinia } from 'pinia'

app.use(createPinia())
```

### Define a Store

```js
// store/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({count: 0}),
    getters: {
        doubleCount: (state) => state.count * 2,
        /**
         * .
         * @returns { number }
         */
        doublePlusOne() {
            return this.doubleCount + 1
        }
    }
    // no mutations
    actions: {
        increment() {
            // access count directly
            this.count++
        }
    }
})

// use a function to define a store
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
        count.value++
    }
    
    return { count, increment }
})
```

### Use a Store

```js
// <script setup>
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()

// accessing the state
// directly read and write to the state by accessing it	through the store instance
countet.count++
// apply multiple changes at the same time with a partial state object
counter.$patch({count: counter.count++})
counter.increment()
// reset the state
counter.$reset()
```

### Mutating the state

```js
store.$patch({
    count: store.count + 1,
    name: 'zhangsan'
})

cartStore.$patch((state) => {
    state.items.push({ name: 'shoes', quantity: 1})
    state.hasChanged = true
})
```

### Replacing the state

```js
store.$state = { count: 12, name: 'lisi'}
```

### Subscribing to the state

```js
cartStore.$subscribe((mutation, state) => {
    // import { MutationType } from 'pinia'
    mutation.type	// 'direct' | 'patch object' | 'patch function'
	// same as cartStore.$id
    mutation.storeId
    // only available with mutation.type === 'patch object'
    mutation.payload	// patch object passed to cartStore.$patch()
    
     // persist the whole state to the local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state))
}[, { detached: true }])	 // this subscription will be kept after the component is unmounted
```

### Passing arguments to getters

```js
export const useStore = defineStore('main', {
    getters: {
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId)
        }
    }
})

// <script setup>
const { getUserById } = store.getUserById
// tempate
<p>User2: {{ getUserById(2) }} </p>
```

### Actions

```js
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
    state: () => ({ userData: null }),
    actions: {
        async registerUser(login, password) {
            try {
                this.userData = await api.post({ login, password})
                // susscess...
            } catch (error) {
                // fail...
                return error
            }
        }
    }
})
```

### Subscribing to actions

```js
const unsubscribe = someStore.$onAction(
	({
		name, // name of the action
        store, // store instance, same as `someStore`
        args, // array of parameters passed to the action
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
	}) => {
		// a shared variable for this specific action call
        const startTime = Date.now()
        // this will trigger before an action on `store` is executed
        console.log(`Start "${name}" with params [${args.join(', ')}].`)

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after((result) => {
          console.log(
            `Finished "${name}" after ${
              Date.now() - startTime
            }ms.\nResult: ${result}.`
          )
        })

        // this will trigger if the action throws or returns a promise that rejects
        onError((error) => {
          console.warn(
            `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
          )
        })
	}
[, true]) // this subscription will be kept after the component is unmounted

// manually remove the listener
unsubscribe()
```

### Define my PiniaPlugin

```js
export function myPiniaPlugin(context) {
    context.pinia // the pinia created with `createPinia()`
    context.app // the current app created with `createApp()` (Vue 3 only)
    context.store // the store the plugin is augmenting
    context.options // the options object defining the store passed to `defineStore()`
    // ...
}

pinia.use(myPiniaPlugin)
```

### Augmenting a Store

```js
// add properties to every store by simply returning an object of them in a plugin
pinia.use(() => ({ hello: 'world' }))

// add it to store._customProperties in dev mode only if you want to debug it in devtools:
pinia.use(({ store }) => {
  store.hello = 'world'
  // make sure your bundler handle this. webpack and vite should do it by default
  if (process.env.NODE_ENV === 'development') {
    // add any keys you set on the store
    store._customProperties.add('hello')
  }
})
```
