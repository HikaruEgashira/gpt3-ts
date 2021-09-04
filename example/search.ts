import { App } from "../src/class";
import { SearchOpts } from "../src/types";

export const search = async (app: App) => {
    const searchOpts: SearchOpts = {
        documents: ["White House", "hospital", "school"],
        query: "the president",
    };
    const result = await app.search(searchOpts);
    console.log(result);
    // result = {
    //     object: "list",
    //     data: [
    //         { object: "search_result", document: 0, score: 215.56 },
    //         { object: "search_result", document: 1, score: 55.614 },
    //         { object: "search_result", document: 2, score: 40.932 },
    //     ],
    //     model: "davinci:2020-05-03",
    // };
};
