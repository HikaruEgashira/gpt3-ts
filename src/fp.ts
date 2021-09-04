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
 * @example
 * const app: App = api(apiKey)
 */
export type App = ReturnType<typeof createApi>;

const api = createApi as (apiKey: string) => App;

/**
 * completion
 * @link https://beta.openai.com/docs/guides/completion/completion
 */
const completion =
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
const search =
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
const classification = (opts: ClassificationOpts) => async (api: App) => {
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
const listEngines = () => async (api: App) => {
    const url = engineListURL();
    const res = await api.get(url).json<ListEngine>();
    return res;
};

/**
 * Retrieve engine
 * @link https://beta.openai.com/docs/api-reference/engines/retrieve
 */
const engine =
    (engineId = DEFAULT_ENGINE) =>
    async (api: App) => {
        const url = engineURL(engineId);
        const res = api.get(url).json<Engine>();
        return res;
    };

export const openai = {
    api,
    completion,
    search,
    classification,
    listEngines,
    engine,
};
