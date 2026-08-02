# SSL证书（Nginx版）

### 一、文件说明（Nginx 下载包）

1. cloud.tencent.com_bundle.crt

   （必用）

   * 服务器证书 + 中间证书链（完整信任链），PEM 编码。

   

2. cloud.tencent.com_bundle.pem

   （可选 / 可忽略）

   * 与上面 `.crt` 内容完全一致，仅后缀不同，备用。

   

3. [cloud.tencent.com](https://cloud.tencent.com).key

   （必用）

   * 证书对应的**私钥**，PEM 格式，保密不可泄露。

   

4. [cloud.tencent.com](https://cloud.tencent.com).csr

   （部署无用）

   * 证书签名请求，申请时提交给 CA，部署可删。

   

### 二、Nginx 部署要点（核心配置）

nginx.conf 或站点配置：

```nginx
server {
    listen 443 ssl;
    server_name cloud.tencent.com;

    ssl_certificate     /path/to/cloud.tencent.com_bundle.crt;
    ssl_certificate_key /path/to/cloud.tencent.com.key;

    # 可选优化
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
}
```

* 重启 Nginx：`nginx -t && nginx -s reload`

### 三、格式互转（如需）

* PEM 转 CRT：直接改后缀即可（内容相同）。
* 合成 PKCS12（.pfx/.p12）：

```bash
openssl pkcs12 -export -out cert.pfx -inkey cloud.tencent.com.key -in cloud.tencent.com_bundle.crt
```

### 四、安全提醒

* **.key 文件严格保密**，权限设为 600，禁止公开。
* 证书到期前及时续费替换，避免 HTTPS 中断。
