# 位运算符的应用
## 交换两个变量的值
```js
var a = 10;
var b = 99;
// 异或
a ^= b;
b ^= a;
a ^= b;
```

## RGB to HEX
```js
var color = {r: 5, g: 218, b: 85};

// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
  .toString(16) // 先转成十六进制，然后返回字符串
  .substring(1);   // 去除字符串的最高位，返回后面六个字符串
};

console.log(rgb2hex(color.r, color.g, color.b))
// "#bada55"
```

## 开关

引用自阮一峰大神的[教程](https://wangdoc.com/javascript/operators/bit.html#%E5%BC%80%E5%85%B3%E4%BD%9C%E7%94%A8)

假定某个对象有四个开关，每个开关都是一个变量。那么，可以设置一个四位的二进制数，它的每个位对应一个开关。
```js
var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000
```
然后，就可以用二进制**与**运算，检查当前设置是否打开了指定开关。
```js
var flags = 5; // 二进制的0101

if (flags & FLAG_C) {
  // ...
}
// 0101 & 0100 => 0100 => true
```
现在假设需要打开A、B、D三个开关，我们可以通过二进制**或**运算构造一个掩码变量。
```js
var mask = FLAG_A | FLAG_B | FLAG_D;
// 0001 | 0010 | 1000 => 1011
```
有了掩码，二进制或运算可以确保打开指定的开关。
```js
flags = flags | mask;
```
上面代码中，计算后得到的flags变量，代表三个开关的二进制位都打开了。

二进制**与**运算可以将当前设置中凡是与开关设置不一样的项，全部关闭。
```js
flags = flags & mask;
```
异或运算可以切换（toggle）当前设置，即第一次执行可以得到当前设置的相反值，再执行一次又得到原来的值。
```js
var mask = 15 // 1111
flags = flags ^ mask;
```

二进制否运算可以翻转当前设置，即原设置为0，运算后变为1；原设置为1，运算后变为0。
```js
flags = ~flags;
```

* 任何数和 `0` 异或得到原来值
* 任何数和 `111...111` 异或可以按位取反

