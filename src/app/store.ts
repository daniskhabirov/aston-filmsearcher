import { configureStore } from "@reduxjs/toolkit";

import { Action, ThunkDispatch } from "@reduxjs/toolkit";

import { omdbApi } from "../api/omdbApi";

import rootReducer from "./reducers/rootReducer";
import userNameMiddleware from "./middleware/userNameMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      omdbApi.middleware,
      userNameMiddleware.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncAppDispatch = ThunkDispatch<RootState, string, Action>;
