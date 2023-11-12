# [Vue Router](https://router.vuejs.org/)

## 功能
* 嵌套路由映射
* 动态路由选择
* 模块化、基于组件的路由配置
* 路由参数、查询、通配符
* 展示由 Vue.js 的过渡系统提供的过渡效果
* 细致的导航控制
* 自动激活 CSS 类的链接
* HTML5 history 模式或 hash 模式
* 可定制的滚动行为
* URL 的正确编码

## 安装

```bash
npm install vue-router@4
```

## 使用

`@/route/index.js`

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FooTest from '@/views/FooTest.vue'

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/foo', component: FooTest }
  ]
})

export default router
```

`main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

组件中

* useRoute
* useRouter
* onBeforeRouteLeave, 与 beforeRouteLeave 相同，无法访问 `this`
* onBeforeRouteUpdate, 与 beforeRouteUpdate 相同，无法访问 `this`

* useLink, 用于自定义RouterLink

