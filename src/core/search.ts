import { SearchOpts, App, Search } from "~/mod";
import { searchURL } from "~/lib/mod";
import { Options } from "ky";

/**
 * Search
 * @link https://beta.openai.com/docs/guides/search/search
 */
export const search =
    (opts: SearchOpts) =>
    async ({ api, engineId }: App) => {
        const url = searchURL(engineId);
        const options: Options = {
            json: opts,
        };
        const res = await api.post(url, options).json<Search>();
        return res;
    };
