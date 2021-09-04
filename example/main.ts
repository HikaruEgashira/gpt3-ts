import { App } from "../src/class";
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

    const app = new App({ key });

    // classification(app);
    // completion(app);
    // engine(app);
    // search(app);
}
main();
