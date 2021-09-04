import { openai } from "@hikae/gpt";
import { classification } from "./classification";
import { completion } from "./completion";
import { engine } from "./engine";
import { search } from "./search";

import dotenv from "dotenv";
dotenv.config();

async function main() {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        throw new Error("[OPENAI_API_KEY] not found");
    }

    const app = openai.app(key);

    classification(app);
    completion(app);
    engine(app);
    search(app);
}
main();
