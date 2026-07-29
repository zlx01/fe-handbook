# [微信公众号/服务号](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)

## 网页开发

### 同微信原生视觉体验一致的基础样式库

* https://github.com/Tencent/weui
* https://weui.io/

## JS SDK

* http://res.wx.qq.com/open/js/jweixin-1.6.0.js
* [DEMO](https://www.weixinsxy.com/jssdk/)

## 服务端接口

* https://developers.weixin.qq.com/doc/service/api/
* [AccessToken](https://developers.weixin.qq.com/doc/subscription/api/base/api_getaccesstoken.html)
* [StableAccessToken](https://developers.weixin.qq.com/doc/subscription/api/base/api_getstableaccesstoken.html)
  * 普通模式，`access_token` 有效期内重复调用该接口不会更新 `access_token`，绝大部分场景下使用该模式；
  * 强制刷新模式，会导致上次获取的 `access_token` 失效，并返回新的 `access_token`；

