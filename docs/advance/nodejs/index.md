# [Nodejs](https://nodejs.org/en/)

一个基于 Chrome V8 引擎的JavaScript运行环境。

一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。

事件驱动、异步驱动、非阻塞式IO

## Notes

* 没有锁，没有死锁问题

* Node.js 中几乎没有函数直接执行 I/O 操作（除非你使用 Node.js 标准库中的同步函数版本），其进程从不会被阻塞
* Node处理请求时是单线程，但是在后台拥有一个I/O线程池.
* 就像浏览器的 JavaScript 一样 —— 事件循环对用户是隐藏的。
* 支持流式和低延迟
* Node.js 被设计成单线程运行

## 模块

### 规范

CommonJS

### 分类

* 核心模块
  * 由node引擎提供的模块，核心模块的标识就是模块的名字
  * 包括文件系统I/O、网络（ HTTP、 TCP、 UDP、 DNS、TLS/SSL等）、二进制数据流、加密算法、数据流 等等
* 文件模块
  * 由用户自己创建的模块，文件模块的标识就是文件的路径（绝对路径或相对路径，一般用相对路径）

## .env

### process.env.NODE_ENV

* development
* production
* testing
* staging

指定运行环境

```bash
NODE_ENV=production node  app.js
```

也可以用通过 [cross-env](https://www.npmjs.com/package/cross-env) 设置

## ts-node

```bash
npm i -D ts-node

npx ts-node example.ts
```

## tsx

```bash
npm i -D tsx
npx tsx example.ts

node --import=tsx example.ts
```





