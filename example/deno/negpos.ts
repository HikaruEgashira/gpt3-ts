import {
    App,
    openai,
    ClassificationOpts,
} from "https://cdn.skypack.dev/@hikae/gpt?dts";

export const negpos = (query: string) => async (app: App) => {
    const opts: ClassificationOpts = {
        examples: [
            ["The movie is so interesting.", "Positive"],
            ["It is quite boring.", "Negative"],
            ["This is a pen.", "Neutral"],
            ["電気をつけてください。", "Neutral"],
            ["あなたのことが好きです。", "Positive"],
            ["このペンは悪いですね。", "Negative"],
        ],
        labels: ["Positive", "Negative", "Neutral"],
        query,
        search_model: "ada",
        model: "curie",
        max_examples: 3,
    };
    const res = await openai.classification(opts)(app);
    console.log(res.label);
};
