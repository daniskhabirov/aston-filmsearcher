import { RootState } from "../store";

import { HistoryItem } from "./userSlice";

export const getHistoryItems = (state: RootState): HistoryItem[] =>
  state.user.historyItems;
