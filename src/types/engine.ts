export interface ListEngine {
    data: Engine[];
    object: string;
}

export interface Engine {
    id: string;
    object: string;
    owner: string;
    ready: boolean;
}
