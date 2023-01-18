# [npm](https://www.npmjs.com/)

* 官网：https://www.npmjs.com/
* 文档：https://docs.npmjs.com/
* 仓库：https://registry.npmjs.org/

## 安装
* 安装 `Node` 时会顺带安装 `npm`

```bash
# 查看node版本
node -v
# 将npm更新至最新版本
npm install npm@latest -g
# 查看npm版本
npm -v
# 查看node、npm、v8等核心库的版本
npm version

# 查看帮助
npm
npm help
```

## 常用命令

```bash
npm init
npm init -y

npm install [package]
npm install -g [package]

npm uninstall [package]
npm uninstall -g [package]

# 查看包版本
npm view [package] versions

# 安装最新版本
npm install [package]@latest

# 查看安装过哪些包(插件)
npm list --dept 0		# 本地
npm list -g --dept 0	# 全局
```

> **-g -S -D**
>
> * `-g`：全局安装。 将会安装在C：\ Users \ Administrator \ AppData \ Roaming \ npm，**并且写入系统环境变量**，因此可以通过命令行在任何地方调用它
> * `-S`：即`npm install [package] --save`,写入`package.json`的`dependencies` ,`dependencies` 生产依赖
> * `-D`：即`npm install [package] --save-dev`,写入`package.json`的`devDependencies` ,`devDependencies` 开发依赖


> **--save  --save-dev**
> **在 npm 5 之前的版本**：使用 npm install 默认选项安装包时，仅仅会把包下载到 node_modules/ 中，并不会同时修改 package.json。而使用 --save 选项就可以在安装包的同时，修改 package.json 文件。
> **在 npm 5 之后的版本**：npm install 安装包时，默认便会修改 package.json 文件，所以 --save 选项已经不再需要了。


## 国内镜像

* https://registry.npmmirror.com
* 阿里做的镜像库，只负责从[源库](https://registry.npmjs.org/)定期复制到镜像库（只读，不支持publish）
* 注意：旧的[淘宝镜像库](https://registry.npm.taobao.org)即将停止解析，详见[官网说明](https://npmmirror.com/)

### 使用方式一：临时指定（不推荐）
```bash
npm install [package] --registry=https://registry.npmmirror.com
```
### 使用方式二：全局指定（个人开发推荐）:+1:
```bash
# 设置镜像仓库
npm config set registry https://registry.npmmirror.com
npm config get registry
```
### 使用方式三：`.npmrc`

* 方式二的配置会写在用户目录下的 `.npmrc`  文件，所以也可以直接修改文件。
* 项目目录也可以新建对应的 `.npmrc`  文件（团队开发推荐）:+1:

```text
registry=https://registry.npmmirror.com
```

### 使用方式四：安装cnpm（不推荐）

cnpm 支持 npm 除了 publish 之外的所有命令

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
# 测试是否成功安装
cnpm -v
# 使用cnpm代替npm来安装包
cnpm install [package]
```


## Semantic Versioning 语义化版本 [SemVer](https://semver.org/)

* MAJOR MINOR PATCH
> 指定版本：比如 1.2.2 ，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
> 
> 波浪号（tilde）+指定版本：比如 ~1.2.2 ，表示安装 1.2.x 的最新版本（不低于1.2.2），但是不安装 1.3.x，也就是说安装时不改变大版本号和次要版本号。
> 
> 插入号（caret）+指定版本：比如 ˆ1.2.2，表示安装 1.x.x 的最新版本（不低于 1.2.2），但是不安装 2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
> 
> `npm install [package]`，第一次安装是最新版本，写到 `package.json` 中版本号是插入号形式。

### Reference

* https://segmentfault.com/a/1190000039684460

## 版本锁定

* package-lock.json

## 发布包到仓库

1. 访问`https://www.npmjs.com/`，注册激活账号

2. 在项目目录下用`npm init`命令创建模块，自动生成`package.json`文件，描述信息

3. 登录npm，`npm login`

   ```bash
   # To test that you have successfully logged i
   npm whoami
   npm login [--registry=https://registry.company-name.npme.io]
   ```

4. 发布，`npm publish`

5. 退出登录，`npm logout`

### 发布beta版本

1. 修改 `package.json` 版本号，如 `1.1.0-beta.0`
2. `npm publish --tag beta`

### unpublish

```bash
npm unpublish 包名@1.0.5
```

# CLI Commands

### npm adduser

Create a new user in the specified registry, and save the credentials to the .npmrc file.

### npm login
```bash
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

### npm init

aliases: create innit

* `npm init foo@latest` # fetches and runs the latest create-foo from the registry
* `npm init foo@1.2.3` # runs create-foo@1.2.3 specifically
* `npm create vue@3` 会安装 create-vue@3.x.x 最新的版本，并执行


### npm config

```bash
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
```


### npm cache

```bash
npm cache clean --force
```

### npm dist-tag

一般有latest、beta

```bash
npm dist-tag ls [package]
```
