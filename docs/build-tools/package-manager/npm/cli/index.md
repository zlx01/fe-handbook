# npm cli

## npm init

* `npm init foo@latest` # fetches and runs the latest create-foo from the registry
* `npm init foo@1.2.3` # runs create-foo@1.2.3 specifically
* `npm create vue@3` 会安装 create-vue@3.x.x 最新的版本，并执行

## npm config

```bash
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
```

## npm adduser

Create a new user in the specified registry, and save the credentials to the .npmrc file.

## npm login
```bash
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

## [npm publish](./publish)

## npm cache

```bash
npm cache clean --force
```

## npm dist-tag

一般有latest、beta

```bash
npm dist-tag ls [package]
```
