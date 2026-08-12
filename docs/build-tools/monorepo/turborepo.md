---
author: ChatGPT
---

# [Turborepo](https://turborepo.dev/)

https://github.com/zlx01/turborepo-glimpse

Turborepo 是一个专门面向 **JavaScript / TypeScript 项目的高性能构建系统**，最典型的使用场景就是管理 **Monorepo**。官方现在把它定义为 “high-performance build system”，底层主要用 Rust 实现。([Turborepo](https://turborepo.com/docs?utm_source=chatgpt.com))

你可以把它理解成：

> **pnpm workspace / npm workspace 负责“把多个 package 放在一个仓库里”，Turborepo 负责“这些 package 的任务该怎么高效执行”。**

比如你的项目：

```text
my-monorepo/
├─ apps/
│  ├─ web
│  └─ admin
├─ packages/
│  ├─ ui
│  ├─ utils
│  └─ eslint-config
├─ pnpm-workspace.yaml
└─ turbo.json
```

这里 `pnpm workspace` 负责 package 之间的依赖、安装、软链接；而 Turborepo 则负责：

```bash
turbo run build
turbo run lint
turbo run test
```

它会知道类似这样的依赖关系：

```text
packages/utils
      ↓
packages/ui
      ↓
apps/web
```

所以执行 `build` 时，Turbo 可以自动按照依赖顺序：

```text
utils build
   ↓
ui build
   ↓
web build
```

而不是你自己手写：

```bash
pnpm --filter utils build
pnpm --filter ui build
pnpm --filter web build
```

它最核心的价值其实是 **任务调度 + 缓存**。

例如第一次：

```text
utils build   2s
ui build      3s
web build     5s

总计 10s
```

第二次代码没变：

```text
utils build   cache
ui build      cache
web build     cache
```

可能几乎瞬间完成。CI 里尤其有价值。

除此之外，它还可以识别哪些任务之间没有依赖，然后**并行执行**：

```text
apps/web lint      ──────┐
apps/admin lint    ──────┤ 并行
packages/ui lint   ──────┘
```

Turborepo 本身建立在包管理器的 **Workspaces** 之上，所以它不是 pnpm/npm/yarn workspace 的替代品，而是在其上增加任务编排和构建优化。([Turborepo](https://turborepo.com/docs/crafting-your-repository/structuring-a-repository?utm_source=chatgpt.com))

通常会有一个：

```json
{
  "$schema": "https://turborepo.com/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "lint": {},
    "test": {}
  }
}
```

其中：

```text
^build
```

大概表示：

> 当前 package build 之前，先执行它依赖的 package 的 build。

所以比如：

```text
web
 ↓ depends on
ui
 ↓ depends on
utils
```

Turbo 会自己计算任务图。

### 它和 Nx / Lerna 的关系

可以大致这么看：

| 工具               | 核心定位                              |
| ------------------ | ------------------------------------- |
| pnpm workspace     | Monorepo 包管理                       |
| npm/yarn workspace | Monorepo 包管理                       |
| **Turborepo**      | Monorepo 任务调度、缓存、构建加速     |
| Nx                 | 更完整的 Monorepo 工程平台            |
| Lerna              | 老牌 Monorepo package 管理 / 发布工具 |

所以 **Turbo 相比 Nx 更轻**。

Nx 更像：

```text
包管理
项目生成器
任务调度
缓存
依赖图
插件体系
代码生成
affected 分析
...
```

Turbo 更聚焦：

```text
任务依赖
+
并行执行
+
缓存
+
CI 加速
```

### 一个很好记的类比

如果把：

```text
Vite / Rspack / Webpack
```

看成：

> **单个项目怎么 build**

那么：

```text
Turborepo
```

解决的是：

> **一个仓库里有 20 个项目/package，到底哪些需要 build、先 build 谁、哪些可以并行、哪些可以直接读缓存。**

因此它**不是 Bundler**，不会替代 Vite / Webpack / Rspack。

你的项目完全可能是：

```text
pnpm
  ↓
Turborepo
  ↓
├─ apps/web     → Vite
├─ apps/admin   → Rspack
├─ packages/ui  → tsup
└─ packages/sdk → tsc
```

一句话总结：

**Turborepo = 给 JS/TS Monorepo 做任务编排和缓存加速的工具。** 对前端工程视角来说，可以先把它归类为 **Monorepo Build System / Task Runner**，而不是 Compiler 或 Bundler。([Turborepo](https://turborepo.com/docs?utm_source=chatgpt.com))
