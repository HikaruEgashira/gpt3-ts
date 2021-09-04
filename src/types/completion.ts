export interface CompletionOpts {
    prompt?: string;
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    n?: number;
    stream?: boolean;
    logprobs?: number | null;
    echo?: boolean;
    stop?: string | string[];
    presence_penalty?: number;
    frequency_penalty?: number;
    best_of?: number;
    user?: string;
    logit_bias?: { [token: string]: number };
}

export interface Completion {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Choice[];
}

export interface Choice {
    text: string;
    index: number;
    logprobs: any;
    finish_reason: string;
}
