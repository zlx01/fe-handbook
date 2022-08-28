# Code Style

## [Flow](https://flow.org/)

了解即可

## [TypeScript](https://jsdoc.app/)



## [JSDoc](https://jsdoc.app/)

了解即可

## [TSDoc](https://tsdoc.org/)



## [EditorConfig](https://editorconfig.org/)

`.editorconfig`

```text
# https://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```



## [Prettier](https://prettier.io/)

专注代码格式问题

### .prettierrc

```text
semi: false
singleQuote: true
printWidth: 80
trailingComma: 'none'
arrowParens: 'avoid'
```

## [ESLint](https://eslint.org/)

专注代码质量问题

### .eslintrc.js

```js

```

## ESLint + Prettier

参考 [文章](https://zhuanlan.zhihu.com/p/80574300)  [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)



```js
// .eslintrc
{
  "extends": ["plugin:prettier/recommended"]
}
```

## [TypeScript ESLint](https://typescript-eslint.io/)



## .gitignore

```text
.DS_Store
*.log
.vscode
.idea
dist
node_modules
```

