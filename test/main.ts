import { App } from "../src";

require("dotenv").config();

async function main() {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY not found");
    }
    const app = new App({ key: OPENAI_API_KEY, engineId: "ada" });
    const result = await app.engine();
    console.log(result);

    // const completionOpts: CompletionOpts = {
    //     prompt: "Once upon a time",
    //     max_tokens: 5,
    //     temperature: 1,
    //     top_p: 1,
    //     n: 1,
    //     stream: false,
    //     logprobs: null,
    //     stop: "\n",
    // };
    // const result = await app.completion(completionOpts);
    // result.choices: [
    //     {
    //       text: ' there lived a mother and',
    //       index: 0,
    //       logprobs: null,
    //       finish_reason: 'length'
    //     }
    //   ]

    // const searchOpts: SearchOpts = {
    //     documents: ["White House", "hospital", "school"],
    //     query: "the president",
    // };
    // const result = await app.search(searchOpts);
    // console.log(result);
    // result = {
    //     object: "list",
    //     data: [
    //         { object: "search_result", document: 0, score: 215.56 },
    //         { object: "search_result", document: 1, score: 55.614 },
    //         { object: "search_result", document: 2, score: 40.932 },
    //     ],
    //     model: "davinci:2020-05-03",
    // };
}
main();
