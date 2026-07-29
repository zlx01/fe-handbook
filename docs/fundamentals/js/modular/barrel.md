# barrel file

## 什么是 barrel 文件

Barrel 文件是一个从其他模块重导出功能的模块，常用于为包或目录创建更清晰的公共 API：

```js
// components/index.js
export { Button } from './Button';
export { Card } from './Card';
export { Modal } from './Modal';
export { Tabs } from './Tabs';
// ... 几十个组件
```

这允许使用者从单一入口导入：

```js
import { Button, Card } from './components';
```

