# [Express](https://expressjs.com/)


## 接口

handler可以有多个

## 静态资源

## 路由配置

### 匹配，处理器

### 分类，模块化

## 错误处理

404

## express-generator


## Middleware

### [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

```ts
// typescript
import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import type { Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

const proxyMiddleware = createProxyMiddleware<Request, Response>({
  target: 'http://www.example.org/api',
  changeOrigin: true,
});

app.use('/api', proxyMiddleware);

app.listen(3000);

// proxy and keep the same base path "/api"
// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```
