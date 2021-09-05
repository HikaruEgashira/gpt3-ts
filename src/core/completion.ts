import { App, Completion, CompletionOpts } from "~/mod";
import { completionURL } from "~/lib/mod";
import { Options } from "ky";

/**
 * Completion
 * @link https://beta.openai.com/docs/guides/completion/completion
 */
export const completion =
    (opts: CompletionOpts) =>
    async ({ api, engineId }: App) => {
        const url = completionURL(engineId);
        const options: Options = {
            json: opts,
        };
        const data = await api.post(url, options).json<Completion>();
        return data;
    };
