import { createApi, DEFAULT_ENGINE } from "./lib/mod";
import { CompletionOpts, ClassificationOpts, SearchOpts } from "./types/mod";
import {
    classification,
    completion,
    engine,
    listEngines,
    search,
} from "./core/mod";

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
        return completion(opts)(this);
    }

    // search

    /**
     * search
     * @link https://beta.openai.com/docs/guides/search/search
     */
    async search(opts: SearchOpts) {
        return search(opts)(this);
    }

    // Classification

    /**
     * Create Classification
     * @link https://beta.openai.com/docs/api-reference/classifications/create
     */
    async classification(opts: ClassificationOpts) {
        return classification(opts)(this);
    }

    // Engines

    /**
     * List engines
     * @link https://beta.openai.com/docs/api-reference/engines/list
     */
    async listEngines() {
        return listEngines()(this);
    }

    /**
     * Retrieve engine OR get current engine
     * @link https://beta.openai.com/docs/api-reference/engines/retrieve
     */
    async engine(engineId?: string) {
        return engine()({ ...this, engineId });
    }
}
