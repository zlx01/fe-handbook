# JSX

*JSX* stands for JavaScript XML. It is a syntax extension to JavaScript.



### **Why JSX?**

关注点分离：不是直接分离html，css，js文件，而是逻辑关联的“组件”，实现某个组件的html，css，js都放在同一个文件。最主要的还是html和js的融合，css通常不使用行内样式。

### 基本语法

* 在HTML中写JavaScript，表达式写在{}里面
* JSX代码本身是一段表达式，可以当做**右值**
* Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
* 组件化使用 jsx 而不是模板
* 规则：
  * 只能有一个根元素，可以用根标签 \<>...\</>
  * 标签必须闭合
  * 小写字母开头，则认为是元素，大写字母开头，则认为是组件
  * className={} onClick={} style={{}}
* JSX 防止注入攻击（[XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting)）：React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 [XSS（cross-site-scripting, 跨站脚本）](https://en.wikipedia.org/wiki/Cross-site_scripting)攻击。