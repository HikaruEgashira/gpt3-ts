export interface UploadFileOpts {
    file: string;
    purpose: "search" | "answers" | "classifications" | "fine-tune";
}

export interface File {
    id: string;
    bytes: number;
    created_at: number;
    filename: string;
    format: string;
    purpose: string;
}

export interface FileList {
    data: File[];
}
