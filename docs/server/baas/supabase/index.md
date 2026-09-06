# [Supabase](https://supabase.com/)

Supabase 是一个基于 PostgreSQL 的后端平台，提供 BaaS（Backend as a Service，后端即服务）能力，将数据库、身份认证、文件存储、实时通信和服务端函数整合在一起，帮助开发者快速构建应用后端。

- [官方文档](https://supabase.com/docs)

## 核心能力

- **Database**：提供完整的 **PostgreSQL** 数据库，支持 SQL、扩展及自动生成的数据 API。
- **Auth**：提供用户注册、登录和身份管理，支持邮箱密码、无密码登录及 OAuth 等方式。
- **Storage**：存储和管理图片、视频、文档等文件，并通过访问策略控制权限。
- **Realtime**：订阅数据库变化、广播消息和同步在线状态，用于实时协作等场景。
- **Edge Functions**：运行服务端函数，处理自定义业务逻辑和第三方服务集成。

## 数据库连接模式

### 连接池模式 Transaction Pooling

