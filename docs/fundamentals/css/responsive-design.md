# Responsive Design 响应式设计

## 媒体media

* link标签media属性
* style标签media属性
* style标签@media
* @import规则中的media条件

## 像素px

* CSS像素：编写网页时使用的像素
* 物理像素：分辨率。

## 分辨率

* 对于屏幕，分辨率一般表示屏幕上显示的物理像素总和。比如，我们说iPhone6屏幕分辨率是750x1334px
* 对于图像，概念等同于图像尺寸、图像大小、像素尺寸 等等。比如，我们说20x20px的icon

## window.devicePixelRatio

* 1个CSS像素在不同设备上可能对应不同的物理像素数，这个比值是设备的属性（Device Pixel Ratio，设备像素比）
* window.devicePixelRatio属性返回一个数值，表示一个 CSS 像素的大小与一个物理像素的大小之间的比率。也就是说，它表示一个 CSS 像素由多少个物理像素组成。它可以用于判断用户的显示环境，如果这个比率较大，就表示用户正在使用高清屏幕，
* iPhone6的 dpr为2 ，物理像素750（x轴），则它的逻辑像素为375

## 视口viewport

* 在电脑图形学里面，**视口**代表了一个可看见的多边形区域（通常来说是矩形）。在浏览器范畴里，它代表的是浏览器中网站可见内容的部分。视口外的内容在被滚动进来前都是不可见的。（**屏幕中用来显示网页的区域**）
* 视口的当前可见部分被称作是**可视视口**。这可能比布局视口小，例如当用户进行了缩放操作时。可视视口是屏幕上的可视部分，不包括屏幕键盘、缩放区域外的区域，以及任何不随页面尺寸变化的屏幕上的物件。
* **布局视口**是浏览器绘制网页的视口，本质上代表了可见的区域，而视觉视口则代表用户显示设备上当前可见的部分。
* 这一点很重要，例如在移动设备上，用户通常可以通过捏合手势来缩放网站内容。渲染的文档不会发生任何变化，因此布局视口在用户调整缩放级别时保持不变。但是，视觉视口会更新，以指示用户可以看到的页面区域。

* 默认情况下，在PC端，1物理像素=1CSS像素，放大浏览器时就不成立了
* window.innerHeight和window.innerWidth属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）。这两个属性只读。用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，因此可见部分（视口）就变小了。
* 查看设备视口参数：https://viewportsizer.com/devices/

## 移动端适配

* 参考vant2文档：https://youzan.github.io/vant/v2/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei
* 假设设计稿尺寸是750px，iPhone6/7/8调试

### Viewport 适配

```bash
npm install postcss-px-to-viewport --save-dev
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      exclude: [/node_modules/],
      viewportWidth: 750,
    },
  },
};
```


### Rem 适配

```shell
npm i -S amfe-flexible
# 不装最新的版本，否则会报错
npm install postcss-pxtorem@5.1.1 --save-dev
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue({ file }) {
        return /\\node_modules\\vant\\/.test(file) ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
```

```js
// main.js
// 用于设置 rem 基准值
import "amfe-flexible/index";
```





