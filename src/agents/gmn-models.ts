import type { ModelDefinitionConfig } from "../config/types.js";

export const GMN_PROVIDER_ID = "gmn";
export const GMN_BASE_URL = "https://gmn.chuangzuoli.com/v1";
export const GMN_DEFAULT_MODEL_ID = "gpt-5.3-codex";
export const GMN_DEFAULT_MODEL_REF = `${GMN_PROVIDER_ID}/${GMN_DEFAULT_MODEL_ID}`;

const GMN_DEFAULT_COST = {
  input: 0,
  output: 0,
  cacheRead: 0,
  cacheWrite: 0,
};

export function buildGmnModelDefinition(): ModelDefinitionConfig {
  return {
    id: GMN_DEFAULT_MODEL_ID,
    name: "GPT-5.3 Codex",
    reasoning: true,
    input: ["text"],
    cost: GMN_DEFAULT_COST,
    contextWindow: 128000,
    maxTokens: 8192,
  };
}

