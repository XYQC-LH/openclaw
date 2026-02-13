---
summary: "Use Tabcode's Anthropic Messages gateway (glm-4.7) in OpenClaw"
read_when:
  - You want to use Tabcode as a model provider
  - You need a Tabcode API key or base URL setup
title: "Tabcode"
---

# Tabcode

Tabcode exposes an Anthropic Messages-compatible endpoint. OpenClaw registers it as the `tabcode`
provider and defaults to `tabcode/glm-4.7`.

## Quick setup

1. Set `TABCODE_API_KEY` (or run the wizard below).
2. Run onboarding:

```bash
openclaw onboard --auth-choice tabcode-api-key
```

The default model is set to:

```
tabcode/glm-4.7
```

## Non-interactive setup

```bash
openclaw onboard --non-interactive --accept-risk --auth-choice tabcode-api-key --tabcode-api-key "$TABCODE_API_KEY"
```

## Config example

```json5
{
  env: { TABCODE_API_KEY: "sk-..." },
  agents: {
    defaults: {
      model: { primary: "tabcode/glm-4.7" },
      models: { "tabcode/glm-4.7": { alias: "GLM 4.7 (Tabcode)" } },
    },
  },
  models: {
    mode: "merge",
    providers: {
      tabcode: {
        baseUrl: "https://api.tabcode.cc/claude/glm",
        apiKey: "${TABCODE_API_KEY}",
        api: "anthropic-messages",
        models: [
          {
            id: "glm-4.7",
            name: "GLM-4.7",
            reasoning: false,
            input: ["text"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 200000,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
}
```

## Base URL note

OpenClaw's Anthropic client appends `/v1/messages` to the base URL, so use
`https://api.tabcode.cc/claude/glm` (not `/claude/glm/v1/messages`). If Tabcode changes its base
URL, override `models.providers.tabcode.baseUrl`.

## Notes

- Model refs use `tabcode/<modelId>`.
- If you enable a model allowlist (`agents.defaults.models`), add every model you plan to use.
- See [Model providers](/concepts/model-providers) for provider rules.
