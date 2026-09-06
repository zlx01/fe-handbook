# APP

## Native

### [**Android**](https://www.android.com/)

### **iOS**

## Multiplatform

### [**React Native**](https://reactnative.dev/)

### [**Flutter**](https://flutter.dev/)


## **Hybrid App**

* 原生+H5

## 桌面跨平台框架对比

以下对比聚焦 Windows、macOS 和 Linux 桌面应用，根据官方文档于 **2026-09-05** 核对。体积和性能描述是基于架构的定性参考，不是同一环境下的基准测试结果。

| 特性维度 | Tauri 2 | Electron | Flutter（桌面） |
| --- | --- | --- | --- |
| 打包体积 | 通常较小，默认复用系统 WebView；若随包分发 WebView2 运行时，安装包会明显增大 | 通常较大，需要随应用分发 Chromium 和 Node.js | 需要携带 Flutter 引擎、编译后的 Dart 代码及资源，体积取决于平台和依赖 |
| 启动速度 | 受 WebView 初始化、前端资源和 Rust 初始化逻辑影响 | 受 Chromium 多进程启动、模块加载和页面初始化影响，可通过延迟加载等方式优化 | Release 构建使用 Dart AOT 编译，仍有引擎初始化与首帧开销；不宜直接判定为“中等” |
| 内存占用 | Rust 核心与 WebView 进程均占用内存；包体小不等于运行内存一定低 | Chromium 多进程和 Node.js 带来基础开销，实际占用与窗口数量和应用逻辑有关 | 包含引擎、Dart 运行时及图形资源开销，需结合界面复杂度实测 |
| 开发语言 | Web 前端 + Rust；常用能力可通过插件的 JS/TS API 调用，自定义底层逻辑通常需要 Rust | 主要使用 JavaScript / TypeScript、HTML 和 CSS，便于复用前端经验；原生扩展可能涉及 C/C++ | 主要使用 Dart 和 Flutter Widget；平台集成可能涉及 C++、Swift 等语言 |
| 渲染方式 | 系统 WebView：Windows 使用 WebView2，macOS 使用 WKWebView，Linux 使用 WebKitGTK | 随应用分发的 Chromium 渲染 Web UI，浏览器版本由应用控制 | Flutter 引擎自绘 UI；自 Flutter 3.47 起，Windows、macOS 和 Linux 默认启用 Impeller，不再宜统一写作“Skia 引擎” |
| 生态成熟度 | 已有官方插件和社区工具，具体能力应检查 Tauri 2 兼容性与平台覆盖 | 桌面应用生态成熟，可复用 npm、Node.js 和 Web 工具链 | Windows、macOS 和 Linux 均已稳定支持；桌面插件覆盖仍需逐项确认 |
| 插件支持 | 官方插件覆盖文件系统、对话框、更新等常用能力；自定义插件通常涉及 Rust，需配置权限 | 可复用大量 Node.js / Web 库；原生模块需关注 Electron ABI、重编译及平台适配 | 可使用支持目标桌面平台的 pub.dev 插件；不能假定移动端插件也支持桌面 |
| 原生交互能力 | 通过命令、插件及 Rust 调用系统 API，由核心进程处理系统能力 | 通过 Electron API、主进程中的 Node.js 和原生模块访问系统；渲染进程通过 preload / IPC 暴露受控接口 | 通过 Platform Channels 调用平台代码，也可通过 Dart FFI 调用 C ABI 接口 |
| 多端一致性 | 可共享 Web UI，但不同 WebView 内核与版本可能产生 CSS 和 Web API 差异 | 同一应用版本使用统一 Chromium，Web 渲染一致性较好；窗口、菜单等仍有平台差异 | 自绘 UI 有利于跨端视觉一致，可与移动端共享代码；桌面布局、输入方式和系统交互仍需适配 |
