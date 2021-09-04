export interface SearchOpts {
    documents?: string[];
    file?: string;
    query: string;
    maxRerank?: number;
    returnMetadata?: boolean;
}

export interface Search {
    data: Document[];
    object: string;
}
