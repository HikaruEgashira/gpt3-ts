// pnpm esno example/fp.ts
import { api, listEngines } from "../src/fp";

require("dotenv").config();

async function main() {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        throw new Error("[OPENAI_API_KEY] not found");
    }

    const app = api(key);
    const res = await listEngines()(app);
    console.log(res);
}
main();
