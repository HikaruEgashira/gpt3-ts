import { App, openai } from "https://cdn.skypack.dev/@hikae/gpt?dts";
import "https://deno.land/x/dotenv@v3.0.0/load.ts";

import { negpos } from "./negpos.ts";

const key = Deno.env.get("OPENAI_API_KEY");
if (!key) {
    throw new Error("[OPENAI_API_KEY] not found");
}

const app: App = openai.app(key);

//// tasks

await negpos("いい一日だなあ")(app);
// = 'Positive'
