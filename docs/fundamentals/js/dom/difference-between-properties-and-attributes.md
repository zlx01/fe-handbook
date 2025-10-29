# difference between properties and attributes

## 🧩 一、基本定义对比

| 对比点   | **Attribute（HTML 属性）**                          | **Property（DOM 属性）**                   |
| -------- | --------------------------------------------------- | ------------------------------------------ |
| 定义位置 | 定义在 HTML 标签上                                  | 定义在 DOM 对象上（JS 层）                 |
| 存在形式 | 字符串存在于 HTML 源代码中                          | JS 对象的属性，可能是各种类型              |
| 访问方式 | `element.getAttribute()` / `element.setAttribute()` | 直接通过对象访问：`element.property`       |
| 数据类型 | 总是字符串                                          | 可以是任意类型（boolean、number、object…） |
| 同步机制 | 初始时同步到 property（一次性）                     | 修改 property 不一定影响 attribute         |
| 作用范围 | 仅影响 HTML 标记层                                  | 影响页面实际行为和渲染                     |

------

## 🧠 二、例子说明差异

### 例1：`input` 的 `value`

```
<input id="username" value="Lee">
const input = document.getElementById('username');

// Attribute：HTML 初始值
console.log(input.getAttribute('value')); // "Lee"

// Property：当前运行时值（可能被用户修改）
console.log(input.value); // "Lee"

// 修改 property
input.value = "Tom";
console.log(input.getAttribute('value')); // 仍然是 "Lee"

// 修改 attribute
input.setAttribute('value', 'Mike');
console.log(input.value); // 仍然是 "Tom"（不会立刻更新）
```

✅ **结论**：

- `attribute` 是 **初始值**
- `property` 是 **实时状态**

------

### 例2：`checked`

```
<input type="checkbox" id="agree" checked>
const checkbox = document.getElementById('agree');

// 初始属性
console.log(checkbox.getAttribute('checked')); // ""
console.log(checkbox.checked); // true

// 改变 property
checkbox.checked = false;
console.log(checkbox.getAttribute('checked')); // 依旧是 ""

checkbox.setAttribute('checked', ''); // 改变 attribute
console.log(checkbox.checked); // true
```

✅ **结论**：
 `checked` 属性（HTML）代表**默认是否选中**，
 而 `checked` property（DOM）代表**当前状态**。

------

## ⚙️ 三、同步关系总结

| 场景                | Attribute → Property                      | Property → Attribute |
| ------------------- | ----------------------------------------- | -------------------- |
| 初始加载            | ✅ 是（HTML → DOM）                        | ❌ 否                 |
| 修改 HTML Attribute | ✅ 会更新部分 Property（如 src, href, id） | —                    |
| 修改 DOM Property   | ❌ 通常不会反映到 Attribute                | —                    |

------

## 💡 四、开发中建议

| 目的                               | 使用                                |
| ---------------------------------- | ----------------------------------- |
| 想操作 HTML 原始定义（比如序列化） | `getAttribute()` / `setAttribute()` |
| 想控制页面行为或状态               | 直接改 DOM property                 |

------

## 🧭 五、常见属性同步行为对比表

| 元素                | Attribute                  | Property            | 是否自动同步 |
| ------------------- | -------------------------- | ------------------- | ------------ |
| `<input value>`     | `getAttribute('value')`    | `.value`            | ❌            |
| `<input checked>`   | `getAttribute('checked')`  | `.checked`          | ❌            |
| `<img src>`         | `getAttribute('src')`      | `.src`              | ✅            |
| `<a href>`          | `getAttribute('href')`     | `.href`（绝对路径） | ✅            |
| `<div id>`          | `getAttribute('id')`       | `.id`               | ✅            |
| `<option selected>` | `getAttribute('selected')` | `.selected`         | ❌            |

## Reference

* see the [answer](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028)

