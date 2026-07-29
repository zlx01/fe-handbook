# [yarn](https://github.com/yarnpkg)

* yarn classic: https://classic.yarnpkg.com/en/docs
* yarn berry: https://yarnpkg.com/

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

