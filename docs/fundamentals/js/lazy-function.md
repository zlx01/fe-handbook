# 惰性函数（Lazy Function）

```js
function copyText(text) {
  if (navigator.clipboard) {
    copyText = (text) => {
      navigator.clipboard.writeText(text);
    };
  } else {
    copyText = (text) => {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    };
  }
  copyText(text);
}
```

惰性函数核心特点：

1. **第一次调用时做判断**（判断环境 / 能力）
2. **重写自身**，把函数变量指向新的实现
3. **后续再次调用，直接走新函数，不再重复判断**
