export interface SearchOpts {
    documents?: string[];
    file?: string;
    query: string;
    maxRerank?: number;
    returnMetadata?: boolean;
}

export interface SearchDocument {
    document: number;
    object: string;
    score: number;
}

export interface Search {
    data: SearchDocument[];
    object: string;
}
