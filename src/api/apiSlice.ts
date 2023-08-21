import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import transformData from "../utils/transformData";

export interface CardResponse {
  [key: string]: string;
}

export interface Card {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export interface SearchResponse {
  Response: string;
  Search: CardResponse[];
  totalResults: number;
}

const API_KEY = process.env.REACT_APP_API_KEY;

export const apiSlice = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com" }),
  endpoints: (builder) => ({
    fetchCards: builder.query({
      query: ({ search, year, type }) => ({
        url: "/",
        params: { apikey: API_KEY, s: search, y: year, type: type },
      }),
      transformResponse: (data: SearchResponse) => {
        if (data.Response === "False") return [];
        const transformedData = data.Search.map((item) => {
          const result = transformData(item);
          return Object.fromEntries(result);
        });

        return transformedData;
      },
    }),
  }),
});
