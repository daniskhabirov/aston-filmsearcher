import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";

import { db } from "../utils/firebase";
import { historyAdded, historyDeletedById } from "../app/reducers/userSlice";
import { SearchFormValues } from "../components/SearchForm/SearchForm";

interface HistoryItemProps {
  searchValues: SearchFormValues;
}

const useHistory = () => {
  const dispatch = useDispatch();

  const addHistoryItem = useCallback(
    ({ searchValues }: HistoryItemProps) => {
      const date = new Date().toLocaleString();
      const newHistoryRef = doc(collection(db, "history"));
      setDoc(newHistoryRef, searchValues);
      const { id } = newHistoryRef;
      dispatch(
        historyAdded({
          id,
          ...searchValues,
          date,
        }),
      );
    },
    [dispatch],
  );

  const deleteHistoryById = useCallback(
    (historyId: string) => {
      deleteDoc(doc(db, "history", historyId));
      dispatch(historyDeletedById(historyId));
    },
    [dispatch],
  );

  return { addHistoryItem, deleteHistoryById };
};

export default useHistory;
