import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQuery } from "./baseQuery";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://admin.abc-data.ru`,
        headers: {
            "content-type": "text/plain;charset=UTF-8",
        },
        credentials:"include"
    }),
    reducerPath: "baseApi",
    endpoints: () => ({}),
    tagTypes: ["User"],
});
