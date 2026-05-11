# Rewrite LLM Rules for Claude Desktop

## Background

Claude Desktop App recently added support for custom models. However, after a subsequent update, it started rejecting custom model names that don't appear to be from Anthropic. For example, using `deepseek-v4-pro` directly will be blocked with a "not an Anthropic model" error. But if you prefix it with `claude-`, such as `claude-deepseek-v4-pro`, it works.

This project provides a simple Quantumult X rewrite rule to solve this problem: configure Claude Desktop with the `claude-` prefixed model name, then use the rewrite rule to intercept the request and strip the prefix before forwarding it to the actual API provider.

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

For example: `claude-deepseek-v4-pro` becomes `deepseek-v4-pro`.

## Usage

1. Import `QuanX/claude-desktop-model-rewrite.snippet` into Quantumult X's [rewrite] section
2. Place `QuanX/rewrite-model.js` in your Quantumult X script directory
3. Configure Claude Desktop to route requests through the proxy
