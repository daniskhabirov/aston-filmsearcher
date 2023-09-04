import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import transformData from "../utils/transformData";
import { Card } from "../components/CardItem/CardItem";
import { SearchFormValues } from "../components/SearchForm/SearchForm";

export const API_KEY = process.env.REACT_APP_API_KEY;

export interface Entity {
  [key: string]: string;
}

interface ServerResponse {
  Response: string;
  Search: Entity[];
  totalResults: number;
}

interface TransformedResponse {
  cards: Card[];
  totalResults: number;
}

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com" }),
  endpoints: (builder) => ({
    fetchCards: builder.query<TransformedResponse, SearchFormValues>({
      query: ({ search, year, type, page }) => ({
        url: "/",
        params: { apikey: API_KEY, s: search, y: year, type: type, page: page },
      }),
      transformResponse: (response: ServerResponse): TransformedResponse => {
        if (response.Response === "False")
          return { cards: [], totalResults: 0 };
        return {
          cards: response.Search.map(transformData),
          totalResults: response.totalResults,
        };
      },
    }),

    fetchCardById: builder.query({
      query: (id) => ({
        url: "/",
        params: { apikey: API_KEY, i: id },
      }),
      transformResponse: (response: Entity) => {
        if (response.Response === "False") return null;
        return transformData(response);
      },
    }),
  }),
});
