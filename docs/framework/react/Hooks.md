# Hooks

- Only call Hooks **at the top level**.
- Only call Hooks **from React function components**.
- 自定义hooks：函数名以use开头
- hooks是完全可复用，状态独立的

## useState

```jsx
import { useReducer } from "react";

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

## useEffect

- 默认每次渲染都会重新执行
- 可以指定依赖，依赖变化才会执行，依赖可以是State，Props

## useContext

## useReducer

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

**Lazy initialization**

```jsx
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

## useRef

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## **useMemo**

## **useCallback**

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.



---

## react hooks解决了什么问题，优缺点？

React Hooks（React 16.8 引入）本质上是为了**让函数组件拥有状态和生命周期能力**，并解决 Class Component 长期存在的一些设计问题。

### Hooks 出现前的问题

#### 1. 组件逻辑难以复用

以前复用状态逻辑主要靠：

* Mixins（已废弃）
* HOC（Higher Order Component）
* Render Props

例如：

```js
withUser(withTheme(withPermission(Component)))
```

会变成：

```jsx
<ThemeProvider>
  <UserProvider>
    <PermissionProvider>
      <Component />
    </PermissionProvider>
  </UserProvider>
</ThemeProvider>
```

这被称为：

> Wrapper Hell（组件嵌套地狱）

逻辑复用和组件树耦合在一起。

------

Hooks：

```js
function Profile() {
  const user = useUser()
  const theme = useTheme()
  const permission = usePermission()

  return ...
}
```

逻辑直接复用，不增加组件层级。

------

#### 2. Class Component 太复杂

以前：

```js
class Counter extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    document.title = this.state.count
  }

  componentDidUpdate() {
    document.title = this.state.count
  }

  render() {
    ...
  }
}
```

一个简单功能被拆散到：

* constructor
* state
* lifecycle
* render

逻辑分散在多个位置。

------

Hooks：

```js
function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count
  })

  return ...
}
```

相关逻辑集中在一起。

------

#### 3. this 令人困惑

Class 最大痛点之一：

```jsx
class App extends Component {
  handleClick() {
    console.log(this)
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        click
      </button>
    )
  }
}
```

报错：

```js
Cannot read property xxx of undefined
```

因为：

```js
this.handleClick
```

丢失了 this。

必须：

```js
constructor() {
  this.handleClick = this.handleClick.bind(this)
}
```

或者：

```js
handleClick = () => {}
```

------

Hooks 完全没有 this：

```js
function App() {
  const handleClick = () => {}

  return <button onClick={handleClick} />
}
```

更符合 JavaScript 函数式编程习惯。

------

#### 4. 生命周期函数导致逻辑重复

以前：

```js
componentDidMount() {
  fetchData()
}

componentDidUpdate() {
  fetchData()
}
```

同样代码写两遍。

------

Hooks：

```js
useEffect(() => {
  fetchData()
}, [id])
```

统一副作用处理。

------

### Hooks 带来的好处

#### 1. 函数组件成为主流

以前：

```js
function Component() {}
```

只能展示 UI。

```js
class Component extends React.Component {}
```

才能管理状态。

------

现在：

```js
function Component() {
  const [data, setData] = useState()
}
```

函数组件拥有完整能力。

React 官方现在基本推荐：

> Function Component + Hooks

------

#### 2. 状态逻辑复用更简单

自定义 Hook：

```js
function useFetch(url) {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
  }, [url])

  return data
}
```

使用：

```js
function User() {
  const data = useFetch('/user')
}
```

类似于：

```js
const data = axios(...)
```

非常自然。

------

#### 3. 更利于代码拆分

Class：

```js
class UserPage extends Component {
  state = {}
  
  componentDidMount() {}
  componentDidUpdate() {}

  handleLogin() {}
  handleLogout() {}
  fetchUser() {}
}
```

可能几千行。

------

Hooks：

```js
function UserPage() {
  const user = useUser()
  const auth = useAuth()
  const permission = usePermission()
}
```

按功能拆分。

------

### 4. 更适合组合

Hooks 遵循组合思想：

```js
function useUserProfile() {
  const user = useUser()
  const theme = useTheme()

  return { user, theme }
}
```

可以像搭积木一样组合。

### Hooks 的代价

也不是没有缺点。

#### 1. 闭包陷阱（Stale Closure）

```js
useEffect(() => {
  setInterval(() => {
    console.log(count)
  }, 1000)
}, [])
```

这里永远打印初始值。

需要理解：

* 闭包
* 依赖数组
* useRef

------

#### 2. 依赖数组容易写错

```js
useEffect(() => {
  fetchUser(id)
}, [])
```

漏掉：

```js
[id]
```

会产生 Bug。

------

#### 3. Hook 调用顺序必须固定

不能：

```js
if (show) {
  useEffect(...)
}
```

因为 React 内部是按调用顺序维护 Hook 状态链表的。

