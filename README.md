# gpt

OpenAI API made easy !!
now deno support !

<https://beta.openai.com/docs>

## install

```bash
yarn add @hikae/gpt
```

## example

```ts
import { App, openai } from "@hikae/gpt";

require("dotenv").config();

async function main() {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        throw new Error("[OPENAI_API_KEY] not found");
    }

    const app: App = openai.app(key);
    const result = await openai.classification({
        examples: [
            ["幸せ", "Positive"],
            ["私は悲しい、、", "Negative"],
            ["最高の気分だ！", "Positive"],
        ],
        labels: ["Positive", "Negative", "Neutral"],
        query: "今日は晴れの日だ",
        search_model: "ada",
        model: "ada",
    })(app);

    console.log(result.label);
    // result = 'Positive'
}
main();
```

## deno

- skypack

```ts
import { openai } from 'https://cdn.skypack.dev/@hikae/gpt?dts'
```

- esm.sh

```ts
import { openai } from 'https://esm.sh/@hikae/gpt?bundle'
```
