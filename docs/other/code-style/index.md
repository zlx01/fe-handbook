# Code Style

## [Flow](https://flow.org/)

了解即可

## [TypeScript](https://www.typescriptlang.org/)

:+1:

## [JSDoc](https://jsdoc.app/)

了解即可

## [TSDoc](https://tsdoc.org/)

:+1:

## [EditorConfig](https://editorconfig.org/)

编辑器通用配置

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

### Configuration File

* A `"prettier"` key in your `package.json` file.
* A `.prettierrc` file written in JSON or YAML.
* A `.prettierrc.json`, `.prettierrc.yml`, `.prettierrc.yaml`, or `.prettierrc.json5` file.
* A `.prettierrc.js`, `.prettierrc.cjs`, `prettier.config.js`, or `prettier.config.cjs` file that exports an object using `module.exports`.
* A `.prettierrc.toml` file.

```bash
prettier --write '**/*.ts'
prettier --check '**/*.ts'
```

### .prettierrc

```text
semi: false
singleQuote: true
printWidth: 80
trailingComma: 'none'
arrowParens: 'avoid'
```

* vscode 配置：https://github.com/prettier/prettier-vscode
* webstorm 配置：https://prettier.io/docs/en/webstorm.html

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

### .prettierignore

## [ESLint](https://eslint.org/)

专注代码质量问题

### Configuration File

* **JavaScript** - use `.eslintrc.js` and export an object containing your configuration.
* **JavaScript (ESM)** - use `.eslintrc.cjs` when running ESLint in JavaScript packages that specify `"type":"module"` in their `package.json`. Note that ESLint does not support ESM configuration at this time.
* **YAML** - use `.eslintrc.yaml` or `.eslintrc.yml` to define the configuration structure.
* **JSON** - use `.eslintrc.json` to define the configuration structure. ESLint’s JSON files also allow JavaScript-style comments.
* **package.json** - create an `eslintConfig` property in your `package.json` file and define your configuration there.

### .eslintrc.js

### .eslintignore

## ESLint + Prettier

参考 [文章](https://zhuanlan.zhihu.com/p/80574300)  [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

```js
module.exports = {
  "extends": ["plugin:prettier/recommended"],
  "rules": {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0
  }
}
```


## husky lint-staged prettier eslint

* vue: https://github.com/zlx01/vue-husky-test
* react: https://github.com/zlx01/react-husky-test

## [TypeScript ESLint](https://typescript-eslint.io/)

## [Stylelint](https://stylelint.io/)

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

from vue project

```text
.DS_Store
node_modules
/dist


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

from react project

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
simple configuration

```text
.DS_Store
*.log
.vscode
.idea
dist
node_modules
```

