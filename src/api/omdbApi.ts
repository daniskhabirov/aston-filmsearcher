import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import transformData from "../utils/transformData";

const API_KEY = process.env.REACT_APP_API_KEY;

interface SearchResult {
  [key: string]: string;
}

export interface SearchResponse {
  Response: string;
  Search: SearchResult[];
  totalResults: number;
}

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com" }),
  endpoints: (builder) => ({
    fetchCards: builder.query({
      query: ({ search, year, type }) => ({
        url: "/",
        params: { apikey: API_KEY, s: search, y: year, type: type },
      }),
      transformResponse: (data: SearchResponse) => {
        if (data.Response === "False") return [];
        const transformedData = data.Search.map((item) => transformData(item));
        return transformedData;
      },
    }),

    fetchCardById: builder.query({
      query: (id) => ({
        url: "/",
        params: { apikey: API_KEY, i: id },
      }),
      transformResponse: (data: CardResponse) => {
        if (data.Response === "False") return null;
        const result = transformData(data);
        return Object.fromEntries(result);
      },
    }),
  }),
});
