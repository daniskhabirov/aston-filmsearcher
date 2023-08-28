import { HistoryItem } from "../../types";
import { RootState } from "../store";

export const getUserId = (state: RootState): string => state.user.userId;
export const getHistoryItems = (state: RootState): HistoryItem[] =>
  state.user.historyItems;

export const getFirstLetterEmail = (state: RootState): string =>
  state.user.email.slice(0, 1).toUpperCase();
