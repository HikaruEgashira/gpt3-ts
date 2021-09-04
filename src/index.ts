import { createApi } from "./lib/api";
import {
    Completion,
    CompletionOpts,
    Engine,
    ListEngine,
    OpenAI,
    Search,
    SearchOpts,
} from "./types";
import {
    completionURL,
    DEFAULT_ENGINE,
    engineListURL,
    engineURL,
    searchURL,
} from "./lib/config";
import { OptionsOfTextResponseBody as Options } from "got";

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
export class App implements OpenAI {
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
    async completion(opts: CompletionOpts): Promise<Completion> {
        const url = completionURL(this.engineId);
        const options: Options = {
            json: opts,
        };
        return this.api.post(url, options).json();
    }

    // search

    /**
     * search
     * @link https://beta.openai.com/docs/guides/search/search
     */
    async search(opts: SearchOpts): Promise<Search> {
        const url = searchURL(this.engineId);
        const options: Options = {
            json: opts,
        };
        return this.api.post(url, options).json();
    }

    // Engines

    /**
     * List engines
     * @link https://beta.openai.com/docs/api-reference/engines/list
     */
    async listEngines(): Promise<ListEngine> {
        const url = engineListURL();
        return this.api.get(url).json();
    }

    /**
     * Retrieve engine OR get current engine
     * @link https://beta.openai.com/docs/api-reference/engines/retrieve
     */
    async engine(engineId?: string): Promise<Engine> {
        const url = engineURL(engineId ?? this.engineId);
        return this.api.get(url).json();
    }
}
