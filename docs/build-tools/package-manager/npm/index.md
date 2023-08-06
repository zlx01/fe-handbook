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
