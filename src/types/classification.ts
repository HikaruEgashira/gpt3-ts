/**
 * @example
 * {
 *   "examples": [
 *     ["A happy moment", "Positive"],
 *     ["I am sad.", "Negative"],
 *     ["I am feeling awesome", "Positive"]
 *   ],
 *   "labels": ["Positive", "Negative", "Neutral"],
 *   "query": "It is a raining day :(",
 *   "search_model": "ada",
 *   "model": "curie"
 * }
 */
export type ClassificationOpts =
    | Required<{ model: string; query: string }>
    | Partial<{
          /**
           * [["The movie is so interesting.", "Positive"], ["It is quite boring.", "Negative"], ...]
           */
          examples: string[][];

          file: string;

          /**
           * @default null
           */
          labels: string[] | null;

          /**
           * @default ada
           */
          search_model: string;

          /**
           * @default 0
           */
          temperature: number;

          /**
           * @default null
           */
          logprobs: number | null;

          /**
           * @default 200
           */
          max_examples: number;

          /**
           * @default false
           */
          return_prompt: boolean;

          /**
           * @default false
           */
          return_metadata: boolean;

          /**
           * @default []
           */
          expand: string[];
      }>;

export interface Classification {
    completion: string;
    label: string;
    model: string;
    object: string;
    search_model: string;
    selected_examples: Document[];
}

export interface Document {
    document: number;
    label: string;
    text: string;
}
