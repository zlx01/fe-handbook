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

## husky lint-staged prettier eslint

* vue: https://github.com/zlx01/vue-husky-test
* react: https://github.com/zlx01/react-husky-test

package.json
```json
{
  "scripts": {
    "prepare": "husky install",
    "format": "prettier --write .",
    "lint": "eslint ."
  },
  "lint-staged": {
    "*.{js,ts,vue,json}": [
      "prettier --write"
    ],
    "*.{js,jsx}": [
      "eslint --fix"
    ]
  }
}
```
相关的库

* eslint
* @eslint/compat
* @eslint/js
* eslint-plugin-vue
* eslint-plugin-react
* eslint-plugin-react-hooks
* typescript-eslint


## [Stylelint](https://stylelint.io/)

## git-hooks

https://pre-commit.com/

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

from rspack

```.gitignore
# Local
.DS_Store
*.local
*.log*

# Dist
node_modules
dist/

# IDE
.vscode/*
!.vscode/extensions.json
.idea
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


