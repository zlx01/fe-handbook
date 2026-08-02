# [Jest](https://jestjs.io/)


## @swc/jest 

`@swc/jest` 是 **Jest 的代码转换器 Transformer**，作用是在 Jest 执行测试之前，使用 SWC 将项目里的：

* TypeScript
* JSX / TSX
* 较新的 ECMAScript 语法
* ESM 模块语法

转换成 Jest 当前运行环境能够执行的 JavaScript。

### 和 `ts-jest` 的区别

| 对比项                 | `@swc/jest`                 | `ts-jest`                    |
| ---------------------- | --------------------------- | ---------------------------- |
| 底层转换器             | SWC，Rust 编写              | TypeScript 编译器            |
| 转换速度               | 通常更快                    | 通常较慢                     |
| TypeScript 类型检查    | 不负责                      | 可以集成类型检查             |
| `tsconfig.json` 兼容性 | 部分配置需要转换为 SWC 配置 | 与 TypeScript 配置结合更紧   |
| Babel 插件支持         | 不支持 Babel 插件           | 不以 Babel 插件为核心        |
| 适合场景               | 注重测试启动和转换速度      | 强依赖 TypeScript 编译器行为 |

### 和 `babel-jest` 的区别

| 对比项         | `@swc/jest`    | `babel-jest`               |
| -------------- | -------------- | -------------------------- |
| 底层           | SWC            | Babel                      |
| 实现语言       | Rust 为主      | JavaScript                 |
| 转换速度       | 通常更快       | 通常较慢                   |
| Babel 插件生态 | 不兼容         | 完整支持                   |
| TypeScript     | 删除类型       | 通过 Babel preset 删除类型 |
| 自定义转换能力 | SWC 配置及插件 | Babel 插件非常丰富         |
