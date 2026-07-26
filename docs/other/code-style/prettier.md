# [Prettier](https://github.com/prettier/prettier)

* Code Formatter
* Written in JavaScript

## Editor Integration

* VSCode：https://github.com/prettier/prettier-vscode
* WebStorm：https://prettier.io/docs/webstorm

## Usage

```bash
npm i -D prettier 
```

```bash
prettier --write '**/*.ts'
prettier --check '**/*.ts'
```

## Configuration File

- A `"prettier"` key in your `package.json`, or [`package.yaml`](https://github.com/pnpm/pnpm/pull/1799) file.
- A `.prettierrc` file written in JSON or YAML.
- A `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, or `.prettierrc.json5` file.
- A `.prettierrc.js`, `prettier.config.js`, `.prettierrc.ts`, or `prettier.config.ts` file that exports an object using `export default` or `module.exports` (depends on the [`type`](https://nodejs.org/api/packages.html#type) value in your `package.json`).
- A `.prettierrc.mjs`, `prettier.config.mjs`, `.prettierrc.mts`, or `prettier.config.mts` file that exports an object using `export default`.
- A `.prettierrc.cjs`, `prettier.config.cjs`, `.prettierrc.cts`, or `prettier.config.cts` file that exports an object using `module.exports`.
- A `.prettierrc.toml` file.

### .prettierrc

```text
semi: false
singleQuote: true
printWidth: 80
trailingComma: 'none'
arrowParens: 'avoid'
```

### .prettierrc.json

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": false,
  "arrowParens": "avoid",
  "parser": "typescript"
}
```

## Ignoring Files: .prettierignore

```text
pnpm-lock.yaml

# prettier doesn't respect newlines between chained methods
# https://github.com/prettier/prettier/issues/7884
**/*.spec.js
**/*.spec.ts
**/dist
# https://github.com/prettier/prettier/issues/5246
**/*.html


# Lock files
package-lock.json
pnpm-lock.yaml
yarn.lock
```

## Integrating with Linters

### [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

作用是：**关闭 ESLint 中与 Prettier 冲突或重复的格式化规则。**

例如 ESLint 配置中开启了：

```json
{
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
}
```

而 Prettier 的配置又要求另一套格式，两边就可能互相“打架”：

```
Prettier 格式化 → ESLint 报错
ESLint 修复 → Prettier 又改回去
```

`eslint-config-prettier` 会关闭这类 ESLint 格式规则，让职责变成：

```
ESLint   → 检查代码质量和潜在错误
Prettier → 负责代码格式
```

它**不会运行 Prettier，也不会格式化代码**，只是关闭冲突规则。

.eslintrc

```json
{
  "extends": [
    "eslint:recommended",
    "prettier"
  ]
}
```

之所以放最后，是为了覆盖前面配置中可能存在的格式化规则。

###  [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

作用是：**把 Prettier 当成一条 ESLint 规则来运行。**

它提供了：

```
prettier/prettier
```

规则。代码不符合 Prettier 格式时，会以 ESLint 错误的形式显示：

```
error  Replace `··` with `····`  prettier/prettier
```

然后可以统一执行：

```bash
eslint . --fix
```

同时修复 ESLint 问题和 Prettier 格式问题。

示例：

```js
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
```



```
eslint-config-prettier
        ↓
关闭冲突规则

eslint-plugin-prettier
        ↓
把 Prettier 格式问题报告为 ESLint 错误
```



