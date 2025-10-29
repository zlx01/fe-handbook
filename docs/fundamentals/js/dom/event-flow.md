# 事件流 Event Flow

## 🧭 一、事件流的三个阶段

| 阶段                              | 描述                                                         | 举例         |
| --------------------------------- | ------------------------------------------------------------ | ------------ |
| **1. 捕获阶段 (Capturing phase)** | 事件从最外层元素（`window → document → html → body → ... → 目标元素`）一路向下传播 | 从外往里     |
| **2. 目标阶段 (Target phase)**    | 事件到达目标元素本身，并在该元素上触发                       | 到达事件目标 |
| **3. 冒泡阶段 (Bubbling phase)**  | 事件从目标元素向上传播（`目标元素 → ... → body → html → document → window`） | 从里往外     |

------

## 🧩 二、流程图示意

```html
window
  ↓  捕获阶段
document
  ↓
<html>
  ↓
<body>
  ↓
<div id="parent">
  ↓
<button id="child">目标元素</button> ← 目标阶段
  ↑
  冒泡阶段
```

------

## 🧠 三、事件监听中的第三个参数

在使用 `addEventListener` 注册事件时：

```
element.addEventListener(type, listener, useCapture);
```

| 参数         | 含义                                                         |
| ------------ | ------------------------------------------------------------ |
| `type`       | 事件类型，例如 `"click"`                                     |
| `listener`   | 事件处理函数                                                 |
| `useCapture` | 是否在捕获阶段执行监听函数（默认为 `false`，表示在冒泡阶段执行） |

> ✅ 若 `useCapture = true`，监听函数在**捕获阶段**触发。
>  ❌ 若 `useCapture = false`（默认），监听函数在**冒泡阶段**触发。

------

## 💡 四、代码示例

```
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('父元素 冒泡阶段');
  });

  document.getElementById('parent').addEventListener('click', () => {
    console.log('父元素 捕获阶段');
  }, true);

  document.getElementById('child').addEventListener('click', () => {
    console.log('子元素 点击事件');
  });
</script>
```

**点击按钮的输出顺序：**

```
父元素 捕获阶段
子元素 点击事件
父元素 冒泡阶段
```

------

## 🚦 五、事件流控制方法

| 方法                               | 作用                                           |
| ---------------------------------- | ---------------------------------------------- |
| `event.stopPropagation()`          | 阻止事件继续传播（不再冒泡或捕获）             |
| `event.stopImmediatePropagation()` | 阻止传播，并且阻止**同一元素上**其他监听器执行 |
| `event.preventDefault()`           | 阻止默认行为（例如点击链接跳转、表单提交）     |

------

## ⚙️ 六、特殊情况

1. **某些事件不冒泡**（如 `blur`, `focus`, `mouseenter`, `mouseleave` 等）。

2. **委托事件（事件代理）** 基于冒泡原理实现：
    把事件绑定到父元素上，通过判断 `event.target` 来处理子元素事件。

   ```
   document.getElementById('list').addEventListener('click', (e) => {
     if (e.target.tagName === 'LI') {
       console.log('点击了某个 <li>');
     }
   });
   ```

------

## 🎯 总结记忆口诀

> **先捕获 → 再目标 → 后冒泡**

| 阶段     | 顺序         | 默认监听                    |
| -------- | ------------ | --------------------------- |
| 捕获阶段 | 从外到内     | `useCapture: true`          |
| 目标阶段 | 目标元素触发 | —                           |
| 冒泡阶段 | 从内到外     | `useCapture: false`（默认） |