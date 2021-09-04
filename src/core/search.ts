import { SearchOpts, App, Search } from "dist";
import { Options } from "ky";
import { searchURL } from "~/lib/mod";

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
