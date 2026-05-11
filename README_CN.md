# Claude Desktop 模型名称改写规则

Claude Desktop 会拒绝不符合 Anthropic 命名规范的自定义模型。直接填 `deepseek-v4-pro` 会报 "not an Anthropic model"，但加上 `claude-` 前缀就能用。

这个项目是一条 Quantumult X 重写规则，在请求到达 API 提供商之前，把那个前缀去掉。

## 支持的 API 提供商

| 提供商 | 端点 |
|--------|------|
| DeepSeek | `api.deepseek.com` |
| 小米 MiMo | `token-plan-cn.xiaomimimo.com` |
| 灵积（阿里） | `coding.dashscope.aliyuncs.com` |
| 火山引擎（字节） | `ark.cn-beijing.volces.com` |
| Moonshot | `api.moonshot.cn` |
| 智谱 AI | `open.bigmodel.cn` |
| 智谱 AI (Z.AI) | `api.z.ai` |
| MiniMax | `api.minimax.io` |
| 阿里 MaaS | `token-plan.cn-beijing.maas.aliyuncs.com` |
| 腾讯 LKEAP | `api.lkeap.cloud.tencent.com` |
| 腾讯 MaaS | `tokenhub.tencentmaas.com` |
| 百度千帆 | `qianfan.baidubce.com` |

## 工作原理

脚本读取请求体，把 `model` 字段里的 `claude-` 前缀删掉，然后转发修正后的名称。`claude-deepseek-v4-pro` 变成 `deepseek-v4-pro`。

## 使用方法

1. 把 `QuanX/claude-desktop-model-rewrite.snippet` 导入 Quantumult X 的 [rewrite] 区
2. 把 `QuanX/rewrite-model.js` 放到 Quantumult X 脚本目录
3. 让 Claude Desktop 的流量走代理
