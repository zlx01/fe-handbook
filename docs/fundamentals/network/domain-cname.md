# CNAME

> A记录是将域名解析成IP，CNAME是将域名解析成另外一个域名。

![img](./assets/v2-2748a0dbe09fad1b21998c2e64621962_r.jpg)

> CNAME即别名( Canonical Name )；可以用来把一个域名解析到另一个域名，当 DNS 系统在查询 CNAME 左面的名称的时候，都会转向 CNAME 右面的名称再进行查询，一直追踪到最后的 PTR 或 A 名称，成功查询后才会做出回应，否则失败。

> 你有一台服务器上存放了很多资料，你使用docs.example.com去访问这些资源，但又希望通过documents.example.com也能访问到这些资源，那么你就可以在您的DNS解析服务商添加一条CNAME记录，将documents.example.com指向docs.example.com，添加该条CNAME记录后，所有访问documents.example.com的请求都会被转到docs.example.com，获得相同的内容。

## Reference

* https://blog.csdn.net/DD_orz/article/details/100034049

