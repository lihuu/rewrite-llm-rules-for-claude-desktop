# Rewrite LLM Rules for Claude Desktop

[中文版](README_CN.md)

Claude Desktop blocks custom model names unless they look like Anthropic models. Try `deepseek-v4-pro` and you get "not an Anthropic model." Prefix it with `claude-` and it works.

This project is a Quantumult X rewrite rule that strips that prefix before the request reaches the API provider.

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

The script reads the request body, removes the `claude-` prefix from the `model` field, and forwards the corrected name. `claude-deepseek-v4-pro` becomes `deepseek-v4-pro`.

## Usage

1. Import `QuanX/claude-desktop-model-rewrite.snippet` into Quantumult X's [rewrite] section
2. Place `QuanX/rewrite-model.js` in your Quantumult X script directory
3. Route Claude Desktop traffic through the proxy
