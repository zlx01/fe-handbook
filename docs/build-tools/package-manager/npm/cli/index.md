# npm cli

## [npm init](./init)

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
