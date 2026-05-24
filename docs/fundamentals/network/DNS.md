# DNS(Domain Name System)

## DNS 记录类型

| 记录类型      | 作用                        | 示例                                                  |
| :------------ | :-------------------------- | :---------------------------------------------------- |
| **CNAME**     | 将别名指向另一个域名        | `www.example.com → example.com`                       |
| **A 记录**    | 将域名指向 IPv4 地址        | `example.com → 192.0.2.1`                             |
| **AAAA 记录** | 将域名指向 IPv6 地址        | `example.com → 2001:db8::1`                           |
| **MX 记录**   | 指定邮件服务器              | `example.com → mail.example.com`                      |
| **TXT 记录**  | 存储文本信息（如验证、SPF） | `example.com → "v=spf1 include:_spf.google.com ~all"` |

