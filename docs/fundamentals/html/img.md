# \<img>

* width、height属性，尽可能设置图片的宽高，有两点好处：1.提前设置宽高避免**页面重绘**，提升性能；2.**可以避免页面抖动**，提升用户体验。第一点你可能感受不出来，但是第二点对于比较在意细节的交互设计师和产品经理，他们会要求避免这种不好的体验。
* alt属性，图片加载失败时显示的文字，最好每个标签都加上，如果是装饰性的图片，可以设置为空字符串，如果是有语义的图片，可以写上描述，这也有助于**SEO和无障碍阅读**。
* loading属性，设置为lazy可以实现图片懒加载，对于图片较多的网站，可以**节省流量带宽**，如果是首屏的话，这个优化尤为重要。Element UI的图片组件就是利用这个属性实现懒加载，对于不支持该属性的浏览器，Element UI会通过监听滚动事件实现懒加载，具体可以看Element UI的源码。

## loading属性

* auto, 默认值
* lazy, 延迟加载
* eager, 立即加载

常用于网站优化：图片懒加载

```html
<body>
  <div style="height: 1000vh">只有当滚到图片进入可视区，浏览器才会请求下载图片，看network</div>
  <img src="https://picsum.photos/200/300" loading="lazy" alt="…" width="200" height="300">
</body>
```

## js api

```js
const img = new Image();
console.log(img instanceof Image) // true
console.log(img instanceof HTMLImageElement) // true
img.src = "../assets/good.jpg";
document.body.appendChild(img);

const musicImg = document.createElement('img');
musicImg.src = "../assets/music.png";
document.body.appendChild(musicImg);

musicImg.onload = function () {
  console.log(musicImg.width);
  console.log(musicImg.height);
  console.log(musicImg.naturalWidth);
  console.log(musicImg.naturalHeight);
}

// 图片加载失败，浏览器会显示一个裂开的小图标，
// 可以在这里替换成自定义的默认图片，提升用户体验
musicImg.onerror = function () {
  console.log('error');
}
```

## 响应式图像

* srcset、sizes属性，参考[文章](https://wangdoc.com/html/image#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9B%BE%E5%83%8F)

```html
<img srcset="foo-160.jpg 160w,
            foo-320.jpg 320w,
            foo-640.jpg 640w,
            foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg" alt="foo">
```
