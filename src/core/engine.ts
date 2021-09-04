import { App, ListEngine, Engine } from "~/mod";
import { engineListURL, engineURL } from "~/lib/mod";

/**
 * List engines
 * @link https://beta.openai.com/docs/api-reference/engines/list
 */
export const listEngines =
    () =>
    async ({ api }: App) => {
        const url = engineListURL();
        const res = await api.get(url).json<ListEngine>();
        return res;
    };

/**
 * Retrieve engine
 * @link https://beta.openai.com/docs/api-reference/engines/retrieve
 */
export const engine =
    () =>
    async ({ api, engineId }: App) => {
        const url = engineURL(engineId);
        const res = api.get(url).json<Engine>();
        return res;
    };
