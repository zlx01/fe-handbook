# Install Docker

- [Install Docker Desktop](https://docs.docker.com/desktop/)
- [Install Docker Engine](https://docs.docker.com/engine/install/)

## Ubuntu 安装 Docker Engine

以下示例使用 Docker 官方 APT 仓库。执行前应在官方文档中确认当前 Ubuntu 版本仍受支持。

```bash
# 添加官方 GPG Key
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 添加 deb822 格式的软件源
sudo tee /etc/apt/sources.list.d/docker.sources > /dev/null <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io \
  docker-buildx-plugin docker-compose-plugin
```

生产服务器应先列出可用版本并固定经过验证的版本，避免无人值守地跨大版本升级。

## 验证

```bash
sudo systemctl status docker
sudo docker run --rm hello-world
docker compose version
docker buildx version
```

## 服务管理

```bash
sudo systemctl enable --now docker
sudo systemctl stop docker
sudo systemctl restart docker
```

## 非 root 使用

```bash
sudo usermod -aG docker "$USER"
newgrp docker
```

`docker` 用户组可以控制 Docker daemon，实际权限接近 root。多用户服务器应谨慎授权；需要更强隔离时评估 Rootless mode 或 Podman。

## 升级与卸载前

- 备份 Compose 文件、Volume 数据和 daemon 配置。
- 检查 Engine、containerd、Buildx 与 Compose 的兼容性。
- 在非生产节点验证镜像构建、网络、Volume 和重启行为。

参考：[Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)。
