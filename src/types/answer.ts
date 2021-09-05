export interface AnswerOpts {
    model: string;
    question: string;
    examples?: [string, string][];
    examples_context?: string;
    documents?: string[];
    file?: string;
    search_model?: string;
    max_rerank?: number;
    temperature?: number;
    logprobs?: number | null;
    max_tokens?: number;
    logit_bias?: { [key: string]: number } | null;
    stop?: string | string[] | null;
    n?: number;
    return_prompt?: boolean;
    return_metadata?: boolean;
    expend?: string[];
}

export interface Answer {
    answers: string[];
    completion: string;
    model: string;
    search_model: string;
    selected_documents: {
        document: number;
        text: string;
    }[];
}
