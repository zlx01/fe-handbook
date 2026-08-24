# [Vercel](https://vercel.com/)

## vercel.json

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

- `rewrites`：将所有路径重写到 `index.html`，用于支持 SPA 的 History 路由，同时保留浏览器中的原始 URL。

## Node.js 版本

Vercel 可在项目设置中选择 Node.js 版本，也可以在 `package.json` 中通过 `engines.node` 指定。`package.json` 中的配置优先级更高：

```json
{
  "engines": {
    "node": "22.x"
  }
}
```
