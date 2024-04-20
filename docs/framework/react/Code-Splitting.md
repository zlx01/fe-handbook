# Code Splitting

## **import() + React.lazy +** Suspense

```jsx
export default function OtherComponent() {
  return (
    <div>
      OtherComponent
    </div>
  );
}
```

```jsx
import React, {Suspense} from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

export default function MyComponent(){
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  )
}
```

**Route-based code splitting**

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

`React.lazy` currently only supports default exports. 如果组件是命名导出的话，需要封装一下变成默认导出

```jsx
// FooComponent.js
export { FooComponent as default } from "./ManyComponents.js";
```
