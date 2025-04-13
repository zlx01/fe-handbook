# grid

* 强烈推荐阮一峰老师的[博文](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
* [grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)




```css
.box {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

`repeat()` 是一个 CSS 函数，用于简化重复的轨道列表。它接受两个参数：

* **第一个参数**：表示重复的次数。在 `repeat(2, minmax(0, 1fr))` 中，`2` 表示后面的轨道定义会重复 2 次。
* **第二个参数**：表示要重复的轨道定义。这里是 `minmax(0, 1fr)`。

`minmax()` 也是一个 CSS 函数，用于定义轨道的最小和最大尺寸。它接受两个参数：

* **第一个参数**：表示轨道的最小尺寸。在 `minmax(0, 1fr)` 中，`0` 意味着该轨道的最小宽度为 0 像素。
* **第二个参数**：表示轨道的最大尺寸。`1fr` 是一个灵活的长度单位，`fr` 代表 “分数单位”，`1fr` 表示将剩余的可用空间平均分成若干份，每个 `1fr` 占其中一份。在这里，每列的最大宽度是将网格容器剩余的可用空间平均分成两份后的宽度。
