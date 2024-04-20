# Error Boundaries

部分UI的js错误不应该整垮整个app。错误边界可以捕捉js错误，避免错误向上传播，同时显示备选UI

如果错误产生但没有捕捉到，react不会挂载组件，避免产生问题UI

Error boundaries do **not** catch errors for:

- Event handlers  因为可以在事件处理器中try catch，并且编写逻辑来展示错误发生时的UI
- Asynchronous code (e.g. `setTimeout` or `requestAnimationFrame` callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)

## How to define an error boundary

> A class component becomes an error boundary if it defines either (or both) of the lifecycle methods `[static getDerivedStateFromError()](https://17.reactjs.org/docs/react-component.html#static-getderivedstatefromerror)` or `[componentDidCatch()](https://17.reactjs.org/docs/react-component.html#componentdidcatch)`.
>

> Only class components can be error boundaries.
>

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```
