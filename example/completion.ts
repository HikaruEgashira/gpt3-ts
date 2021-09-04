import { App, openai } from "../src";
import { CompletionOpts } from "../src/types";

export const completion = async (app: App) => {
    const completionOpts: CompletionOpts = {
        prompt: "Once upon a time",
        max_tokens: 5,
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
        stop: "\n",
    };
    const result = await openai.completion(completionOpts)(app);
    console.log(result);

    // result.choices: [
    //     {
    //       text: ' there lived a mother and',
    //       index: 0,
    //       logprobs: null,
    //       finish_reason: 'length'
    //     }
    //   ]
};
