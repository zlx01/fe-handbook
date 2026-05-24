# [Podman](https://podman.io/)

## Docker vs Podman

**架构与安全模型**

* **核心架构**：Docker采用客户端-服务器（C/S）架构，依赖一个以root权限运行的后台守护进程（`dockerd`）来集中处理所有容器操作；Podman采用无守护进程（Daemonless）的`fork/exec`模型，每个容器操作是独立进程，无需后台服务。
* **安全性与权限**：Docker的守护进程拥有系统root权限，是主要攻击面；Podman原生支持"无根"（Rootless）模式，容器内root用户映射到宿主机普通用户，即使容器逃逸也无法获得宿主机root权限，极大地缩小了攻击面。
* **故障影响范围**：Docker的`dockerd`进程存在单点故障风险；Podman无守护进程，一个容器操作失败完全不影响其他容器或系统稳定性。
* **系统集成与Pod支持**：Docker需借助第三方工具或手动配置才能将容器注册为`systemd`服务；Podman原生支持将容器自动生成`systemd`服务单元文件，且原生支持"Pod"概念，可像Kubernetes一样管理共享网络和存储的容器组。

**性能与生态对比**

* **性能表现**：Docker由于守护进程常驻，操作请求通过API轮询或事件通知，单个容器冷启动速度稍慢（约150-180ms），闲置内存开销约为100-150MB，但在高并发大规模集群下由daemon统一调度，吞吐量更稳定，略优于Podman约5%以内；Podman无守护进程，`fork/exec`直接创建（启动约180-220ms），闲置内存开销极低约50-85MB，无需长连接通信（无需dockerd中转）。
* **原生生态支持**：Docker拥有极其成熟庞大的社区、完善的文档和丰富的第三方工具，原生支持**Docker Swarm**集群、**Docker Desktop**、**Docker Scout**、**Docker Buildx**等全套工具链；Podman生态相对精简，依赖Red Hat和社区快速成长，工具高度模块化，原生支持通过`podman generate kube`/`podman play kube`无缝生成和部署Kubernetes YAML配置，提供免费的桌面GUI Podman Desktop。两者均与主流CI/CD流水线完美兼容。

**核心功能的命令对比与适用场景**

* **镜像构建**：Docker使用`docker build`，内置完整的构建器和BuildKit加速；Podman同样使用`podman build`并可完全兼容Dockerfile，但底层默认调用专为构建设计的`Buildah`工具，职责更纯粹。
* **多容器编排**：Docker推荐`docker compose up`，其"Compose"生态是行业标准；Podman推荐`podman-compose up`或`quadlet`（.container文件），其中`podman-compose`是对Docker Compose功能的外部实现，而Quadlet提供了更贴合`systemd`的无守护进程高级编排方式。
* **镜像仓库操作**：Docker使用`docker pull/push`；Podman使用`podman pull/push`。两者均兼容所有OCI标准镜像仓库（如Docker Hub），Podman默认OCI标准，可直接拉取和推送Docker Hub镜像。
* **容器日志查看**：Docker使用`docker logs`；Podman使用`podman logs`。两者都支持`-f`实时跟踪容器日志。
* **资源使用统计**：Docker使用`docker stats`；Podman使用`podman stats`。两者都提供CPU、内存、网络I/O的实时统计。
* **卷（Volume）管理**：Docker使用`docker volume create`；Podman使用`podman volume create`。两者都用于管理持久化数据卷。

------

### 💡 选型建议

你可以将Docker和Podman的特性与你的项目需求进行匹配，从而做出选择：

| 场景                         | 推荐工具 | 理由                                                         |
| :--------------------------- | :------- | :----------------------------------------------------------- |
| **个人开发或小团队协作**     | Docker   | Docker Desktop提供一致、开箱即用的跨平台体验，生态成熟，学习资源丰富，能快速上手。 |
| **对安全有高要求的生产环境** | Podman   | 原生Rootless模式能从根本上杜绝容器逃逸获取宿主机root权限的风险，无守护进程架构也消除了单点故障。 |
| **深度集成Kubernetes**       | Podman   | 原生支持Pod概念，可轻松生成和运行Kubernetes YAML文件，使开发和生产的部署单元保持一致。 |
| **需要成熟的CI/CD流水线**    | Docker   | 绝大多数CI/CD工具（如Jenkins, GitLab CI）都内置了Docker支持，插件和解决方案非常完善。 |
| **从Docker迁移或混合使用**   | 两者皆可 | Podman CLI与Docker高度兼容，可设置别名`alias docker=podman`实现无缝切换，探索新架构的同时保持现有工作流。 |
