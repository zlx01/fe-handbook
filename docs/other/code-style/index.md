# Code Style

## [Flow](https://flow.org/)

了解即可

## [TypeScript](https://jsdoc.app/)



## [JSDoc](https://jsdoc.app/)

了解即可

## [TSDoc](https://tsdoc.org/)



## [EditorConfig](https://editorconfig.org/)

### .editorconfig

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

### .eslintignore

```text
dist
packages
```


## ESLint + Prettier

参考 [文章](https://zhuanlan.zhihu.com/p/80574300)  [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)



```js
// .eslintrc
{
  "extends": ["plugin:prettier/recommended"],
  "rules": {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0
  }
}
```

## [TypeScript ESLint](https://typescript-eslint.io/)

## git-hooks

commit msg from vue

```bash
#!/usr/bin/env bash

# Validate commit log
commit_regex='^Merge.+|(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert|types)(\(.+\))?: .{1,50}'

if ! grep -iqE "$commit_regex" "$1"; then
    echo
    echo "  Error: proper commit message format is required for automated changelog generation."
    echo
    echo "  - Use \`npm run commit\` to interactively generate a commit message."
    echo "  - See .github/COMMIT_CONVENTION.md for more details."
    echo
    exit 1
fi
```

pre-commit from vue

```bash
#!/usr/bin/env bash

files_to_lint=$(git diff --cached --name-only --diff-filter=ACM | grep '\.js$')

if [ -n "$files_to_lint" ]; then
  NODE_ENV=production eslint --quiet $files_to_lint
fi
```

## .gitignore

```text
.DS_Store
*.log
.vscode
.idea
dist
node_modules
```

