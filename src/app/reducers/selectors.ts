import { HistoryItem } from "../../types";
import { RootState } from "../store";

export const getUserId = (state: RootState): string => state.user.userId;
export const getUserEmail = (state: RootState): string => state.user.email;
export const getHistoryItems = (state: RootState): HistoryItem[] =>
  state.user.historyItems;
