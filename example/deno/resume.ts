import { App, openai } from "https://cdn.skypack.dev/@hikae/gpt?dts";

const noteToSummary = [
    "インタビューの内容からあなたの自己紹介文を作成してください:",
    "自己紹介",
];

type Interview = { q: string; a: string }[];
const buildQuery = (interview: Interview) => {
    return `${noteToSummary[0]}

${interview
    .map(
        ({ q, a }) => `
インタビュアー: ${q}
あなた: ${a}
`
    )
    .join("")}

${noteToSummary[1]}
`;
};

export const resume = (app: App) => async () => {
    const interview: Interview = [
        { q: "趣味は何ですか？", a: "プログラミング" },
        { q: "その趣味はいつからやっていますか？", a: "4年" },
        {
            q: "その趣味のどういったところが好きですか？",
            a: "生産性が上がるところ",
        },
    ];
    const prompt = buildQuery(interview);

    const res = await openai.completion({
        prompt,
        max_tokens: 100,
        stop: "。",
    })(app);
    console.log(`${prompt}${res.choices[0].text}`);
};
