export const DEFAULT_ENGINE = "ada";
export const ORIGIN = "https://api.openai.com";
export const API_VERSION = "v1";
export const OPEN_AI_URL = `${ORIGIN}/${API_VERSION}`;

export const completionURL = (engine = DEFAULT_ENGINE) =>
    `${OPEN_AI_URL}/engines/${engine}/completions`;

export const searchURL = (engine = DEFAULT_ENGINE) =>
    `${OPEN_AI_URL}/engines/${engine}/search`;

export const engineURL = (engine = DEFAULT_ENGINE) =>
    `${OPEN_AI_URL}/engines/${engine}`;
export const engineListURL = () => `${OPEN_AI_URL}/engines`;

export const classificationsURL = () => `${OPEN_AI_URL}/classifications`;

export const answersURL = () => `${OPEN_AI_URL}/answers`;

export const filesURL = () => `${OPEN_AI_URL}/files`;
