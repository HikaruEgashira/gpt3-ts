import { CompletionOpts, App, Completion } from "dist";
import { Options } from "ky";
import { completionURL } from "~/lib/mod";

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
