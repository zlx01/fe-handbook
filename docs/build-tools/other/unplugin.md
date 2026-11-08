---
ok-repo: https://github.com/zlx01/ok-unplugin
---

# [Unplugin](https://github.com/unjs/unplugin)

::: warning
教练，我不想import了
:::

## import vue

```shell
npm i unplugin-vue-components -D
```

## import js/ts

```shell
npm i -D unplugin-auto-import
```

## 去掉 import 之后ts类型提示怎么办？

运行时会自动生成类型文件

| plugin                  | d.ts              |
| ----------------------- | ----------------- |
| unplugin-vue-components | components.d.ts   |
| unplugin-auto-import    | auto-imports.d.ts |

## 为什么可以自动import

`unplugin-auto-import` 会在构建工具处理源码时，通过 Unplugin 提供的 `transform` 等统一钩子扫描代码中的标识符；当发现 `ref`、`computed`、`useRouter` 等已配置但未显式导入的 API，就解析其来源，并在源码交给 Vite、Webpack、Rspack 等工具继续编译前，自动插入对应的 `import` 语句，同时可生成类型声明文件供 TypeScript 和 IDE 使用。

```text
源代码
  ↓
扫描未导入的标识符
  ↓
与预设/API 配置匹配
  ↓
插入 import 语句
  ↓
交给构建工具继续编译
```

`unplugin-vue-components` 的原理与自动导入 API 类似，但扫描对象是 Vue 模板中的组件标签。它通过 Unplugin 的构建钩子解析 `.vue` 文件，发现 `<MyButton>` 等未手动注册的组件后，在指定目录或 UI 库 Resolver 中查找组件来源，再向编译结果注入 `import` 和组件注册代码，同时生成 `components.d.ts` 为 IDE 提供类型提示。

```text
.vue 模板中的组件标签
        ↓
扫描并提取组件名
        ↓
本地组件目录 / UI 库 Resolver 中查找
        ↓
注入 import 和组件注册
        ↓
交给 Vue 编译器和构建工具处理
```

## unplugin-vue 是干嘛的？

核心定位：**跨构建工具通用的 Vue3 SFC 编译插件**，作用和 Vite 官方 `@vitejs/plugin-vue` 完全一致 —— 把 `.vue` 单文件组件编译成浏览器可执行 JS，支持 `<script setup>`、Vue 宏语法、样式处理等。

依托 `unplugin` 通用插件体系，一份插件源码同时适配： 
Vite / Rollup /esbuild/ Webpack / Rspack / Farm / Rolldown
而官方 `@vitejs/plugin-vue` **只能在 Vite 里用**
