# Rewrite LLM Rules for Claude Desktop

Quantumult X rewrite script for Claude Desktop, enabling it to work with Chinese LLM API providers that support the Anthropic API format.

## Supported Providers

| Provider | Endpoint |
|----------|----------|
| DeepSeek | `api.deepseek.com` |
| Xiaomi MiMo | `token-plan-cn.xiaomimimo.com` |
| DashScope (Alibaba) | `coding.dashscope.aliyuncs.com` |
| Volcengine (ByteDance) | `ark.cn-beijing.volces.com` |
| Moonshot | `api.moonshot.cn` |
| Zhipu AI | `open.bigmodel.cn` |
| Zhipu AI (Z.AI) | `api.z.ai` |
| MiniMax | `api.minimax.io` |
| Alibaba MaaS | `token-plan.cn-beijing.maas.aliyuncs.com` |
| Tencent LKEAP | `api.lkeap.cloud.tencent.com` |
| Tencent MaaS | `tokenhub.tencentmaas.com` |
| Baidu Qianfan | `qianfan.baidubce.com` |

## How It Works

The script intercepts API requests from Claude Desktop and rewrites the `model` field in the request body, removing the `claude-` prefix so the target API provider can process the model name correctly.

For example: `claude-sonnet-4-20250514` becomes `sonnet-4-20250514`.

## Usage

1. Import `QuanX/claude-desktop-model-rewrite.snippet` into Quantumult X's [rewrite] section
2. Place `QuanX/rewrite-model-remove-prefix.js` in your Quantumult X script directory
3. Configure Claude Desktop to route requests through the proxy
