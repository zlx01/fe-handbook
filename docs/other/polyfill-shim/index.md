# Polyfill vs Shim

## [polyfill](https://en.wikipedia.org/wiki/Polyfill_(programming))

> A **polyfill** is code that implements a feature on web browsers that do not natively support the feature. Formally, "a polyfill is a shim for a browser API."

Polyfill 是一块代码，用来为旧浏览器提供它没有原生支持的较新的功能。举例：Babel polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)

## [shim](https://en.wikipedia.org/wiki/Shim_(computing))

> A **shim** is a library that transparently intercepts API calls and changes the arguments passed, handles the operation itself or redirects the operation elsewhere.

在一个旧的环境中模拟出一个新 API ，而且仅靠旧环境中已有的手段实现，以便所有的浏览器具有相同的行为。举例：jQuery 发送Ajax请求，屏蔽了浏览器实现细节。

[es-shims](https://github.com/es-shims)    [es6-shim](https://github.com/paulmillr/es6-shim)