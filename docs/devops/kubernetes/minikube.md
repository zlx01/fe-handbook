# minikube

[https://github.com/kubernetes/minikube](https://github.com/kubernetes/minikube)

[Welcome!](https://minikube.sigs.k8s.io/docs/)

One-node cluster

prerequirement: a container runtime such as docker

minikube runs as docker container

docker inside minikube to run our application containers

### 常用命令

```bash
# 启动
minikube start

# 停止
minikube stop

# 打开dashboard
minikube dashboard

# 查看集群状态
minikube status

# 查看可用插件
minikube addons list

# 启用插件
minikube addons enable <name>
minikube addons enable metrics-server
minikube addons enable ingress

# 禁用插件
minikube addons disable <name>
```

### 其他命令

```bash
# 升级集群
minikube start --kubernetes-version=latest

# 删除集群
minikube delete

# 删除所有集群和配置
minikube delete --all
```
