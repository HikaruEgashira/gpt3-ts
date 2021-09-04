import { App } from "../src/class";

export const engine = async (app: App) => {
    const result = await app.engine();
    console.log(result);
};
