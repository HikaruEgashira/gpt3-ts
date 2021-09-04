import { createApi } from "./lib/api";
import {
    Completion,
    CompletionOpts,
    Engine,
    ListEngine,
    Search,
    SearchOpts,
} from "./types";
import {
    classificationsURL,
    completionURL,
    DEFAULT_ENGINE,
    engineListURL,
    engineURL,
    searchURL,
} from "./lib/config";
import { OptionsOfTextResponseBody as Options } from "got";
import { Classification, ClassificationOpts } from "./types/classification";

/** App initialization options */
export interface AppOptions {
    /**
     * OPENAI_API_KEY
     * @link https://beta.openai.com/account/api-keys
     */
    key: string;
    /**
     * engine_id
     * @description
     * We offer four base models called `davinci`, `curie`, `babbage`, and ada with different levels of power suitable for different tasks. `Davinci` is the most capable model, and `Ada` is the fastest.
     * @default 'ada'
     */
    engineId?: string;
}

/**
 * A OpenAPI App
 */
export class App {
    api: ReturnType<typeof createApi>;
    engineId: string;
    constructor({ key, engineId }: AppOptions) {
        this.api = createApi(key);
        this.engineId = engineId ?? DEFAULT_ENGINE;
    }

    // completion

    /**
     * completion
     * @link https://beta.openai.com/docs/guides/completion/completion
     */
    async completion(opts: CompletionOpts) {
        const url = completionURL(this.engineId);
        const options: Options = {
            json: opts,
        };
        return await this.api.post(url, options).json<Completion>();
    }

    // search

    /**
     * search
     * @link https://beta.openai.com/docs/guides/search/search
     */
    async search(opts: SearchOpts) {
        const url = searchURL(this.engineId);
        const options: Options = {
            json: opts,
        };
        return await this.api.post(url, options).json<Search>();
    }

    // Classification

    /**
     * Create Classification
     * @link https://beta.openai.com/docs/api-reference/classifications/create
     */
    async classification(opts: ClassificationOpts) {
        const url = classificationsURL();
        const options: Options = {
            json: opts,
        };
        return await this.api.post(url, options).json<Classification>();
    }

    // Engines

    /**
     * List engines
     * @link https://beta.openai.com/docs/api-reference/engines/list
     */
    async listEngines() {
        const url = engineListURL();
        return await this.api.get(url).json<ListEngine>();
    }

    /**
     * Retrieve engine OR get current engine
     * @link https://beta.openai.com/docs/api-reference/engines/retrieve
     */
    async engine(engineId?: string) {
        const url = engineURL(engineId ?? this.engineId);
        return await this.api.get(url).json<Engine>();
    }
}
