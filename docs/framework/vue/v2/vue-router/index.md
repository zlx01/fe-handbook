# [Vue Router](https://v3.router.vuejs.org/)

## SPA(Single Page Application)

单页面应用

## 前端路由原理

### hash模式

* hash作用于前端，地址栏变化，但不会发送到服务器

* 更改hash的两种方式
  * a标签href
  * location.hash = xxx

* 会触发 hashchange 事件	

### history模式
* 不刷新浏览器的情况下更新浏览器历史记录


```js
window.history.pushState()
window.history.replaceState()
window.history.go(n)
window.history.forward()
window.history.back()
```

## 功能
* 嵌套的路由/视图表
* 模块化的、基于组件的路由配置
* 路由参数、查询、通配符
* 基于 Vue.js 过渡系统的视图过渡效果
* 细粒度的导航控制
* 带有自动激活的 CSS class 的链接
* HTML5 历史模式或 hash 模式，在 IE9 中自动降级
* 自定义的滚动条行为，`scrollBehavior (to, from, savedPosition) {  // return 期望滚动到哪个的位置 }`

## 安装

```bash
# npm
npm install vue-router
# vue cli
vue add router
```

## 使用

@/router/index.js

```js
import Vue from 'vue';
import Home from './Home.vue'

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hello",
    name: "hello",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    // 捕获所有路由或 404 Not found 路由
    path: '*',
    component: NotFoundComponent,
  },
];
      
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
```

main.js

```js
import Vue from 'vue';
import router from '@/router'

const app = new Vue({router}).$mount('#app');
```

##  路由管理器

### 路由 $route（组件实例）

* path
* name
* query
* params
* meta
* fullPath
* hash

### 路由器 $router（全局）
* push
* replace
* go
* forward
* back

### 路由模式

#### hash

纯前端即可实现

#### history

* 解决页面刷新404问题

* 要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。例如nginx要配置：

  ```conf
  location / {  
  	try_files $uri $uri/ /index.html;
  }
  ```

* 这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后再给出一个 404 页面。

### 路由配置

* path
* name 命名路由，可能有冲突，尽量用path吧
* component，可以使用import异步懒加载组件
* redirect
  * redirect: '/b'
  * redirect: { name: 'foo' }
  * redirect: to => {  // 方法接收 目标路由 作为参数  // return 重定向的 字符串路径/路径对象}}
* alias
  * { path: '/a', component: A, alias: '/b' }
  * /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
* meta 路由元信息
  * title
  * auth
* children 嵌套路由
* props
* components 命名视图组件
* beforeEnter 独享路由守卫

### 路由器配置

* mode
  * hash
  * history
* base
  * 部署路径
* routes

### 路由器方法

* addRoute，动态添加一条路由配置
* beforeEach
* afterEach

### 动态路由

* 路由参数 `/:paramName/`  `this.$route.params.paramName`
* 响应路由参数的变化
  * 问题：同名路由跳转，路由参数变化，但是因为路由组件复用，不会触发生命周期钩子
  * 解决方法一：watch (监测变化) $route 对象
  * 解决方法二：beforeRouteUpdate
* 捕获所有路由或 404 Not found 路由
* 匹配优先级：按照路由的定义顺序，路由定义得越早，优先级就越高。

### 嵌套路由

以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。

### 命名视图

```js
const router = new VueRouter({
  routes: [
    {
      path: '/', 
      components: {default: Foo, a: Bar, b: Baz}
    }
  ]
})
```

### 内置组件

* router-link
  * v-slot 定制化渲染
  * to
  * replace
  * exact
  * active-class
  * exact-active-class
* router-view 路由组件渲染的位置
  * name属性
  * 命名视图
* transition 过渡动画
* transition-group
* keep-alive
  * include
  * key

### 路由导航

声明式路由导航

编程式路由导航

### 路由组件传参

query

```js
// path搭配query
this.$router.push({path: '/foo', query: {id: 0000}})
```

params

```js
// name搭配params
// 页面刷新参数丢失
this.$router.push({name: 'foo', params: {id: 1111}})
```

props(布尔模式)

* 如果 props 被设置为 true，route.params 将会被设置为组件属性。

```js
// 路由配置
{
  path: "/foo/:id", 
  name: "foo",
  component: () => import("@/views/Foo.vue"),
  props: true,
}

// Foo.vue内声明，会自动注入
props: ['id'],
    
// 通过路由动态参数设置id
```

```js
// 路由配置
{
  path: "/foo", 
  name: "foo",
  component: () => import("@/views/Foo.vue"),
  props: true,
}

// Foo.vue内声明，会自动注入
props: ['id'],
    
// 通过 router.push 方法参数设置id
```

props(对象模式)

* 如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。

```js
{
  path: "/foo", 
  name: "foo",
  component: () => import("@/views/Foo.vue"), 
  props: {msg: "This is the Foo page!",},
}

// Foo.vue内声明，会自动注入
props: ['msg'],
```

props(函数模式)

* 你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

```js
{
  path: "/foo",
  name: "foo",
  component: () => import("@/views/Foo.vue"), 
  props: (route) => ({id: route.query.id,}),
}

// Foo.vue内声明，会自动注入
props: ['id'],
```

### 路由守卫

* 全局路由守卫
  * beforeEach
    * 权限控制
    * meta
    * next
    * token、login、menu
  * afterEach
    * 根据to.meta.title修改document.title
* 独享路由守卫
  * beforeEnter 写在路由配置中
* 组件路由守卫
  * beforeRouterEnter 通过路由规则进入该组件时调用，直接调用路由组件时不会触发
  * beforeRouteLeave 通过路由规则离开该组件时调用，直接调用路由组件时不会触发
  * beforeRouteUpdate 动态路由参数变化时触发，可以解决路由组件复用问题

### 路由懒加载

* 把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件
* 原理：vue异步组件 + webpack动态import

```js
const Foo = () => import('./Foo.vue')

// 按组件分块，指定chunk名
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-bar" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-baz" */ './Baz.vue')
```

### 滚动行为

```js
const router = new VueRouter({
  routes: [...],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 举例1
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
    // 举例2
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  }
})
```

## 完整的导航解析流程

* 导航被触发。
* 在失活的组件里调用 beforeRouteLeave 守卫。
* 调用全局的 beforeEach 守卫。
* 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
* 在路由配置里调用 beforeEnter。
* 解析异步路由组件。
* 在被激活的组件里调用 beforeRouteEnter。
* 调用全局的 beforeResolve 守卫 (2.5+)。
* 导航被确认。
* 调用全局的 afterEach 钩子。
* 触发 DOM 更新。
* 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## 边界问题

### 数据获取

* 导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。
* 导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。

### 导航故障

* 排查导航失败问题
* 检查路由守卫