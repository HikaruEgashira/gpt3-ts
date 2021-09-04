import { openai } from "../src";
import { classification } from "./classification";
import { completion } from "./completion";
import { engine } from "./engine";
import { search } from "./search";

require("dotenv").config();

async function main() {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        throw new Error("[OPENAI_API_KEY] not found");
    }

    const app = openai.api(key);

    classification(app);
    completion(app);
    engine(app);
    search(app);
}
main();
