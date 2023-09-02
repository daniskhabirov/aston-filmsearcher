import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type HistoryItem = {
  id: string;
  search: string;
  year: string;
  type: string;
  date: string;
};

type UserProps = {
  uid: string;
  email: string | null;
};

interface UserState {
  userId: string;
  email: string;
  historyItems: HistoryItem[];
}

const initialState: UserState = {
  userId: "",
  email: "",
  historyItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedIn(state, { payload: user }: PayloadAction<UserProps>) {
      state.userId = user.uid;
      state.email = user.email || "";
    },
    userLoggedOut(state) {
      state.userId = initialState.userId;
      state.email = initialState.email;
    },
    historyAdded(state, action) {
      state.historyItems.push(action.payload);
    },
    historyDeletedByDate(state, action) {
      state.historyItems = state.historyItems.filter(
        (item) => item.date !== action.payload,
      );
    },
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  historyAdded,
  historyDeletedByDate,
} = userSlice.actions;

export default userSlice.reducer;
