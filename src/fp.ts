import { createApi } from "./lib/api";
import {
    classificationsURL,
    completionURL,
    DEFAULT_ENGINE,
    engineListURL,
    engineURL,
    searchURL,
} from "./lib/config";
import {
    Completion,
    CompletionOpts,
    Engine,
    ListEngine,
    Search,
    SearchOpts,
} from "./types";
import { Classification, ClassificationOpts } from "./types/classification";
import { OptionsOfTextResponseBody as Options } from "got";

/**
 * A OpenAPI App
 */
type App = ReturnType<typeof createApi>;
export const api = createApi;

/**
 * completion
 * @link https://beta.openai.com/docs/guides/completion/completion
 */
export const completion =
    (opts: CompletionOpts, engineId = DEFAULT_ENGINE) =>
    async (api: App) => {
        const url = completionURL(engineId);
        const options: Options = {
            json: opts,
        };
        const data = await api.post(url, options).json<Completion>();
        return data;
    };

/**
 * search
 * @link https://beta.openai.com/docs/guides/search/search
 */
export const search =
    (opts: SearchOpts, engineId = DEFAULT_ENGINE) =>
    async (api: App) => {
        const url = searchURL(engineId);
        const options: Options = {
            json: opts,
        };
        const res = await api.post(url, options).json<Search>();
        return res;
    };

/**
 * Create Classification
 * @link https://beta.openai.com/docs/api-reference/classifications/create
 */
export const classification =
    (opts: ClassificationOpts) => async (api: App) => {
        const url = classificationsURL();
        const options: Options = {
            json: opts,
        };
        const res = await api.post(url, options).json<Classification>();
        return res;
    };

/**
 * List engines
 * @link https://beta.openai.com/docs/api-reference/engines/list
 */
export const listEngines = () => async (api: App) => {
    const url = engineListURL();
    const res = await api.get(url).json<ListEngine>();
    return res;
};

/**
 * Retrieve engine
 * @link https://beta.openai.com/docs/api-reference/engines/retrieve
 */
export const engine =
    (engineId = DEFAULT_ENGINE) =>
    async (api: App) => {
        const url = engineURL(engineId);
        const res = api.get(url).json<Engine>();
        return res;
    };
