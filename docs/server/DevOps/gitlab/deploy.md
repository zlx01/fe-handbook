# Linux Docker 部署 GitLab、GitLab Runner

## 文档
* https://docs.gitlab.com/ee/install/docker.html
* https://docs.gitlab.com/runner/install/docker.html
* https://docs.gitlab.com/15.5/runner/register/index.html#docker

## 部署GitLab
```bash
sudo docker run --detach \
  --hostname gitlab.example.com \
  --publish 80:80 \
  --name gitlab \
  --restart always \
  --volume $GITLAB_HOME/config:/etc/gitlab \
  --volume $GITLAB_HOME/logs:/var/log/gitlab \
  --volume $GITLAB_HOME/data:/var/opt/gitlab \
  --shm-size 256m \
  gitlab/gitlab-ee:latest
```
`--publish` 第一个端口是本地端口，第二个端口是容器端口，下面的命令最终会让GitLab运行在 `80` 端口，对外暴露的域名是 `gitlab.example.com`，当然对于局域网，要配置dns解析才能用域名访问，可以直接用`localhost` 或 `127.0.0.1` 或 `主机ip` 访问.


## 部署GitLab Runner
```bash
docker run -d --name gitlab-runner --restart always \
  --add-host=gitlab.example.com:192.168.65.135 \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest
```

`--add-host=gitlab.example.com:192.168.65.135` 是向容器添加dns解析

## 注册GitLab Runner
```bash
docker run --rm -it \
--add-host=gitlab.example.com:192.168.65.135 \
-v /srv/gitlab-runner/config:/etc/gitlab-runner \
gitlab/gitlab-runner register
```
注册用到的容器：
* 也是用 `gitlab/gitlab-runner` 这个镜像
* 提供了 register 命令
* 与上一步共享同一个持久化卷 `/etc/gitlab-runner` ，参考[回答](https://stackoverflow.com/questions/59930028/how-does-gitlab-register-a-runner-on-a-docker-container)
* `--rm` 退出之后会销毁

## 问题
runner跑ci时拉取不到仓库代码，解析不了域名，需要配置 `clone_url`，参考[官方文档](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#how-clone_url-works)

```bash
# 进入runner容器内
docker exec -it runner容器id /bin/bash

# 编辑runner的配置文件
vim /etc/gitlab-runner/config.toml

# 添加配置
# clone_url = “http://192.168.65.135/”

# 这里还可以为每个镜像都配置额外的host，例如
# extra_hosts = ["other-host:192.168.1.104"]
# 可以在192.168.1.104的8080端口运行一个web服务，然后ci中添加以下script，运行ci看看日志
# curl http://other-host:8080/

# 重启runner
gitlab-runner restart
```

