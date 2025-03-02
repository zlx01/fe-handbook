# transform

## 平移 translate

* translateX() 沿着x轴方向平移
* translateY() 沿着y轴方向平移
* translateZ() 沿着z轴方向平移
* translate() 沿着x轴和y轴方向平移

## 旋转 rotate

* rotateX() 沿着x轴旋转
* rotateY() 沿着y轴旋转
* rotateZ() 沿着z轴旋转
* rotate() 沿着z轴旋转

## 缩放 scale

* scaleX() 水平方向缩放
* scaleY() 垂直方向缩放
* scaleZ() 沿着z轴方向缩放
* scale() 双方向的缩放

## 倾斜 skew

* skewX() 沿着x轴倾斜
* skewY() 沿着y轴倾斜
* skew() 沿着x轴和y轴倾斜

## 3D 变形

* translate3d() 沿着x轴、y轴和z轴方向平移
* rotate3d() 沿着任意轴旋转
* scale3d() 三方向的缩放

## 矩阵变形（非常强大）

* matrix() 2D 变形
* matrix3d() 3D 变形

## 其他属性 

* transform-origin: 设置变形的原点
* transform-style: 设置子元素是否保留3D效果，preserve-3d 保留，flat 不保留，默认为 flat
* perspective: 透视距离
* perspective-origin: 设置透视点
* backface-visibility: 设置元素背面是否可见，visible 可见，hidden 不可见，默认为 visible

详见博客：https://www.jianshu.com/p/17e289fcf467

## translate 和 rotate 的执行顺序

```css
.div1 {
  transform:  translate(100px,100px) rotate(45deg);
}
.div2 {
  transform:  rotate(45deg) translate(100px,100px);
}
```

详见博客：https://blog.csdn.net/weixin_46585382/article/details/130035401

