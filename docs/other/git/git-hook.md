# [git-hook](https://git-scm.com/docs/git-hook)

## [pre-commit](https://pre-commit.com/)

> A framework for managing and maintaining multi-language pre-commit hooks.

## Examples

commit msg from vue

```bash
#!/usr/bin/env bash

# Validate commit log
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

pre-commit from vue

```bash
#!/usr/bin/env bash

files_to_lint=$(git diff --cached --name-only --diff-filter=ACM | grep '\.js$')

if [ -n "$files_to_lint" ]; then
  NODE_ENV=production eslint --quiet $files_to_lint
fi
```
