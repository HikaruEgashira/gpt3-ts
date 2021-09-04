import { App, openai } from "https://cdn.skypack.dev/@hikae/gpt?dts";
import "https://deno.land/x/dotenv/load.ts";

const key = Deno.env.get("OPENAI_API_KEY");
if (!key) {
    throw new Error("[OPENAI_API_KEY] not found");
}

const app: App = openai.app(key);
const result = await openai.classification({
    examples: [
        ["幸せ", "Positive"],
        ["私は悲しい、、", "Negative"],
        ["最高の気分だ！", "Positive"],
    ],
    labels: ["Positive", "Negative", "Neutral"],
    query: "今日は晴れの日だ",
    search_model: "ada",
    model: "ada",
})(app);

console.log(result.label);
// result = 'Positive'
