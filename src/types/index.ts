import { CompletionOpts, Completion } from "./completion";
import { SearchOpts, Search } from "./search";
import { Engine, ListEngine } from "./engine";

export { Completion, CompletionOpts };
export { Search, SearchOpts };
export { Engine, ListEngine };

export interface OpenAI {
    completion(opts: CompletionOpts): Promise<Completion>;
    search(opts: SearchOpts): Promise<Search>;
    listEngines(): Promise<ListEngine>;
    engine(engineId?: string): Promise<Engine>;
}
