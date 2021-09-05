import { ClassificationOpts, App, Classification } from "~/mod";
import { classificationsURL } from "~/lib/mod";
import { Options } from "ky";

/**
 * Create Classification
 * @link https://beta.openai.com/docs/api-reference/classifications/create
 */
export const classification =
    (opts: ClassificationOpts) =>
    async ({ api }: App) => {
        const url = classificationsURL();
        const options: Options = {
            json: opts,
        };
        const res = await api.post(url, options).json<Classification>();
        return res;
    };
