# Install React

## 在浏览器中使用（React 17）

```html
<body>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <div id="root"></div>

  <script type="text/babel">
    const element = <h1>Hello, world!</h1>;
    ReactDOM.render(element, document.getElementById('root'));
  </script>
</body>
```

- **react** is the core React library.
- **react-dom** provides DOM-specific methods that enable you to use React with the DOM.
- **babel** tells browers how to handle `JSX` which written in `<script>` with `type=text/babel`

## 在浏览器中使用（React 18）

```html
<body>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <div id="root"></div>

  <script type="text/babel">
    const element = <h1>Hello, world!</h1>;
    ReactDOM.createRoot(document.getElementById('root')).render(element);
  </script>
</body>
```

## 通过 [Create React App](https://create-react-app.dev/) 创建SPA

```bash
npx create-react-app my-app
cd my-app
npm start
```

