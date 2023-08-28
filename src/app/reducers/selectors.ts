import { HistoryItem } from "../../types";
import { RootState } from "../store";

export const getHistoryItems = (state: RootState): HistoryItem[] =>
  state.user.historyItems;
