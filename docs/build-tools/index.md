# Build Toolchain

## 工具链

一组 JavaScript 构建工具链通常由这些组成：

* 一个包管理器，比如 Yarn 或 npm
* 一个打包器，比如 webpack 或 Parcel
* 一个编译器，比如 Babel

## 前端构建工具的能力

```text
前端构建工具的能力
├── 1. 模块解析与依赖管理
│   ├── 解析 import、动态 import、CommonJS 等
│   ├── 解析文件路径、别名、包入口
│   └── 构建模块依赖图
│
├── 2. 源码编译与资源转换
│   ├── TypeScript、JSX 转译
│   ├── Vue SFC、Angular 模板等框架编译集成
│   ├── Sass、Less 等样式预处理
│   └── JSON、文本、图片、字体等资源处理
│
├── 3. 目标环境兼容
│   ├── JavaScript 语法降级
│   ├── Polyfill 集成，补充部分运行时 API
│   └── CSS 语法转换与浏览器前缀处理
│
├── 4. 依赖打包与产物组织
│   ├── 模块合并与输出
│   ├── 多入口构建
│   ├── 代码分割与公共模块提取
│   ├── CSS 提取
│   └── 文件命名、内容哈希、资源路径与清单
│
├── 5. 产物优化
│   ├── Tree Shaking
│   ├── JS、CSS、HTML 压缩
│   └── 图片、SVG 等静态资源优化
│
├── 6. 开发与调试
│   ├── 开发服务器
│   ├── 文件监听与自动刷新
│   ├── 模块热更新（HMR）
│   ├── Source Map
│   └── 接口代理与错误提示
│
└── 7. 配置与扩展
    ├── 插件、Loader、编译钩子
    ├── 环境变量与构建模式
    └── 自定义构建流程
```

## 前端工程能力

```text
前端工程能力
├── 1. 代码质量保障
│   ├── 代码质量检查（ESLint）
│   ├── 代码格式化（Prettier）
│   ├── 样式规则检查（Stylelint）
│   ├── 类型检查（TypeScript、vue-tsc）
│   ├── 依赖与架构约束
│   │   ├── 循环依赖检查
│   │   └── 模块引用边界检查
│   └── 自动化测试
│       ├── 单元测试
│       ├── 集成测试
│       └── 端到端测试
│
├── 2. 构建效率优化
│   ├── 构建缓存
│   │   ├── 本地缓存
│   │   └── 远程缓存
│   ├── 增量构建
│   ├── 并行处理
│   └── 按需构建与任务调度
│
├── 3. 分析与诊断
│   ├── 产物体积分析
│   ├── 模块依赖分析
│   ├── 构建耗时分析
│   └── 产物质量检查
│       ├── 体积预算检查
│       ├── 浏览器兼容性检查
│       └── 产物内容与资源引用检查
│
├── 4. 协作与流程规范
│   ├── Git Hooks
│   ├── 暂存文件检查（lint-staged 等）
│   ├── 提交信息校验（commitlint）
│   ├── 包管理器与运行环境约束
│   └── Monorepo 管理
│       ├── 工作区与内部依赖管理
│       ├── 跨包任务编排
│       └── 版本管理与变更记录
│
├── 5. 安全与依赖治理
│   ├── 依赖漏洞扫描
│   ├── 依赖许可证检查
│   ├── 敏感信息扫描
│   └── 依赖更新与废弃依赖检查
│
└── 6. 持续集成与交付
    ├── CI 流水线
    │   ├── 安装依赖
    │   ├── 质量检查与测试
    │   └── 构建与产物校验
    ├── 产物管理
    │   ├── 归档与版本标记
    │   ├── 上传静态资源至 CDN / 对象存储
    │   └── 上传 Source Map 至错误监控平台
    ├── 部署与发布
    │   ├── 多环境部署
    │   ├── 预览部署
    │   └── 灰度发布与回滚
    └── 发布后验证
        ├── 页面与资源可用性检查
        └── 错误与性能监控
```


## 前端构建工具进化历程

* https://mp.weixin.qq.com/s/o8B8HAczZtIZM8V_HHwNqg


## 过时的工具

### [browserify](https://github.com/browserify/browserify)

> Browsers don't have the required method defined, but Node.js does. With Browserify you can write code that uses require in the same way that you would use it in Node.

### [Gulp](https://gulpjs.com/)

### [Grunt](https://gruntjs.com/)

### [snowpack](https://www.snowpack.dev/)
