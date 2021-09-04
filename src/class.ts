import {
    createApi,
    classificationsURL,
    completionURL,
    DEFAULT_ENGINE,
    engineListURL,
    engineURL,
    searchURL,
} from "./lib/mod";
import {
    Completion,
    CompletionOpts,
    Classification,
    ClassificationOpts,
    Engine,
    ListEngine,
    Search,
    SearchOpts,
} from "./types/mod";
import {
    classification,
    completion,
    engine,
    listEngines,
    search,
} from "./core/mod";
import { Options } from "ky";

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
 * @deprecated
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
        return completion(opts)({ api: this.api, engineId: this.engineId });
    }

    // search

    /**
     * search
     * @link https://beta.openai.com/docs/guides/search/search
     */
    async search(opts: SearchOpts) {
        return search(opts)({ api: this.api, engineId: this.engineId });
    }

    // Classification

    /**
     * Create Classification
     * @link https://beta.openai.com/docs/api-reference/classifications/create
     */
    async classification(opts: ClassificationOpts) {
        return classification(opts)({ api: this.api, engineId: this.engineId });
    }

    // Engines

    /**
     * List engines
     * @link https://beta.openai.com/docs/api-reference/engines/list
     */
    async listEngines() {
        return listEngines()({ api: this.api, engineId: this.engineId });
    }

    /**
     * Retrieve engine OR get current engine
     * @link https://beta.openai.com/docs/api-reference/engines/retrieve
     */
    async engine(engineId?: string) {
        return engine()({ api: this.api, engineId: engineId ?? this.engineId });
    }
}
