import { combineReducers } from "@reduxjs/toolkit";

import { cardApi } from "../../api/cardApi";

import user from "./userSlice";

const rootReducer = combineReducers({
  user,
  [cardApi.reducerPath]: cardApi.reducer,
});

export default rootReducer;
