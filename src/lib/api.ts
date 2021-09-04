import ky from "ky-universal";

// export const createFetch =
//     (apiKey: string) =>
//     async <T>(url: RequestInfo, init?: RequestInit): Promise<T> => {
//         const options: RequestInit = {
//             method: "GET",
//             ...init,
//             headers: {
//                 ...init?.headers,
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${apiKey}`,
//             },
//         };
//         const rowResponse = await fetch(url, options);
//         const response = await rowResponse.json();
//         return response as T;
//     };

export const createApi = (apiKey: string) =>
    ky.extend({
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    });
