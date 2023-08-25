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
    historyDeletedById(state, action) {
      state.historyItems = state.historyItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    allHistoryDeleted(state) {
      state.historyItems = [];
    },
  },
});

export const { historyAdded, historyDeletedById, allHistoryDeleted } =
  userSlice.actions;

export default userSlice.reducer;
