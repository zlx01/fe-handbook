# npm publish

## 发布包到仓库

1. 访问 https://www.npmjs.com/ 注册激活账号
2. 打包文件
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

## unpublish

```bash
npm unpublish 包名@1.0.5
```

## .npmignore

打包上传时，忽略文件
