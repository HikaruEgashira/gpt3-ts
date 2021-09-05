import { App, openai } from "https://cdn.skypack.dev/@hikae/gpt?dts";

export const tldr = (text: string) => async (app: App) => {
    const result = await openai.completion({
        prompt: `${text}\n\ntl;dr:`,
        temperature: 0.3,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: "。",
    })(app);
    return result.choices[0].text;
};
