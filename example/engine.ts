import { App, openai } from "../src/index";

export const engine = async (app: App) => {
    const result = await openai.engine()(app);
    console.log("[engine]", result);
};
