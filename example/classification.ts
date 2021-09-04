import { App } from "../src/class";

export const classification = async (app: App) => {
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
    console.log(result);
};
