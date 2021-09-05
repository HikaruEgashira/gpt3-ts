import { OPEN_AI_URL } from "./config";

export const completionURL = (engine: string) =>
    `${OPEN_AI_URL}/engines/${engine}/completions`;

export const searchURL = (engine: string) =>
    `${OPEN_AI_URL}/engines/${engine}/search`;

export const engineURL = (engine: string) => `${OPEN_AI_URL}/engines/${engine}`;
export const engineListURL = () => `${OPEN_AI_URL}/engines`;

export const classificationsURL = () => `${OPEN_AI_URL}/classifications`;

export const answersURL = () => `${OPEN_AI_URL}/answers`;

export const filesURL = () => `${OPEN_AI_URL}/files`;
export const fileURL = (fileId: string) => `${OPEN_AI_URL}/files/${fileId}`;
export const fileContentURL = (fileId: string) =>
    `${OPEN_AI_URL}/files/${fileId}/content`;

export const fineTunesURL = () => `${OPEN_AI_URL}/fine-tunes`;
export const fineTuneURL = (fineTuneId: string) =>
    `${OPEN_AI_URL}/fine-tunes/${fineTuneId}`;
export const fineTuneCancelURL = (fineTuneId: string) =>
    `${OPEN_AI_URL}/fine-tunes/${fineTuneId}/cancel`;
export const fineTuneEventURL = (fineTuneId: string) =>
    `${OPEN_AI_URL}/fine-tunes/${fineTuneId}/event`;
