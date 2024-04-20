# State

* 组件内部数据
* 更新State会触发重新渲染
* 单项数据流（a “top-down” or “unidirectional” data flow）任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

## 定义、使用、更新State

## 函数组件

```jsx
import { useState, useEffect } from 'react'

export function Clock() {
  const [date, setDate] = useState(new Date());
  const tick = () => setDate(new Date());

  useEffect(() => {
    // componentDidMount
    const timerID = setInterval(
      () => tick(),
      1000
    );
    // componentWillUnmount
    return () => clearInterval(timerID);
  })

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

## 类组件

```jsx
import { Component } from 'react'

export class Clock extends Component {
  // 使用 public class fields syntax 初始化
  // state = {date: newDate()}
  constructor(props) {
    super(props);
    // 在构造中初始化
    this.state = {date: newDate()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: newDate()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

```

依赖旧State的更新

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

部分更新：可以只更新部分属性，而不会影响其他属性

```jsx
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}
```
