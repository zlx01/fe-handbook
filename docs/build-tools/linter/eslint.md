# [ESLint](https://github.com/eslint/eslint)

* Code Linter

## Editor Integration

* VSCode: https://github.com/Microsoft/vscode-eslint
* WebStorm: https://www.jetbrains.com/help/webstorm/eslint.html

## Configuration File (v8)

* **JavaScript** - use `.eslintrc.js` and export an object containing your configuration.
* **JavaScript (ESM)** - use `.eslintrc.cjs` when running ESLint in JavaScript packages that specify `"type":"module"` in their `package.json`. Note that ESLint does not support ESM configuration at this time.
* **YAML** - use `.eslintrc.yaml` or `.eslintrc.yml` to define the configuration structure.
* **JSON** - use `.eslintrc.json` to define the configuration structure. ESLint’s JSON files also allow JavaScript-style comments.
* **package.json** - create an `eslintConfig` property in your `package.json` file and define your configuration there.

新版本的配置文件只支持js和ts，参考文档

### .eslintrc (旧版)

## Ignoring Files: .eslintignore (旧版)

## import sort

eslint-plugin-simple-import-sort

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