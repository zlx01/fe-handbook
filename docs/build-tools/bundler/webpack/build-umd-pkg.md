# 构建umd格式的包

src/ref.json
```json
[
  {
    "num": 1,
    "word": "One"
  },
  {
    "num": 2,
    "word": "Two"
  },
  {
    "num": 3,
    "word": "Three"
  },
  {
    "num": 4,
    "word": "Four"
  },
  {
    "num": 5,
    "word": "Five"
  },
  {
    "num": 0,
    "word": "Zero"
  }
]
```

src/index.js
```js
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}
```

webpack.config.js
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    globalObject: 'this',
    library: {
      name: 'webpackNumbers',
      type: 'umd',
    },
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
```

dist/webpack-numbers.js
```js
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.webpackNumbers=r(require("lodash")):e.webpackNumbers=r(e._)}(this,(e=>(()=>{"use strict";var r={607:r=>{r.exports=e}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var u=o[e]={exports:{}};return r[e](u,u.exports,t),u.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{numToWord:()=>u,wordToNum:()=>d});var e=t(607),r=t.n(e);const o=JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]');function u(e){return r().reduce(o,((r,o)=>o.num===e?o.word:r),"")}function d(e){return r().reduce(o,((r,o)=>o.word===e&&e.toLowerCase()?o.num:r),-1)}})(),n})()));
```

## use in commonjs

```json
{
  "dependencies": {
    "@lancekee/webpack-numbers": "^1.0.0-beta2",
    "lodash": "^4.17.21"
  }
}
```

```js
const webpackNumbers = require('@lancekee/webpack-numbers');

const num = webpackNumbers.wordToNum('Two');
console.log('num', num);
```

## use in html

```html
<script src="https://unpkg.com/lodash@4.17.21/lodash.js"></script>
<script src="https://unpkg.com/@lancekee/webpack-numbers@1.0.0-beta1/dist/webpack-numbers.js"></script>
<script>
  const num = window.webpackNumbers.wordToNum('Five');
  alert(num)
</script>
```
