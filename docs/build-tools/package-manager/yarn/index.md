# [yarn](https://yarnpkg.com/)

* yarn classic: https://classic.yarnpkg.com/en/docs

## 安装
```bash
npm install -g yarn
# 查看yarn版本
yarn -v
# 升级yarn到最新版本
yarn set version latest
```

## 常用命令
```bash
# Create a new package.
yarn init
# Install the project dependencies.
yarn
yarn install
# Add dependencies to the project.
yarn add [package]
yarn global [package]
yarn add [package] -D
yarn add [package] --dev
# Remove dependencies from the project.
yarn remove [package]
# Run a script defined in the package.json.
yarn <scriptName>
yarn run <scriptName>
```
## 版本锁定
* yarn.lock

## 与npm相比的主要优化
参考[博文](https://segmentfault.com/a/1190000039684460)

>*  **并行安装**：无论 npm 还是 yarn 在执行包的安装时，都会执行一系列任务。npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 yarn 是同步执行所有任务，提高了性能。
>* **离线模式**：如果之前已经安装过一个软件包，用 yarn 再次安装时之间从缓存中获取，就不用像 npm 那样再从网络下载了。
>* 安装版本统一：为了防止拉取到不同的版本，yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。
>* 更好的语义化： yarn 改变了一些 npm 命令的名称，比如 yarn add/remove，比 npm 原本的 install/uninstall 要更清晰。


yarn dlx
