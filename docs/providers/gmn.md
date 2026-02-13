---
summary: "Use GMN's OpenAI-compatible Codex gateway in OpenClaw"
read_when:
  - You want to use GMN as a model provider
  - You need a GMN API key or base URL setup
title: "GMN"
---

# GMN

GMN exposes an OpenAI-compatible endpoint. OpenClaw registers it as the `gmn` provider and
defaults to `gmn/gpt-5.3-codex`.

## Quick setup

1. Set `GMN_CODEX_API_KEY` (or run the wizard below).
2. Run onboarding:

```bash
openclaw onboard --auth-choice gmn-api-key
```

The default model is set to:

```
gmn/gpt-5.3-codex
```

## Non-interactive setup

```bash
openclaw onboard --non-interactive --accept-risk --auth-choice gmn-api-key --gmn-api-key "$GMN_CODEX_API_KEY"
```

## Config example

```json5
{
  env: { GMN_CODEX_API_KEY: "sk-..." },
  agents: {
    defaults: {
      model: { primary: "gmn/gpt-5.3-codex" },
      models: { "gmn/gpt-5.3-codex": { alias: "Codex (GMN)" } },
    },
  },
  models: {
    mode: "merge",
    providers: {
      gmn: {
        baseUrl: "https://gmn.chuangzuoli.com/v1",
        apiKey: "${GMN_CODEX_API_KEY}",
        api: "openai-responses",
        models: [
          {
            id: "gpt-5.3-codex",
            name: "GPT-5.3 Codex",
            reasoning: true,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 128000,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

## Base URL note

Use `https://gmn.chuangzuoli.com/v1` (not `/v1/responses` or `/v1/chat/completions`). OpenClaw's
OpenAI client appends the API path.

## Notes

- Model refs use `gmn/<modelId>`.
- If you enable a model allowlist (`agents.defaults.models`), add every model you plan to use.
- See [Model providers](/concepts/model-providers) for provider rules.

