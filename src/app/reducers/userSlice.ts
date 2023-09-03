import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";

import { firestore } from "../../utils/firebase";

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
  favoriteCardIds: string[];
}

const initialState: UserState = {
  userId: "",
  email: "",
  historyItems: [],
  favoriteCardIds: [],
};

export const fetchFirestoreData = createAsyncThunk(
  "user/fetchFirestoreData",
  async (userId: string) => {
    const response = await getDoc(doc(firestore, "users", userId));
    return response.data();
  },
);

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
    favoriteCardIdAdded(state, { payload: id }: PayloadAction<string>) {
      state.favoriteCardIds.push(id);
    },
    favoriteCardIdDeleted(state, { payload: id }: PayloadAction<string>) {
      state.favoriteCardIds = state.favoriteCardIds.filter(
        (cardId) => cardId !== id,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFirestoreData.fulfilled,
      (state, { payload: firestoreData }) => {
        if (firestoreData) {
          state.favoriteCardIds = firestoreData.favoriteCardIds;
          state.historyItems = firestoreData.searchHistory;
        }
      },
    );
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  historyAdded,
  historyDeletedByDate,
  favoriteCardIdAdded,
  favoriteCardIdDeleted,
} = userSlice.actions;

export default userSlice.reducer;
