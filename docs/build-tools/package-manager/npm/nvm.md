# nvm(node version managers)
## OSX or Linux

* [nvm](https://github.com/creationix/nvm)
* [n](https://github.com/tj/n)

## Windows

* [nvm-windows](https://github.com/coreybutler/nvm-windows)
* [nodist](https://github.com/marcelklehr/nodist)

## nvm-windows usages
```bash
# 查看已安装的node
nvm list
# 查看可安装的node
nvm list available
# 切换到指定node
nvm use <node-version>
```

注意：切换后全局安装的依赖可能会失效，需要重新安装


## nvm Troubleshooting on macOS

### `nvm: command not found`

> If you use bash, the previous default shell, your system may not have a .bash_profile file where the command is set up. Create one with touch ~/.bash_profile and run the install script again. Then, run source ~/.bash_profile to pick up the nvm command.

```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### 切换版本只在当前终端会话生效，无法全局生效

```shell
nvm alias default <version>
```
