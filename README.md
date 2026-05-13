# Rewrite LLM Rules for Claude Desktop

[中文版](README_CN.md)

Claude Desktop blocks custom model names unless they look like Anthropic models. Try `deepseek-v4-pro` and you get "not an Anthropic model." Prefix it with `claude-` and it works.

This project provides rewrite rules for Quantumult X and Shadowrocket that strip that prefix before the request reaches the API provider.

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

The script reads the request body and rewrites the `model` field before forwarding the request.

### Explicit Mappings

| Claude Desktop Model | Forwarded As |
|----------------------|-------------|
| `claude-deep-seek-v4-lite` | `deepseek-v4-lite` |
| `claude-deep-seek-v4-pro` | `deepseek-v4-pro` |
| `claude-deep-seek-v4-flash` | `deepseek-v4-flash` |
| `claude-mi-mo-v2.5-pro` | `mimo-v2.5-pro` |
| `claude-mi-mo-v2.5` | `mimo-v2.5` |
| `claude-q-wen-3.6-plus` | `qwen-3.6-plus` |
| `claude-ki-mi-2.6` | `kimi-k2.6` |

### Fallback

If a model is not in the explicit mapping, the script strips the `claude-` prefix and removes the first hyphen. For example, `claude-x-abcd-xxx` becomes `xabcd-xxx`.

## Quantumult X Configuration

### 1. Enable MitM

In Quantumult X, go to **Settings > MitM**, turn on MitM and install/trust the certificate. The rewrite rules need MitM to intercept HTTPS request bodies.

### 2. Add Rewrite Remote

In your Quantumult X configuration file, add under `[rewrite_remote]`:

```
https://raw.githubusercontent.com/lihuu/rewrite-llm-rules-for-claude-desktop/main/QuanX/claude-desktop-model-rewrite.snippet, tag=rules-for-claude-desktop, enabled=true
```

### 3. Route Claude Desktop Traffic

Make sure Claude Desktop's API requests go through the Quantumult X proxy. The rewrite rule will automatically match requests to the supported providers and strip the `claude-` prefix from the model name.

## Shadowrocket Configuration

### 1. Enable MitM

In Shadowrocket, go to **Settings > MitM**, enable MitM and install/trust the certificate. The rewrite rules need MitM to intercept HTTPS request bodies.

### 2. Add Module

In Shadowrocket, go to **Settings > Module**, and add the following URL:

```
https://raw.githubusercontent.com/lihuu/rewrite-llm-rules-for-claude-desktop/main/Shadowrocket/claude-desktop-model-rewrite.sgmodule
```

### 3. Route Claude Desktop Traffic

Make sure Claude Desktop's API requests go through the Shadowrocket proxy. The rewrite rule will automatically match requests to the supported providers and strip the `claude-` prefix from the model name.
