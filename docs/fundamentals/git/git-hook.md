---
ok-repo: https://github.com/zlx01/ok-githook
---

# [Git Hooks](https://git-scm.com/docs/githooks)

Git Hooks 是 Git 原生提供的钩子机制：当提交、合并、推送等事件发生时，Git 会自动执行对应的脚本。

常见的客户端 hooks：

| Hook | 执行时机 | 常见用途 |
|---|---|---|
| `pre-commit` | 创建 commit 之前 | 检查或格式化暂存区代码 |
| `prepare-commit-msg` | 生成默认提交信息之后、打开编辑器之前 | 自动补充提交信息 |
| `commit-msg` | 提交信息生成之后 | 校验提交信息格式 |
| `post-commit` | commit 创建之后 | 通知、记录日志 |
| `pre-push` | push 之前 | 运行测试、阻止不符合要求的推送 |

hook 默认存放在 `.git/hooks/` 中，也可以通过 `core.hooksPath` 修改目录。脚本必须具有可执行权限，否则 Git 会忽略它。

```text
git commit
    ↓
.git/hooks/pre-commit
    ↓
执行检查
    ↓
退出码为 0：继续提交
退出码非 0：终止提交
```

`.git/hooks/` 不会随仓库提交和共享，因此团队项目通常使用 Husky、pre-commit 等工具安装和管理 hooks。

### .git/config

```text
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
        hooksPath = .husky
[remote "origin"]
        url = https://github.com/zlx01/vue-husky-test.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
        remote = origin
        merge = refs/heads/master
        vscode-merge-base = origin/master
```

### .git/hooks

```text
applypatch-msg.sample           pre-commit.sample               prepare-commit-msg.sample
commit-msg.sample               pre-merge-commit.sample         push-to-checkout.sample
fsmonitor-watchman.sample       pre-push.sample                 sendemail-validate.sample
post-update.sample              pre-rebase.sample               update.sample
pre-applypatch.sample           pre-receive.sample
```



## 工具之间的关系

这些名称经常同时出现，但所在层级不同：

| 工具 | 作用 |
|---|---|
| [Git Hooks](https://git-scm.com/docs/githooks) | Git 原生钩子机制 |
| [Husky](https://typicode.github.io/husky/) | 管理 Git Hooks，Node.js/前端项目中很常见 |
| [lint-staged](https://github.com/lint-staged/lint-staged) | 根据 glob 筛选 staged 文件，并对它们执行 ESLint、Prettier 等任务 |
| [nano-staged](https://github.com/usmanyunusov/nano-staged) | 更轻量的 staged-file 任务执行器，可作为 lint-staged 的替代方案 |
| [pre-commit](https://pre-commit.com/) | 集 Hook 管理、多语言运行环境管理和文件检查于一体的框架 |

可以先建立下面的心智模型：

```text
Husky ≈ Git Hook 管理层

lint-staged / nano-staged ≈ staged 文件任务执行层

pre-commit ≈ Hook 管理 + 多语言工具管理 + 文件检查执行
```

## 方案一：Husky + lint-staged

纯 Node.js 或前端项目通常使用这套组合：

```text
Git
 ↓
Husky
 ↓
lint-staged / nano-staged
 ↓
ESLint / Prettier / Stylelint / ...
```

Husky 负责把项目中的脚本接入 Git Hooks；lint-staged 负责只挑选已经放入暂存区、即将提交的文件，再运行具体检查。

安装并初始化：

```bash
npm install --save-dev husky lint-staged
npx husky init
```

将 `.husky/pre-commit` 改为：

```bash
npx lint-staged
```

在 `package.json` 中配置任务：

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
    "*.{css,scss,less}": "stylelint --fix",
    "*.{json,md,yml,yaml}": "prettier --write"
  }
}
```

lint-staged 会把匹配到的 staged 文件路径传给对应命令，因此不需要在命令中再写全项目路径。格式化工具修改的结果也会被重新加入暂存区。

### 使用 nano-staged

如果只需要更轻量的 staged-file 任务执行器，可以将 lint-staged 换成 nano-staged：

```bash
npm install --save-dev husky nano-staged
npx husky init
```

`.husky/pre-commit`：

```bash
npx nano-staged
```

`package.json`：

```json
{
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less}": "prettier --write",
    "*.{ts,tsx,js,mjs,cjs}": "rslint --fix"
  }
}
```

假设执行：

```bash
git add src/a.ts README.md
npx nano-staged
```

nano-staged 会根据已经 `git add` 的文件进行匹配：

- `README.md` 命中 `*.md`，执行 `prettier --write`。
- `src/a.ts` 同时命中两个规则，执行 `prettier --write` 和 `rslint --fix`。
- 没有进入暂存区的文件不会被处理。

```text
git commit
   ↓
pre-commit hook
   ↓
nano-staged
   ↓
只检查 staged 文件
   ├─ prettier --write
   └─ rslint --fix
   ↓
通过后继续 commit
```

需要注意，同一个文件命中不同 glob 时，这些规则可能并发执行，不能把对象中规则的书写顺序理解成固定执行顺序。如果两个自动修复工具会修改同一文件，并且要求先格式化、再 lint，应将命令写在同一个规则的数组中：

```json
{
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{vue,less}": "prettier --write",
    "*.{ts,tsx,js}": ["prettier --write", "rslint --fix"],
    "*.{mjs,cjs}": "rslint --fix"
  }
}
```

同一数组内的命令会按顺序执行。这样 `*.{ts,tsx,js}` 文件才可以确定先运行 Prettier，再运行 rslint。

也可以在 `package.json` 中增加一个便于手动调用的脚本：

```json
{
  "scripts": {
    "precommit": "nano-staged"
  }
}
```

此时 `.husky/pre-commit` 可以执行 `pnpm run precommit`。仅添加 `scripts.precommit` 并不会让 Git 自动执行它，仍然需要 Husky 或其他 Hook 管理工具把该命令接入 `pre-commit` hook。

lint-staged 的生态、文档和复杂场景支持更成熟；nano-staged 更强调体积小和简单。两者通常二选一，不需要同时安装。

## 方案二：pre-commit 框架

[pre-commit](https://pre-commit.com/) 是一个用于管理和维护多语言 hooks 的框架。它通过仓库根目录下的 `.pre-commit-config.yaml` 声明 hooks，还能为不同语言的 hook 创建隔离运行环境。

```yaml
# .pre-commit-config.yaml

repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v6.0.0
    hooks:
      - id: trailing-whitespace
      - id: check-yaml
```

`rev` 应固定为明确的 tag 或 commit，并随项目依赖更新；不要直接指向会持续变化的分支。

安装好 pre-commit 框架后，在仓库中执行：

```bash
pre-commit install
```

该命令会安装 Git hook。以后提交时的执行链路是：

```text
.git/hooks/pre-commit
        ↓
pre-commit 框架
        ↓
读取 .pre-commit-config.yaml
        ↓
选择 staged 文件并运行配置的 hooks
```

第一次提交前，可以先对仓库中的所有文件运行一次：

```bash
pre-commit run --all-files
```

pre-commit 不只支持 `pre-commit` 这个 hook。通过 `--hook-type` 和配置中的 `stages`，也可以接入 `commit-msg`、`pre-push` 等 Git hooks。

## 如何选择

| 场景 | 推荐方案 |
|---|---|
| 纯 Node.js / 前端项目 | Husky + lint-staged |
| 希望依赖更少、需求简单 | Husky + nano-staged |
| Python、Go、Node.js 等多语言共存 | pre-commit 框架 |
| 只需要一两个简单检查，不介意手动维护 | Git 原生 hooks |

Husky 与 pre-commit 框架主要是两套竞争性的 Hook 管理方案；lint-staged 和 nano-staged 则是 Husky 后面常接的 staged-file 任务执行器。

一个多语言仓库可能同时需要：

```text
TypeScript → ESLint
Python     → Ruff
Go         → golangci-lint
C++        → clang-format
YAML       → check-yaml
```

这种情况下，pre-commit 框架通常更方便，因为它从一开始就是按照多语言 Hook 管理器设计的。

## 原生 Hook 示例

不使用管理工具时，也可以直接编写原生 hook。下面两个示例分别校验提交信息和检查 staged JavaScript 文件。

### `commit-msg`：校验提交信息

```bash
#!/usr/bin/env bash

commit_regex='^Merge.+|(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert|types)(\(.+\))?: .{1,50}'

if ! grep -iqE "$commit_regex" "$1"; then
  echo
  echo "  Error: proper commit message format is required for automated changelog generation."
  echo
  echo "  - Use \`npm run commit\` to interactively generate a commit message."
  echo "  - See .github/COMMIT_CONVENTION.md for more details."
  echo
  exit 1
fi
```

Git 会把保存提交信息的文件路径作为第一个参数传给 `commit-msg` hook，因此脚本通过 `$1` 读取并校验提交信息。

### `pre-commit`：检查 staged JavaScript 文件

```bash
#!/usr/bin/env bash

files_to_lint=$(git diff --cached --name-only --diff-filter=ACM | grep '\.js$')

if [ -n "$files_to_lint" ]; then
  NODE_ENV=production eslint --quiet $files_to_lint
fi
```

这个简化示例没有完整处理文件名中的空格等边界情况。实际团队项目更适合交给 lint-staged、nano-staged 或 pre-commit 框架处理文件筛选和参数传递。

## 注意事项

- 客户端 hooks 可以通过 `git commit --no-verify` 或 `git push --no-verify` 跳过，不能作为唯一的质量防线。
- 将关键检查同时放在 CI 中，才能对所有贡献者和提交统一生效。
- `pre-commit` 阶段应优先运行快速、与本次提交相关的检查；完整测试和构建更适合放到 `pre-push` 或 CI。
- 自动修复会改变文件内容。提交前应检查 `git diff --cached`，确认最终进入 commit 的内容符合预期。
