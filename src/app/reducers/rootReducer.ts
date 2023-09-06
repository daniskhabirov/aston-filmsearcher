import { combineReducers } from "@reduxjs/toolkit";

import { cardsApi } from "../../api/cardsApi";

import user from "./userSlice";

const rootReducer = combineReducers({
  user,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export default rootReducer;
