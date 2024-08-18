# version

## [SemVer](https://semver.org/)

* Semantic Versioning 
* 语义化版本
* MAJOR.MINOR.PATCH
    > 指定版本：比如 1.2.2 ，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
    >
    > 波浪号（tilde）+指定版本：比如 ~1.2.2 ，表示安装 1.2.x 的最新版本（不低于1.2.2），但是不安装 1.3.x，也就是说安装时不改变大版本号和次要版本号。
    >
    > 插入号（caret）+指定版本：比如 ˆ1.2.2，表示安装 1.x.x 的最新版本（不低于 1.2.2），但是不安装 2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
    >
    > `npm install [package]`，第一次安装是最新版本，写到 `package.json` 中版本号是插入号形式。

### Reference

* https://segmentfault.com/a/1190000039684460
* https://semver.org/lang/zh-CN/

## 版本锁定

* package-lock.json
* yarn.lock
* pnpm-lock.yaml
