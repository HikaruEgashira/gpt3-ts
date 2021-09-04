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
import { OptionsOfTextResponseBody } from "got";

/** App initialization options */
export interface AppOptions {
    key: string;
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
     * https://beta.openai.com/docs/guides/completion/completion
     */
    async completion(opts: CompletionOpts): Promise<Completion> {
        const url = completionURL(this.engineId);
        const options: OptionsOfTextResponseBody = {
            json: opts,
        };
        return this.api.post(url, options).json();
    }

    // search

    /**
     * search
     * https://beta.openai.com/docs/guides/search/search
     */
    async search(opts: SearchOpts): Promise<Search> {
        const url = searchURL(this.engineId);
        const options: OptionsOfTextResponseBody = {
            json: opts,
        };
        return this.api.post(url, options).json();
    }

    // Engines

    /**
     * List engines
     * https://beta.openai.com/docs/api-reference/engines/list
     */
    async listEngines(): Promise<ListEngine> {
        const url = engineListURL();
        return this.api.get(url).json();
    }

    /**
     * Retrieve engine OR get current engine
     * https://beta.openai.com/docs/api-reference/engines/retrieve
     */
    async engine(engineId?: string): Promise<Engine> {
        const url = engineURL(engineId ?? this.engineId);
        return this.api.get(url).json();
    }
}
