# 移动端适配问题

viewport视口

https://viewportsizer.com/devices/


视口、可视视口、布局视口


在电脑图形学里面，视口代表了一个可看见的多边形区域（通常来说是矩形）。在浏览器范畴里，它代表的是浏览器中网站可见内容的部分。视口外的内容在被滚动进来前都是不可见的。

视口当前可见的部分叫做可视视口。可视视口可能会比布局视口更小，因为当用户缩小浏览器缩放比例时，布局视口不变，而可视视口变小了。


视口的当前可见部分被称作是可视视口。这可能比布局视口小，例如当用户进行了缩放操作时。可视视口是屏幕上的可视部分，不包括屏幕键盘、缩放区域外的区域，以及任何不随页面尺寸变化的屏幕上的物件。

布局视口是浏览器绘制网页的视口，本质上代表了可见的区域，而视觉视口则代表用户显示设备上当前可见的部分。

这一点很重要，例如在移动设备上，用户通常可以通过捏合手势来缩放网站内容。渲染的文档不会发生任何变化，因此布局视口在用户调整缩放级别时保持不变。但是，视觉视口会更新，以指示用户可以看到的页面区域。


* 1像素问题，详见[博文](https://segmentfault.com/a/1190000007604842)
* iPhone安全区适配，[viewport配置](https://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/)
* ios自动密码填充导致输入账号时键盘闪烁，详见[博文](https://juejin.cn/post/7083804990925438983)
* Click事件300ms延迟
* [emoji编码](https://github.com/gzu-liyujiang/UnicodeEmoji/blob/master/emoji.json)
* 微信中的emoji在Android和iOS下表现一致，参考[社区问答](https://developers.weixin.qq.com/community/develop/doc/000604b75fc71889bd89d4c1a5b400)

## Vant2移动端适配

* 参考文档：https://youzan.github.io/vant/v2/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei
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

