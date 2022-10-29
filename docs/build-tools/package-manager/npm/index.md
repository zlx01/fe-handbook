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
npm install -g npm
# 查看npm版本
npm version
```

## 常用命令

```bash
npm init

npm install [package]

npm uninstall [package]

# 查看包版本
npm view [package] versions

# 查看安装过哪些包(插件)
npm list --dept 0		# 本地
npm list -g --dept 0	# 全局
```

> **-g -S -D**
>
> * `-g`：全局安装。 将会安装在C：\ Users \ Administrator \ AppData \ Roaming \ npm，**并且写入系统环境变量**；非全局安装：将会安装在当前定位目录；全局安装可以通过命令行任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，需通过指定路径或`npx`调用;
> * `-S`：即`npm install module_name --save`,写入`package.json`的`dependencies` ,`dependencies` 是需要发布到生产环境的，比如jq，vue全家桶，ele-ui等ui框架这些项目运行时必须使用到的插件就需要放到`dependencies`
> * `-D`：即`npm install module_name --save-dev`,写入`package.json`的`devDependencies` ,`devDependencies` 里面的插件只用于开发环境，不用于生产环境。比如一些babel编译功能的插件、webpack打包插件就是开发时候的需要，真正程序打包跑起来并不需要的一些插件。


> **--save  --save-dev**
> **在 npm 5 之前的版本**：使用 npm install 默认选项安装包时，仅仅会把包下载到 node_modules/ 中，并不会同时修改 package.json。而使用 --save 选项就可以在安装包的同时，修改 package.json 文件。
> **在 npm 5 之后的版本**：npm install 安装包时，默认便会修改 package.json 文件，所以 --save 选项已经不再需要了。


## 国内镜像（旧）
* https://registry.npm.taobao.org
* 淘宝做的镜像库，只负责从源库定期复制该仓库（只读，不支持publish）

### 使用方式一：临时指定
```bash
npm install [package] --registry=https://registry.npm.taobao.org
```
### 使用方式二：全局指定
```bash
# 设置镜像仓库
npm config set registry https://registry.npm.taobao.org
npm config get registry
```

当然也直接修改用户目录下的 `.npmrc`  文件

```text
registry=https://registry.npmmirror.com
```

### 使用方式三：安装cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 测试是否成功安装
cnpm -v
# 使用cnpm代替npm来安装包
cnpm install [package]
```

## 国内镜像（新）

* https://registry.npmmirror.com
* 旧的淘宝镜像库即将停止解析，详见[官网说明](https://npmmirror.com/)

## Semantic Versioning 语义化版本

* [semver](https://semver.org/)
* 参考[博文](https://segmentfault.com/a/1190000039684460)
* MAJOR MINOR PATCH
> 指定版本：比如 1.2.2 ，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
> 波浪号（tilde）+指定版本：比如 ~1.2.2 ，表示安装 1.2.x 的最新版本（不低于1.2.2），但是不安装 1.3.x，也就是说安装时不改变大版本号和次要版本号。
> 插入号（caret）+指定版本：比如 ˆ1.2.2，表示安装 1.x.x 的最新版本（不低于 1.2.2），但是不安装 2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
> latest：安装最新版本。
> `npm install package`，版本是插入号形式。这样每次重新安装依赖包 npm install 时”次要版本“和“小版本”是会拉取最新的。

## 发布包到仓库

1. 访问`https://www.npmjs.com/`，注册激活账号

2. 在项目目录下用`npm init`命令创建模块，自动生成`package.json`文件，描述信息

3. 登录npm，`npm adduser` or `npm login`

   ```bash
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

## 版本锁定

* package-lock.json






