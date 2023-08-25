import { combineReducers } from "@reduxjs/toolkit";

import { omdbApi } from "../../api/omdbApi";

import user from "./userSlice";

const rootReducer = combineReducers({
  user,
  [omdbApi.reducerPath]: omdbApi.reducer,
});

export default rootReducer;
