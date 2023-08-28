import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { doc, updateDoc } from "firebase/firestore";

import { firestore } from "../utils/firebase";
import { historyAdded, historyDeletedByDate } from "../app/reducers/userSlice";
import { SearchFormValues } from "../components/SearchForm/SearchForm";
import { HistoryItem } from "../types";

interface AddItemProps {
  historyItems: HistoryItem[];
  userId: string;
  searchValues: SearchFormValues;
}

interface DeleteItemProps {
  historyItems: HistoryItem[];
  userId: string;
  historyDate: string;
}

const useHistory = () => {
  const dispatch = useDispatch();

  const addHistoryItem = useCallback(
    ({ historyItems, userId, searchValues }: AddItemProps) => {
      const date = new Date().toLocaleString();
      updateDoc(doc(firestore, "users", userId), {
        searchHistory: [
          ...historyItems,
          {
            ...searchValues,
            date,
          },
        ],
      });
      dispatch(
        historyAdded({
          ...searchValues,
          date,
        }),
      );
    },
    [dispatch],
  );

  const deleteHistoryItemByDate = useCallback(
    ({ historyItems, userId, historyDate }: DeleteItemProps) => {
      updateDoc(doc(firestore, "users", userId), {
        searchHistory: historyItems.filter((item) => item.date !== historyDate),
      });
      dispatch(historyDeletedByDate(historyDate));
    },
    [dispatch],
  );

  return { addHistoryItem, deleteHistoryItemByDate };
};

export default useHistory;
