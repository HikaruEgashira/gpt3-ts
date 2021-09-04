import { createApi, DEFAULT_ENGINE } from "./lib/mod";
import {
    classification,
    completion,
    engine,
    listEngines,
    search,
} from "./core/mod";

/**
 * A OpenAPI App
 * @example
 * const app: App = api(apiKey)
 */
export type App = { api: ReturnType<typeof createApi>; engineId: string };

const app = (apiKey: string, engineId = DEFAULT_ENGINE): App => ({
    api: createApi(apiKey),
    engineId,
});

export const openai = {
    app,
    completion,
    search,
    classification,
    listEngines,
    engine,
};
