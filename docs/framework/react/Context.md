# Context

通常数据只能从父组件流向子组件，如果数据要要传给较深层级的组件，一层一层透传很繁琐。使用Context可以避免此问题，场景举例：当前用户，主题色，语言。

> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.


## 定义和使用Context

### 函数组件

```jsx
import React from 'react';

const ThemeContext = React.createContext('light');

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton/>
    </div>
  );
}

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {theme => <Button theme={theme}/>}
    </ThemeContext.Consumer>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <Button theme={theme}/>
  );
}

function Button(props) {
  return (
    <button>{props.theme}</button>
  );
}
```

### 类组件

```jsx
import React from 'react';

const ThemeContext = React.createContext('light');

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}

function Button(props) {
  return (
    <button>{props.theme}</button>
  );
}
```

**Dynamic Context，Updating Context from a Nested Component**

```jsx
import React from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export default function App() {
  const [theme, setTheme] = React.useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Toolbar/>
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton/>
    </div>
  );
}

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
```

**Consuming Multiple Contexts**

有两个以上的Context最好抽取组件，在一个组件同时提供

```jsx
<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={signedInUser}>
    <Layout />
  </UserContext.Provider>
</ThemeContext.Provider>

<ThemeContext.Consumer>
  {theme => (
    <UserContext.Consumer>
      {user => (
        <ProfilePage user={user} theme={theme} />
      )}
    </UserContext.Consumer>
  )}
</ThemeContext.Consumer>
```

避免重复渲染

```jsx
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

在上面的例子中，如果Provider的父组件也就是App重新渲染，Context的consumer组件也会重新渲染。因为每次渲染，Provider拿到的value都是一个新的对象。

为避免这个问题，可以把Context的值定义在State中

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.value}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```
