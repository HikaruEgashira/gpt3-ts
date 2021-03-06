// pnpm esno example/readme.ts

import { App, openai } from "@hikae/gpt";

import dotenv from "dotenv";
dotenv.config();

async function main() {
    const key = process.env.OPENAI_API_KEY;
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

    console.log("[classification]", result.label);
    // result = 'Positive'
}
main();
