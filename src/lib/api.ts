import ky from "ky-universal";

export const createApi = (apiKey: string) =>
    ky.extend({
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    });
