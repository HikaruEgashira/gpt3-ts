// pnpm esno example/readme.ts

import { App } from "@hikae/gpt";

require("dotenv").config();

async function main() {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        throw new Error("[OPENAI_API_KEY] not found");
    }

    const app = new App({ key });

    const result = await app.classification({
        examples: [
            ["幸せ", "Positive"],
            ["私は悲しい、、", "Negative"],
            ["最高の気分だ！", "Positive"],
        ],
        labels: ["Positive", "Negative", "Neutral"],
        query: "今日は待ちに待った晴れの日だ",
        search_model: "ada",
        model: "ada",
    });
    console.log(result.label);
    // result = 'Positive'
}
main();
