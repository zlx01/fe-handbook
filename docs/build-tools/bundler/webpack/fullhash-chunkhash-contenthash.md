# fullhash  chunkhash  contenthash

webpack可以配置打包输出的文件名，该文件名可以使用模板字符串，具体参考[webpack文档](https://webpack.js.org/configuration/output/#template-strings)。`[fullhash]`, `chunkhash`, `contenthash` 是其中三个。主要区别为：

* fullhash 是针对整个编译范围（项目）计算的hash，每个文件的hash和项目的hash相同
* chunkhash 是跟chunk相关的hash，同个chunk的文件hash相同
* contenthash 是根据文件内容计算hash，文件内容不变，hash不变。有利于CDN缓存 :+1:

## Reference

* https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html

