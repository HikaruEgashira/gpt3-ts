import { openai, App } from "@hikae/gpt";

export const classification = async (app: App) => {
    const result = await openai.classification({
        examples: [
            ["幸せ", "Positive"],
            ["私は悲しい、、", "Negative"],
            ["最高の気分だ！", "Positive"],
        ],
        labels: ["Positive", "Negative", "Neutral"],
        query: "今日は待ちに待った晴れの日だ",
        search_model: "ada",
        model: "ada",
    })(app);
    console.log("[classification]", result.label);
};
