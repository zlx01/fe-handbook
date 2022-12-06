# web图片转base64

## 方法一
利用 `canvas` 绘制图片，然后调用其方法 `canvas.toDataURL` 获得图片的内联字符串表示，去掉协议即为对应的base64字符串。
```js
function drawImageToBase64(imgSrc: string): Promise<string> {
  function image2DataURL(img: HTMLImageElement): string {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, img.width, img.height);
    return canvas.toDataURL("image/png");
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.src = imgSrc;
    // 解决跨域问题（可兼容部分Android机型）
    img.setAttribute("crossorigin", "anonymous");
    img.onload = () => {
      const dataURL = image2DataURL(img);
      resolve(dataURL.replace(/data:.+,/, ""));
    };
  });
}
```
此方法亲测在iPhone6 Plus上会报错。参考[回答](https://stackoverflow.com/questions/25753754/canvas-todataurl-security-error-the-operation-is-insecure)，[讨论](https://gist.github.com/casamia918/a8daf164830bce1b6281e304ed1f91b0)，[博文](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/comment-page-1/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2ee2022c02f647caaf485c04bcf1bfe0.png#pic_center)
## 方法二（推荐）
利用ajax加载图片获得其字节流，通过FileReader实例对象读取流并转换为 DataURL，再去掉协议即可。
```js
function downloadImageToBase64(imgSrc: string): Promise<string> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve((reader.result as string).replace(/data:.+,/, ""))
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', imgSrc)
    xhr.responseType = 'blob'
    xhr.send()
  })
}

const getBase64StringFromDataURL = (dataURL: string) => dataURL.replace(/data:.+,/, "")
```

## Reference
* https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript
* https://pqina.nl/blog/convert-an-image-to-a-base64-string-with-javascript/
