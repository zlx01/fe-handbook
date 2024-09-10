# Canvas

## 实战应用

### 将方形图片处理为圆形图片

```html
<template>
  <div>
    <img ref="imgRef" src="https://picsum.photos/200/200" alt="" @load="onImgLoaded">
    <br />
    <canvas ref="canvasRef" width="200" height="200"></canvas>
  </div>
</template>

<script setup>
import {ref} from "vue";

const imgRef = ref(null);
const canvasRef = ref(null);
const onImgLoaded = () => {
  const width = imgRef.value.width;
  const height = imgRef.value.height;
  const ctx = canvasRef.value.getContext('2d');
  ctx.beginPath()
  ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2)
  ctx.clip()
  ctx.drawImage(imgRef.value, 0, 0)
}
</script>
```

### canvas读取图片跨域问题

https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image

