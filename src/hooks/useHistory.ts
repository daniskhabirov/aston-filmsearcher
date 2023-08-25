import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";

import { SearchQueryParams } from "../interfaces";
import { db } from "../utils/firebase";
import { historyAdded, historyDeletedById } from "../app/reducers/userSlice";

type HistoryItemProps = {
  searchValue: SearchQueryParams;
};

const useHistory = () => {
  const dispatch = useDispatch();

  const addHistoryItem = useCallback(
    ({ searchValue }: HistoryItemProps) => {
      const date = new Date().toLocaleString();
      const newHistoryRef = doc(collection(db, "history"));
      setDoc(newHistoryRef, searchValue);
      const { id } = newHistoryRef;
      dispatch(
        historyAdded({
          id,
          ...searchValue,
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
