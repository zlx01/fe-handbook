# Other

## monorepo管理方式

* [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces)
* [pnpm workspaces](https://pnpm.io/workspaces)
* [Nx](https://nx.dev/)
* [lerna](https://lerna.js.org/)
* [Turborepo](https://turborepo.dev/)


## 包管理工具的演进

* https://mp.weixin.qq.com/s/beP1bxgbTT1Z91KS3svDvw
* https://mp.weixin.qq.com/s/9JCs3rCmVuGT3FvKxXMJwg
* https://segmentfault.com/a/1190000039684460

## yarn与npm相比的主要优化

>*  **并行安装**：无论 npm 还是 yarn 在执行包的安装时，都会执行一系列任务。npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 yarn 是同步执行所有任务，提高了性能。
>* **离线模式**：如果之前已经安装过一个软件包，用 yarn 再次安装时之间从缓存中获取，就不用像 npm 那样再从网络下载了。
>* 安装版本统一：为了防止拉取到不同的版本，yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。
>* 更好的语义化： yarn 改变了一些 npm 命令的名称，比如 yarn add/remove，比 npm 原本的 install/uninstall 要更清晰。
