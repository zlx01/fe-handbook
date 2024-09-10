# tsconfig.json

## target

* "target"="esnext" 用现代 JavaScript 的 esm 版本
* "target"="es5" 兼容低版本 JavaScript 的 umd 版本

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "ES2020"],
    "module": "ESNext",
    "jsx": "preserve",
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "useDefineForClassFields": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}
```

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "ES2020"],
    "module": "ESNext",
    "jsx": "preserve",
    // 启用 JSX 类型推导
    "jsxImportSource": "vue",
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "useDefineForClassFields": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}
```
