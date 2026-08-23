# Docker Compose

## compose.yaml

- name
- services
- volumes
- secret
- config

## docker compose command

```bash
# 启动服务
docker compose up
# 在后台启动
docker compose up -d
# 停止服务
docker compose stop
# 停止服务并销毁容器
docker compose down
# 停止服务并销毁一切，包括容器和持久卷
docker compose down --volumes

# The docker compose run command allows you to run one-off commands for your services. 
# For example, to see what environment variables are available to the web service
docker compose run web env

# 指定配置文件
docker compose -f production.yml up
```

## Environment variables

The order of precedence (highest to lowest) is as follows:

1. Set using [`docker compose run -e` in the CLI](https://docs.docker.com/compose/environment-variables/set-environment-variables/#set-environment-variables-with-docker-compose-run---env)
2. Substituted from your [shell](https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-from-the-shell)
3. Set using just the [`environment` attribute in the Compose file](https://docs.docker.com/compose/environment-variables/set-environment-variables/#use-the-environment-attribute)
4. Use of the [`-env-file` argument](https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with---env-file) in the CLI
5. Use of the [`env_file` attribute](https://docs.docker.com/compose/environment-variables/set-environment-variables/#use-the-env_file-attribute) in the Compose file
6. Set using an [`.env` file](https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with-an-env-file) placed at base of your project directory
7. Set in a container image in the [ENV directive](https://docs.docker.com/reference/dockerfile/#env). Having any `ARG` or `ENV` setting in a `Dockerfile` evaluates only if there is no Docker Compose entry for `environment`, `env_file` or `run --env`.

## Profiles

If unassigned, the service is always started but if assigned, it is only started if the profile is activated.

类似SpringBoot的application.yaml中的profile
