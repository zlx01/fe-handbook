# corepack

Nodejs官方工具，统一管理包管理器（如 npm、yarn、pnpm）的版本

默认关闭，需要手动启用

```bash
# 启用
corepack enable
# 关闭
corepack disable
```

package.json

```json
{
  "name": "my-project",
  "packageManager": "pnpm@8.6.3"
}
```



```bash
corepack install -g pnpm@*
corepack install -g pnpm@8
corepack install -g yarn@stable
```
