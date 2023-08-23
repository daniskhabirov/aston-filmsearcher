import { createSlice } from "@reduxjs/toolkit";

import { UserState } from "../../interfaces";

const initialState: UserState = {
  historyItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    historyAdded(state, action) {
      state.historyItems.push(action.payload);
    },
  },
});

export const { historyAdded } = userSlice.actions;

export default userSlice.reducer;
