# ES各版本关键特性

## ES2020

### Dynamic Import

```js
import(modulePath)
    .then(module => {
        // module 是导入模块的命名空间对象
    })
    .catch(err => {
        // 加载失败处理
    })
```

### import.meta

`import.meta` 表示“当前这个 ES 模块自身的一些运行时信息”。

#### 1. 最经典：`import.meta.url`

浏览器中：

```
console.log(import.meta.url);
```

假设当前模块是：

```
https://example.com/js/foo.js
```

那么：

```
import.meta.url
// "https://example.com/js/foo.js"
```

它有点类似 CommonJS 中的：

```
__filename
```

但注意：`import.meta.url` 是 **URL 字符串**，不一定是文件系统路径。

------

#### 2. 获取当前模块旁边的资源

这是前端构建工具里非常常见的用法：

```
const imageUrl = new URL('./logo.png', import.meta.url);

console.log(imageUrl.href);
```

意思是：

> 以当前 JS 模块所在位置为基准，找到 `./logo.png`。

例如：

```
/src/
  index.js
  logo.png
```

`index.js`：

```
const url = new URL('./logo.png', import.meta.url);
```

比依赖网页地址：

```
new URL('./logo.png', location.href)
```

更加可靠，因为它是**相对于当前模块**，而不是相对于当前页面。

------

#### 3. Web Worker

你之前看到的 Rspack / Webpack 中非常典型：

```
const worker = new Worker(
  new URL('./worker.js', import.meta.url)
);
```

构建工具可以静态分析：

```
new URL('./worker.js', import.meta.url)
```

然后知道：

> `worker.js` 是当前模块依赖的一个资源，需要单独打包。

例如：

```
// src/index.js

const worker = new Worker(
  new URL('./worker.js', import.meta.url)
);
```

Webpack / Rspack / Vite 通常会把：

```
worker.js
```

打成单独 chunk。

------

#### 4. Node.js 中替代 `__dirname`

ESM 中默认没有：

```
__filename
__dirname
```

所以以前 Node.js 经常这么写：

```
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
```

假设：

```
/project/src/index.js
```

那么：

```
import.meta.url
// file:///project/src/index.js
```

经过：

```
fileURLToPath(import.meta.url)
```

得到：

```
/project/src/index.js
```

现在较新的 Node.js 还直接支持：

```
import.meta.filename
import.meta.dirname
```

但这两个**不是 ES2020 标准本身**，属于 Node.js 提供的扩展能力。

------

#### 5. `import.meta` 不是普通全局变量

它只能出现在 ES Module 里。

例如：

```
console.log(import.meta.url);
```

如果 JS 是：

```
<script type="module" src="./index.js"></script>
```

就可以。

如果是普通脚本：

```
<script src="./index.js"></script>
```

就不行。

同样，Node.js 中通常需要：

```
{
  "type": "module"
}
```

或者使用：

```
index.mjs
```

------

#### 6. 为什么设计成 `import.meta.xxx`？

因为有些信息是：

> 和“当前模块”绑定的，而不是和整个 JS 运行环境绑定的。

比如：

```
import.meta.url
```

每个模块的值都不同：

```
a.js → file:///project/a.js
b.js → file:///project/b.js
```

因此它不像：

```
window
globalThis
process
```

这种全局对象。

可以把它理解成：

```
import.meta
   │
   └── 当前模块的 metadata
           │
           ├── url
           └── 运行环境自行扩展的其他属性
```

#### 和 CommonJS 对比

| ESM                             | CommonJS                 |
| ------------------------------- | ------------------------ |
| `import.meta.url`               | `__filename`             |
| `new URL('.', import.meta.url)` | `__dirname`              |
| `import()`                      | `require()`              |
| `import/export`                 | `require/module.exports` |

所以平时前端开发里你看到最多的基本就是这两种：

```
new URL('./asset.png', import.meta.url)
```

以及：

```
new Worker(
  new URL('./worker.js', import.meta.url)
)
```

尤其第二种，**`import.meta.url` 不只是运行时拿 URL，它还形成了一种构建工具能够静态识别的资源引用模式**。这也是 Webpack / Rspack 文档里它经常出现的原因。

## ES2022

### Top-level await

```js
async function test() {
    return await Promise.resolve('Hello, World!');
}

await test();
```

