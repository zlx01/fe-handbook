# 前端防御性编程

前端防御性编程可以理解为：**默认一切外部输入都不可信、默认网络会失败、默认接口会异常、默认用户会乱点、默认运行环境不稳定**。

## 1. 网络层防御

### 超时控制

不要让请求无限等待。

```js
const controller = new AbortController()

const timer = setTimeout(() => {
  controller.abort()
}, 8000)

try {
  const res = await fetch('/api/user', {
    signal: controller.signal,
  })
} finally {
  clearTimeout(timer)
}
```

### 断网/弱网处理

```js
window.addEventListener('online', () => {
  console.log('网络恢复')
})

window.addEventListener('offline', () => {
  console.log('网络断开')
})
```

常见策略：

| 场景     | 处理                  |
| -------- | --------------------- |
| 断网     | 显示离线提示          |
| 弱网     | loading + 超时提示    |
| 请求失败 | 允许重试              |
| 页面刷新 | 保留必要状态          |
| 上传失败 | 支持断点续传/重新上传 |

------

## 2. 接口层防御

### 不信任接口字段

接口字段可能为 `null`、`undefined`、类型错误、结构变化。

```
const userName = data?.user?.name ?? '匿名用户'
const list = Array.isArray(data?.list) ? data.list : []
```

### 接口返回统一封装

```js
async function request<T>(url: string): Promise<T> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`)
  }

  const json = await res.json()

  if (json.code !== 0) {
    throw new Error(json.message || '业务错误')
  }

  return json.data as T
}
```

### 运行时校验

TypeScript 只能管编译期，接口数据要做运行时校验。

```js
function isUser(data: any): data is User {
  return typeof data?.id === 'number' &&
         typeof data?.name === 'string'
}
```

大型项目可以用：

```
zod
valibot
io-ts
```

------

## 3. 错误处理防御

### 分层处理错误

| 层级               | 处理方式                      |
| ------------------ | ----------------------------- |
| 组件内错误         | 局部兜底                      |
| 请求错误           | toast / retry                 |
| 路由错误           | error page                    |
| 全局 JS 错误       | 监控上报                      |
| Promise 错误       | unhandledrejection            |
| React/Vue 渲染错误 | ErrorBoundary / errorCaptured |

### 全局错误监听

```js
window.addEventListener('error', event => {
  console.log('JS错误', event.error)
})

window.addEventListener('unhandledrejection', event => {
  console.log('Promise错误', event.reason)
})
```

### React ErrorBoundary

```js
<ErrorBoundary fallback={<div>页面出错了</div>}>
  <App />
</ErrorBoundary>
```

Vue 类似：

```js
app.config.errorHandler = (err, instance, info) => {
  console.log(err, info)
}
```

------

## 4. 重试机制

### 适合重试的场景

| 场景            | 是否重试             |
| --------------- | -------------------- |
| 网络超时        | 可以                 |
| 502 / 503 / 504 | 可以                 |
| 401             | 不建议，应该重新登录 |
| 403             | 不建议               |
| 400 参数错误    | 不建议               |
| 业务错误        | 看情况               |

### 简单重试

```js
async function retry<T>(
  fn: () => Promise<T>,
  times = 3
): Promise<T> {
  let lastError

  for (let i = 0; i < times; i++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
    }
  }

  throw lastError
}
```

### 指数退避

```js
const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  times = 3
): Promise<T> {
  let lastError

  for (let i = 0; i < times; i++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      await sleep(2 ** i * 1000)
    }
  }

  throw lastError
}
```

------

## 5. 安全防御

### XSS 防御

避免直接插入 HTML：

```html
<div>{content}</div>
```

谨慎使用：

```
dangerouslySetInnerHTML
v-html
innerHTML
```

如果必须用，要做 HTML 清洗：

```js
DOMPurify.sanitize(html)
```

### CSRF 防御

常见方案：

| 方案                  | 说明            |
| --------------------- | --------------- |
| SameSite Cookie       | 限制跨站 Cookie |
| CSRF Token            | 请求携带 token  |
| Referer / Origin 校验 | 服务端校验来源  |

### Token 防御

不要把高敏感 token 随便放在 `localStorage`。

| 存储方式        | 风险              |
| --------------- | ----------------- |
| localStorage    | 容易被 XSS 读取   |
| sessionStorage  | 同样有 XSS 风险   |
| httpOnly Cookie | JS 读不到，更安全 |

------

## 6. 用户操作防御

### 防重复提交

```js
let submitting = false

async function submit() {
  if (submitting) return

  submitting = true
  try {
    await apiSubmit()
  } finally {
    submitting = false
  }
}
```

按钮层面：

```jsx
<button disabled={loading}>
  {loading ? '提交中' : '提交'}
</button>
```

### 防抖节流

搜索框用防抖：

```js
debounce(fn, 300)
```

滚动、resize 用节流：

```js
throttle(fn, 200)
```

------

## 7. 资源加载防御

图片兜底：

```jsx
<img
  src={url}
  onError={e => {
    e.currentTarget.src = '/default.png'
  }}
/>
```

动态 import 失败兜底：

```js
const Page = React.lazy(() =>
  import('./Page').catch(() => import('./FallbackPage'))
)
```

静态资源加载失败可以监听：

```ts
window.addEventListener(
  'error',
  event => {
    const target = event.target as HTMLElement

    if (target.tagName === 'SCRIPT' || target.tagName === 'LINK') {
      console.log('资源加载失败', target)
    }
  },
  true
)
```

------

## 8. 状态数据防御

### 避免空值崩溃

```js
const price = Number(data?.price ?? 0)
```

### 避免 NaN

```ts
function safeNumber(value: unknown, fallback = 0) {
  const num = Number(value)
  return Number.isFinite(num) ? num : fallback
}
```

### 避免数组方法报错

```js
const list = Array.isArray(data) ? data : []
list.map(item => item.name)
```

------

## 9. 监控上报

建议上报这些内容：

| 类型         | 示例                        |
| ------------ | --------------------------- |
| JS 错误      | error、stack                |
| Promise 错误 | unhandledrejection          |
| 接口错误     | URL、status、code           |
| 资源错误     | script/css/image load error |
| 白屏         | root 节点无内容             |
| 性能         | FP、FCP、LCP、CLS           |
| 用户行为     | 点击路径、页面跳转          |

------

## 10. 推荐实践总结

前端防御性编程核心可以总结成：

```
请求要超时
失败要兜底
接口要校验
错误要捕获
操作要防重
资源要降级
安全要默认不信任
异常要可观测
```

实际项目里建议封装这几层：

```
request 请求层
error 错误处理层
retry 重试层
fallback UI 兜底层
monitor 监控上报层
security 安全处理层
```

最重要的是：**不要让一个小异常导致整个页面不可用。**
