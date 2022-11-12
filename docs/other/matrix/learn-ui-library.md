# 如何学习一个UI组件库

## Get Started
* 安装
* 按需引入
* 全局注册、局部注册
* 定制主题：修改样式变量，覆盖默认样式

## 组件

### Button 按钮
操作要加loading
native-type

### Icon 图标
使用第三方字体

### Image 图片
如何引用本地图片？
填充模式
图片懒加载

将 \<image> 作为标签名时无法渲染的问题
\<image> 标签是原生的 SVG 标签，Vue 不允许将原生标签名注册为组件名


### Layout 布局
行列 24列栅格

### Popup 弹出层
挂载点：body、#app、某个Dom节点

点击遮罩关闭、锁定背景滚动、动画、底部安全区适配

### Toast 轻提示
挂载点
点击遮罩关闭、动画、loading

### Calendar 日历
单个、多个、范围、限制

### DatetimePicker 时间选择
时间范围

### Cascader 级联选择
搭配input
Options数据结构重命名

### Field 输入框
各种输入类型，
trim number

### Search 搜索

### Picker 选择器

### Form 表单
自定义校验：正则、函数
异步校验
校验时机
清除校验

提交事件

### 常用样式
文字省略
1px边框
动画
