# [pnpm](https://pnpm.io/)

```bash
# npm i
pnpm i

# 不更新 pnpm-lock.yaml
pnpm i --frozen-lockfile

# 只更新 pnpm-lock.yaml
pnpm i --lockfile-only

# 强制重新安装所有依赖项
pnpm i --force

# npm i <pkg>
pnpm add <pkg>

# npm i <pkg> -D
pnpm add -D <pkg>

# npm i <pkg> -g
pnpm add -g <pkg>

# 仅添加在 workspace 找到的依赖项
pnpm add -W <pkg>

pnpm --filter <pkg-selector> i lodash

# npm run <cmd>
pnpm run <cmd>

# 遵循 package.json 指定的范围更新所有的依赖项
pnpm update

pnpm update <pkg>

# npm uninstall <pkg>
pnpm remove <pkg>


```


## 

创建一个非扁平的 node_modules 目录


动态包执行

从源中获取包而不将其安装为依赖项，热加载，并运行它公开的任何默认命令二进制文件。
```bash
pnpm dlx create-react-app ./my-app
```

## pnpm link

https://pnpm.io/zh/cli/link
