# nvm(node version manager)
## MacOS or Linux

* [nvm](https://github.com/creationix/nvm)  :+1:

## Windows

* [nvm-windows](https://github.com/coreybutler/nvm-windows)  :+1:

## Cross-platform

* [n](https://github.com/tj/n)
* [fnm](https://github.com/Schniz/fnm)


## nvm-windows

> Ironically written in Go.

> :rotating_light: **Remember when running `nvm install` or `nvm use`, Windows usually requires administrative rights (to create symlinks).**

```bash
# 查看已安装的node
nvm ls
# 查看可安装的node
nvm ls available
# 安装最新的 LTS 版本
nvm install lts
# 安装最新的版本
nvm install latest
# 安装指定版本
nvm install 20.16.0
# 切换到指定node
nvm use <node-version>
# 移除指定版本
nvm uninstall 20.16.0
# 开启管理
nvm on
# 关闭管理
nvm off
```

注意：切换后全局安装的依赖可能会失效，需要重新安装

## nvm

written in shell

```bash
# 查看已安装的node
nvm ls
# 查看可安装的node
nvm ls-remote
# 安装最新的 LTS 版本
nvm install --lts
# 安装最新的版本
nvm install node
# 安装大版本
nvm install 20
# 使用大版本
nvm use 20
```

也可以在Windows的WSL和GitBash中使用

### Troubleshooting on macOS

#### `nvm: command not found`

> If you use bash, the previous default shell, your system may not have a .bash_profile file where the command is set up. Create one with touch ~/.bash_profile and run the install script again. Then, run source ~/.bash_profile to pick up the nvm command.

```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

#### 切换版本只在当前终端会话生效，无法全局生效

```shell
nvm alias default <version>
```
