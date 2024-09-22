# transform

## 平移 translate

* translateX() 沿着x轴方向平移
* translateY() 沿着y轴方向平移
* translateZ() 沿着z轴方向平移

## 旋转 rotate

* rotateX()
* rotateY()
* rotateZ()

## 缩放 scale

* scaleX() 水平方向缩放
* scaleY() 垂直方向缩放
* scale() 双方向的缩放

## translate 和 rotate 的执行顺序

```css
.div1 {
  transform:  translate(100px,100px) rotate(45deg);
}
.div2 {
  transform:  rotate(45deg) translate(100px,100px);
}
```

https://blog.csdn.net/weixin_46585382/article/details/130035401


