# module相关

## type
规定你的 .js 文件使用哪个模块系统，默认为 CommonJS

```json
{
    "type": "module"
}
```

## build output

* 输出 esm、cjs 和 umd 格式产物 
* 压缩代码 
* sourcemap 
* ts声明文件

```json
{
    "main": "dist/index.cjs.js",
    "module": "dist/index.esm.js",
    "unpkg": "./dist/index.umd.js",
    "jsdelivr": "./dist/index.umd.js",
    "browser": "dist/index.umd.js",
    "types": "dist/index.d.ts",
    "files": [
        "dist"
    ]
}
```

## files
列出要发布的 files。可以在 `.npmignore` 指定忽略的文件，如果没有 `.npmignore` 文件，会使用 `.gitignore` 文件

## main

定义 CommonJS 入口

## module

定义 ESM 入口

## browser

> If your module is meant to be used client-side the browser field should be used instead of the main field. This is helpful to hint users that it might rely on primitives that aren't available in Node.js modules. (e.g. window)

## types

定义 TypeScript 类型

## exports

```json
{
  "exports": {
    ".": {
      "types": "index.d.ts",
      "module": "index.js",
      "import": "index.js",
      "require": "index.cjs",
      "default": "index.js"
    },
    "./package.json": "./package.json"
  }
}
```

* "." 表示你的库的默认入口
* 解析过程是「从上往下」的，并在找到匹配的字段后立即停止；所以入口的顺序是非常重要的
* types 字段应始终放在第一位，帮助 TypeScript 查找类型文件 
* module 是一个“非官方”字段，它被 Webpack 和 Rollup 等打包工具所支持。它应该被放在 import 和 require 之前，并且指向 esm 格式的产出 -- 如果你的源代码是纯 esm 的，它也可以指向你的源代码。正如在格式部分中指出的那样，它旨在帮助打包工具只包含你的库的一个副本，无论它是通过 import 还是 require 方式引入的。 
* import 用于当有人通过 import 使用你的库时 
* require 用于当有人通过 require 使用你的库时 
* default 字段用于兜底，在没有任何条件匹配时使用。虽然目前可能并不会匹配到它，但为了面对“未知的未来场景”，使用它是好的


## 给 CDN 使用的附加字段

```json
{
  "unpkg": "./dist/index.umd.js",
  "jsdelivr": "./dist/index.umd.js"
}
```

```json
{
  "name": "foo",                      // your package name
  "type": "module",
  "source": "src/foo.js",             // your source code
  "exports": {
    "require": "./dist/foo.cjs",      // used for require() in Node 12+
    "default": "./dist/foo.modern.js" // where to generate the modern bundle (see below)
    
  },
  "main": "./dist/foo.cjs",           // where to generate the CommonJS bundle
  "module": "./dist/foo.module.js",   // where to generate the ESM bundle
  "unpkg": "./dist/foo.umd.js",       // where to generate the UMD bundle (also aliased as "umd:main")
  
}
```

```json
{
	"name": "foo",
	"exports": {
		".": "./dist/foo.modern.mjs", // import "foo" (the default)
		"./lite": "./dist/lite.modern.mjs", // import "foo/lite"
		"./full": "./dist/full.modern.mjs" // import "foo/full"
	},
}
```

```json
{
  "source": "src/index.js",             // input
  "main": "dist/foo.js",                // CommonJS output bundle
  "umd:main": "dist/foo.umd.js",        // UMD output bundle
  "module": "dist/foo.mjs",             // ES Modules output bundle
  "exports": {
    "types": "./dist/foo.d.ts",         // TypeScript typings for NodeNext modules
    "require": "./dist/foo.js",         // CommonJS output bundle
    "default": "./dist/foo.modern.mjs", // Modern ES Modules output bundle
  },
  "types": "dist/foo.d.ts"              // TypeScript typings
}
```

```json
{
  "type": "module",
  "module": "dist/foo.js",  // ES Module bundle
  "main": "dist/foo.cjs",   // CommonJS bundle
}
```

* `type: module`  notes that this package is an ES module
* `main` points to the CommonJS bundle
* `module` points to the ES module bundle
* `exports.require` points to the CommonJS bundle
* `exports.default` points to the ES module bundle
* `unpkg` points to the UMD bundle
* `jsdelivr` points to the UMD bundle
* `umd:main` points to the UMD bundle
* `files: ["dist"]` tells npm to only publish the dist folder
* `types` points to the TypeScript typings


```json
{
  "type": "module",
  "source": "./index.js",
  "exports": {
    "require": "./dist/index.cjs",
    "default": "./dist/index.modern.js"
  },
  "main": "./dist/index.cjs",
  "module": "./dist/index.module.js",
  "umd:main": "./dist/ids.umd.js",
  "files": [
    "dist",
    "index.d.ts"
  ],
  "types": "./index.d.ts"
}
```
