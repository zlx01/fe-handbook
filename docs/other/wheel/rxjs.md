# [RxJS](https://rxjs.dev/)

> [Reactive Extensions](https://reactivex.io/) for JavaScript
> 
> RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

## 特点

* Event Flow
* Asynchronous Programming
* Functional Programming

## 到底解决了什么问题？

前端最头疼的往往是**多个异步操作的协调**：比如一个搜索框，要在用户停止输入后才发请求，同时还要处理请求返回的顺序，避免后发的请求先返回覆盖了最新结果。用传统 Promise 或回调很容易写出混乱的代码。RxJS 用 **`switchMap` + `debounceTime`** 几行就能干净解决，还能轻易实现撤销、重试、竞态处理。
