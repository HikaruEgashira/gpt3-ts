import { App, openai } from "@hikae/gpt";

export const engine = async (app: App) => {
    const result = await openai.engine()(app);
    console.log("[engine]", result);
};
