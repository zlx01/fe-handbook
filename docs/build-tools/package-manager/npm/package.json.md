# package.json

## bin

`bin/index.js`

```js
#!/usr/bin/env node
// 注意第一行一定要指明解释器
console.log("人生若只如初见，何事秋风悲画扇。");
```

`package.json`

```json
  "bin": {
    "crush": "bin/index.js"
  },
```

项目安装依赖后，`node_modules/.bin` 下可以看到对应的命令：

![image-20221029130105778](./assets/image-20221029130105778.png)

命令行执行一下：

```bash
npx crush
```

![image-20221029130206480](./assets/image-20221029130206480.png)

如果是全局安装，则会将命令注册到环境变量

![image-20221029125605181](./assets/image-20221029125605181.png)

![image-20221029130743060](./assets/image-20221029130743060.png)
