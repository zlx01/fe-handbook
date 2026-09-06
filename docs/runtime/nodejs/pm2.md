# [pm2](https://pm2.keymetrics.io/) 

一个 Node.js 进程管理工具，可以帮助你在生产环境中管理和监控你的 Node.js 应用程序。

## 安装

```bash
npm install pm2 -g
```

## 使用
```bash
# 启动应用程序
pm2 start app.js

# 查看正在运行的应用程序
pm2 list

# 停止应用程序
pm2 stop app.js

# 重启应用程序
pm2 restart app.js

# 零停机重启应用程序，先启动新进程再关闭旧进程，线上部署不会出现服务中断
pm2 reload app.js

# 删除应用程序
pm2 delete app.js

# 查看应用程序日志
pm2 logs app.js

# 监控应用程序
pm2 monit

# 生成启动脚本
pm2 startup
pm2 save

# 开启4个集群实例。利用服务器多核 CPU，开启多实例运行 Node 服务，提升并发处理能力。
pm2 start app.js -i 4

# 生成 ecosystem.config.js 配置文件
pm2 ecosystem
```

## 除了 Web 服务，还能跑什么？

* 定时任务
* 消息队列消费者
* 其他需要持续运行的 Node.js 程序

## ecosystem.config.js
