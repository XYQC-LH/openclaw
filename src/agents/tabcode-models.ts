import type { ModelDefinitionConfig } from "../config/types.js";

export const TABCODE_PROVIDER_ID = "tabcode";
export const TABCODE_BASE_URL = "https://api.tabcode.cc/claude/glm";
export const TABCODE_DEFAULT_MODEL_ID = "glm-4.7";
export const TABCODE_DEFAULT_MODEL_REF = `${TABCODE_PROVIDER_ID}/${TABCODE_DEFAULT_MODEL_ID}`;

const TABCODE_DEFAULT_COST = {
  input: 0,
  output: 0,
  cacheRead: 0,
  cacheWrite: 0,
};

export function buildTabcodeModelDefinition(): ModelDefinitionConfig {
  return {
    id: TABCODE_DEFAULT_MODEL_ID,
    name: "GLM-4.7",
    reasoning: false,
    input: ["text"],
    cost: TABCODE_DEFAULT_COST,
    contextWindow: 200000,
    maxTokens: 8192,
  };
}
