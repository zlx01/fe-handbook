# ADE

`Agentic Development Environment`



| 产品                               | 形态                       | 特点                                                         |
| ---------------------------------- | -------------------------- | ------------------------------------------------------------ |
| **Cursor**                         | AI 原生 IDE                | 最典型的 ADE，VS Code 路线，Agent、多文件修改、终端执行、代码库理解都比较成熟 |
| **Windsurf / Devin Desktop**       | AI 原生 IDE / Agent 工作台 | 强调 agentic workflow、多个任务/Agent 协同                   |
| **Claude Code**                    | Terminal Agent             | 不是传统 IDE，但 Agent 能力很强，适合重构、跨文件修改、跑测试、执行命令 |
| **OpenAI Codex**                   | CLI + IDE/云端 Agent       | 偏自主执行任务，可以读仓库、修改、运行、验证                 |
| **GitHub Copilot**                 | VS Code / JetBrains Agent  | 从代码补全逐渐演进到 Agent Mode，优势是 GitHub/IDE 生态集成  |
| **Gemini CLI / Google Agent 工具** | Terminal Agent             | Google 路线，类似 Claude Code / Codex CLI                    |
| **OpenCode**                       | CLI / TUI                  | 开源 Terminal Coding Agent，近几年关注度比较高               |

```
传统 AI Coding Assistant
        ↓
GitHub Copilot 早期
代码补全 / Chat

Agentic Coding Tool
        ↓
Claude Code / Codex / Cline
读取仓库 → 制定计划 → 改代码 → 跑命令 → 测试

ADE
        ↓
Cursor / Windsurf
编辑器 + Agent + Terminal + Git + MCP + 多任务管理
```

严格来说，**Claude Code / Codex 不一定应该叫“Development Environment”**，它们更准确是 **Coding Agent**；而 **Cursor、Windsurf** 才是最典型的 **ADE**。



**Cursor vs Claude Code vs Codex**，这三个基本代表了 **IDE-first、Terminal-first、Agent-first** 三条路线。
