# [Verdaccio](https://verdaccio.org/)

A private npm registry.

## QuickStart

```bash
# install
npm install -g verdaccio
yarn global add verdaccio
pnpm install -g verdaccio

# run
verdaccio

# 通过pm2启动守护进程，可以在后台运行
npm install -g pm2
pm2 start verdaccio
pm2 list
```

![image-20221029110116146](./assets/image-20221029110116146.png)

![image-20221029110155481](./assets/image-20221029110155481.png)

## File Location


```bash
~\AppData\Roaming\verdaccio\storage
```

![image-20221029112202611](./assets/image-20221029112202611.png)



```bash
~\AppData\Roaming\verdaccio\config.yaml
```


## Docker image

```bash
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```



## Custom Registry

### User

```bash
# 会在用户目录生成 `.npmrc` 文件
npm set registry http://localhost:4873
# 会在用户目录生成 `.yarnrc` 文件
yarn config set registry http://localhost:4873
```

`npm` `yarn`  `pnpm` 都能识别 `.npmrc`

#### .npmrc

```.npmrc
registry=http://localhost:4873/
```

####  .yarnrc

```.yarnrc
registry "http://localhost:4873"
```

### Project

```bash
# 会在项目根目录生成 `.npmrc` 文件
npm set registry http://localhost:4873/ --location project
```
### CLI

```bash
npm install lodash --registry http://localhost:4873
yarn add dayjs --registry http://localhost:4873
```

## Login & Publish

代码：https://github.com/zlx01/ok-verdaccio

```bash
# 1. Login
npm adduser --registry http://localhost:4873/

npm whoami

# 2. Publish
npm publish --registry http://localhost:4873/
```

### adduser

![image-20221029114819367](./assets/image-20221029114819367.png)


### prevent your package from being published in other registries

在 `package.json` 配置

```json
{
  "publishConfig": {
    "registry": "http://localhost:4873"
  }
}
```

直接publish

```bash
npm publish
```

![image-20221029121710904](./assets/image-20221029121710904.png)


两个问题：

1. README不是跟随版本的，展示最新的。
2. README中的图片引用失败。


## unpublish

```bash
npm unpublish ok-verdaccio@1.0.5
```
