# Web Components

* official site: https://www.webcomponents.org
* MDN: https://developer.mozilla.org/zh-CN/docs/Web/Web_Components


## 三大技术

* **Custom Elements**：一组 JavaScript API，自定义html元素的行为
* **Shadow DOM**：一组 JavaScript API，用于封装一个元素的样式和结构，使其不受外部css影响，自带scoped
* **HTML template**：`<template>` 元素，用于存放html模板，不会被渲染，`<slot>` 元素，用于插入模板内容

### Custom Elements

* 类式写法，继承现有的HTML元素类
* 重点是定义各个生命周期回调
* 使用前需要注册，`customElements.define('my-element', MyElement);`
* `attributeChangedCallback` 可以监听属性变化

### Shadow DOM

* **Shadow host**: 影子 DOM 附加到的常规 DOM 节点。 
* **Shadow tree**: 影子 DOM 内部的 DOM 树。 
* **Shadow boundary**: 影子 DOM 终止，常规 DOM 开始的地方。 
* **Shadow root**: 影子树的根节点。

* 通过 `attachShadow` 方法创建
* 可以通过配置mode来允许页面js访问shadow dom

## Web Components的优势

* 标准化，原生支持
* 封装性，隔离性
* 跨框架兼容

## 为什么不推荐使用Web Components

* 兼容性问题
* 复杂的状态管理、生命周期管理、事件处理
* 性能优化
* 响应式系统
* 声明式UI
* 生态系统

## 使用现状

* 头部案例：Twitter、YouTube、GitHub
* 基础/组件库：[lit](https://github.com/lit/lit/)  [omi](https://github.com/Tencent/omi)

## 案例

https://zrqpn2.csb.app/web-components-demo.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>UserCard</title>
  </head>
  <!--https://www.ruanyifeng.com/blog/2019/08/web_components.html-->
  <body>
    <user-card
      image="https://semantic-ui.com/images/avatar2/large/kristy.png"
      name="User Name"
      email="yourmail@some-email.com"
    ></user-card>

    <template id="userCardTemplate">
      <style>
        :host {
          display: flex;
          align-items: center;
          width: 450px;
          height: 180px;
          background-color: #d4d4d4;
          border: 1px solid #d5d5d5;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          overflow: hidden;
          padding: 10px;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .image {
          flex: 0 0 auto;
          width: 160px;
          height: 160px;
          vertical-align: middle;
          border-radius: 5px;
        }

        .container {
          box-sizing: border-box;
          padding: 20px;
          height: 160px;
        }

        .container > .name {
          font-size: 20px;
          font-weight: 600;
          line-height: 1;
          margin: 0;
          margin-bottom: 5px;
        }

        .container > .email {
          font-size: 12px;
          opacity: 0.75;
          line-height: 1;
          margin: 0;
          margin-bottom: 15px;
        }

        .container > .button {
          padding: 10px 25px;
          font-size: 12px;
          border-radius: 5px;
          text-transform: uppercase;
        }
      </style>

      <img class="image">
      <div class="container">
        <p class="name"></p>
        <p class="email"></p>
        <button class="button">Follow John</button>
      </div>
    </template>

    <script>
      class UserCard extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({mode: 'closed'});

          const templateElem = document.getElementById('userCardTemplate');
          const content = templateElem.content.cloneNode(true);
          content.querySelector('img').setAttribute('src', this.getAttribute('image'));
          content.querySelector('.container>.name').innerText = this.getAttribute('name');
          content.querySelector('.container>.email').innerText = this.getAttribute('email');

          // this.appendChild(content);
          shadow.appendChild(content);

          this.$button = shadow.querySelector('button');
          this.$button.addEventListener('click', () => {
            alert('hi')
          });
        }
      }

      window.customElements.define('user-card', UserCard)
    </script>

  </body>
</html>
```


用lit实现: https://zrqpn2.csb.app/lit-demo.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>UserCard</title>
</head>
<!--https://www.ruanyifeng.com/blog/2019/08/web_components.html-->
<body>
  <user-card
    image="https://semantic-ui.com/images/avatar2/large/kristy.png"
    name="User Name"
    email="yourmail@some-email.com"
  ></user-card>

  <script type="importmap">
    {
      "imports": {
        "lit": "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js"
      }
    }
  </script>
  <script type="module">
    import {LitElement, css, html} from 'lit'

    class UserCard extends LitElement {
      static properties = {
        image: {type: String},
        name: {type: String},
        email: {type: String}
      }

      static styles = css`
        :host {
          display: flex;
          align-items: center;
          width: 450px;
          height: 180px;
          background-color: #d4d4d4;
          border: 1px solid #d5d5d5;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          overflow: hidden;
          padding: 10px;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .image {
          flex: 0 0 auto;
          width: 160px;
          height: 160px;
          vertical-align: middle;
          border-radius: 5px;
          object-fit: cover;
        }

        .container {
          box-sizing: border-box;
          padding: 20px;
          height: 160px;
        }

        .container > .name {
          font-size: 20px;
          font-weight: 600;
          line-height: 1;
          margin: 0;
          margin-bottom: 5px;
        }

        .container > .email {
          font-size: 12px;
          opacity: 0.75;
          line-height: 1;
          margin: 0;
          margin-bottom: 15px;
        }

        .container > .button {
          padding: 10px 25px;
          font-size: 12px;
          border-radius: 5px;
          text-transform: uppercase;
        }
      `

      render() {
        return html`
          <img class="image" src="${this.image}" alt="${this.name}">
          <div class="container">
            <p class="name">${this.name}</p>
            <p class="email">${this.email}</p>
            <button class="button" @click=${this._sayHi}>Follow ${this.name}</button>
          </div>
        `
      }

      _sayHi() {
        alert('hi')
      }
    }

    window.customElements.define('user-card', UserCard)
  </script>
</body>
</html>
```


## References

* https://www.cnblogs.com/zhoulujun/p/17972261
* https://developer.jdcloud.com/article/3706 
* https://www.albertaz.com/blog/web-components-ststus
