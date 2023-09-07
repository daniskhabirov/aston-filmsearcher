import { configureStore } from "@reduxjs/toolkit";

import { cardsApi } from "../api/cardsApi";

import rootReducer from "./reducers/rootReducer";
import userNameMiddleware from "./middleware/userNameMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cardsApi.middleware,
      userNameMiddleware.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
