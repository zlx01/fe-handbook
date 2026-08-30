# SBOM 与供应链证明

SBOM（Software Bill of Materials）是某个制品包含的软件组件、版本和关系清单。它用于回答“这个已发布版本是否包含受影响组件”，不能替代漏洞扫描。

## 格式与生成

常见机器可读格式包括 SPDX 和 CycloneDX。SBOM 应在 CI 中针对最终制品生成，而不是只扫描源码清单；容器需要覆盖操作系统包和应用依赖。

```text
Commit → Build → Artifact/Image
                  ├─ SBOM
                  ├─ Vulnerability Report
                  └─ Signature/Provenance
```

Syft、Trivy 以及语言生态工具可以生成 SBOM。选择工具后固定版本并验证输出包含直接依赖、传递依赖和基础镜像组件。

## 保存与关联

- SBOM 与制品 digest、Commit SHA、构建任务和发布日期关联。
- 作为发布制品保存到支持 OCI Artifact 的仓库或专用系统。
- 不覆盖历史 SBOM；设置至少覆盖制品支持周期的保留期。
- 漏洞公告出现后，通过 SBOM 反查受影响服务和部署环境。

## 签名与证明

Cosign 可对镜像和相关 Artifact 签名；构建来源证明描述由什么源码、流程和构建器生成制品；SLSA 提供供应链完整性框架。部署准入应验证签名身份、仓库、工作流和制品摘要，而不是只检查“存在签名”。

VEX 可表达某漏洞为何不影响特定产品，但必须包含依据、责任人和复审条件，不能用来批量消除告警。
