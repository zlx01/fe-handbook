# [Electron](https://www.electronjs.org/)

**Chromium and Node.js**

**Cross Platform**

macOS, Windows, and Linux

**Automatic software updates**

**Application installers**

Apple Disk Image (.dmg) on macOS, Windows Installer (.msi) on Windows, or RPM Package Manager (.rpm) on Linux.

**App store distribution**

[Mac App Store](https://www.apple.com/ca/osx/apps/app-store/index.html) (macOS), the [Microsoft Store](https://www.microsoft.com/en-ca/store/apps/windows) (Windows), or the [Snap Store](https://snapcraft.io/store) (Linux).

VS Code

postman

notion

discord

因为 Electron 将 Node.js 嵌入到其二进制文件中，你应用运行时的 Node.js 版本与你系统中运行的 Node.js 版本无关。

* [`app`](https://www.electronjs.org/zh/docs/latest/api/app) 模块，它控制应用程序的事件生命周期。
* [`BrowserWindow`](https://www.electronjs.org/zh/docs/latest/api/browser-window) 模块，它创建和管理应用程序 窗口。

主进程和渲染器的进程不是同一个，所以无法在主进程访问到document，因而也无法修改dom

