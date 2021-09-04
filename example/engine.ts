import { App, openai } from "../src";

export const engine = async (app: App) => {
    const result = await openai.engine()(app);
    console.log(result);
};
