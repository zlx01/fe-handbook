# [Deno](https://deno.com/)

> Deno 是一个以 Rust 为主要宿主语言、使用 V8 作为 JavaScript 引擎的 JS/TS Runtime。

```text
Deno
├── Rust                 ← 核心 Runtime
│   ├── 文件系统
│   ├── 网络
│   ├── 权限系统
│   ├── HTTP
│   ├── npm / Node 兼容
│   └── 与 V8 交互
│
├── V8 (C++)             ← 执行 JavaScript / TypeScript
│
└── JavaScript/TypeScript
    └── Web API 等部分上层实现
```

## Why Deno?

* 兼容现有 Node.js 生态系统，支持 npm 包。
* 内置 TypeScript 支持，无需额外配置。
* 内置安全权限系统，默认禁止网络、文件系统等访问。
* 内置工具链，支持格式化、Lint、测试等功能。

## Development

```bash
deno init my_project
```

```bash
deno run --watch --allow-net main.ts
```

```bash
deno task dev
# 新版 Deno CLI 对 task 做了更友好的解析：当 dev 能匹配项目中的 task 时，deno run dev 也可以把它当作 task 执行。
deno run dev
```

```bash
deno test
```

```bash
deno fmt
```

```bash
deno lint
```

```bash
deno repl
```

## Dependency management


```bash
deno install
```

```bash
deno add
```

```bash
deno remove
```

```bash
deno publish
```

By default Deno stores dependencies in a global cache and creates a local node_modules directory only when your project has a package.json.

## deno.json



## deno.lock
