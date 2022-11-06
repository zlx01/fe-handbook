# Vue2 项目兼容 iOS 9

```bash
yarn add babel-polyfill
```

`main.js` 第一行引入
```js
import "babel-polyfill";
```

`package.json` 增加对ios9的支持
```json
{
    "browserslist": [
        "ios_saf 9.0-9.2",
        "> 1%",
        "last 2 versions",
        "not dead"
    ]
}
```

```bash
npx browserslist "ios 9" # ios_saf 9.0-9.2
```
