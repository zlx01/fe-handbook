# [oxc](https://oxc.rs/)

* [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) is the fastest linter for JavaScript and TypeScript. It targets compatibility with the ESLint ecosystem.
* [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) is the fastest formatter. It targets Prettier-compatible formatting.
* [Parser](https://oxc.rs/docs/guide/usage/parser.html) is the fastest JS and TS parser with an AST for tooling.
* [Transformer](https://oxc.rs/docs/guide/usage/transformer.html) provides fastest TS, JSX, and modern JavaScript transforms.
* [Minifier](https://oxc.rs/docs/guide/usage/minifier.html) is the fastest minifier for production output.
* [Resolver](https://oxc.rs/docs/guide/usage/resolver.html) is the fastest module resolver for JS and TS projects.
* [TypeScript Runner](https://oxc.rs/docs/guide/usage/oxc-node.html) runs TypeScript and JSX directly in Node.js.

| Oxc 组件    | 对标工具                 | 作用                  |
| ----------- | ------------------------ | --------------------- |
| Oxlint      | ESLint                   | 代码检查              |
| Oxfmt       | Prettier                 | 代码格式化            |
| Parser      | Babel Parser、SWC Parser | 生成 AST              |
| Transformer | Babel、SWC               | TS、JSX、现代语法转换 |
| Minifier    | Terser、SWC Minifier     | JS 压缩               |
| Resolver    | enhanced-resolve         | 模块路径解析          |
