# \<img>

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
