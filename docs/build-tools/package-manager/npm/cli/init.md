# npm init

https://docs.npmjs.com/cli/v10/commands/npm-init

init 的别名是 create



* `npm init foo` -> `npm exec create-foo`
* `npm init @usr/foo` -> `npm exec @usr/create-foo`
* `npm init @usr` -> `npm exec @usr/create`
* `npm init @usr@2.0.0` -> `npm exec @usr/create@2.0.0`
* `npm init @usr/foo@2.0.0` -> `npm exec @usr/create-foo@2.0.0`



* `npm init foo@latest` # fetches and runs the latest create-foo from the registry
* `npm init foo@1.2.3` # runs create-foo@1.2.3 specifically
* `npm create vue@3` 会安装 create-vue@3.x.x 最新的版本，并执行



```bash
npm init react-app my-app
npm create react-app my-app
npx create-react-app my-app

npm init vite my-app
npm create vite my-app
npx create-vite my-app

npm create rsbuild@latest
```

