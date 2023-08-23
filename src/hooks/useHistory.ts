import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addDoc, collection } from "firebase/firestore";

import { SearchQueryParams } from "../interfaces";
import { db } from "../utils/firebase";
import { historyAdded } from "../app/reducers/userSlice";

type HistoryItemProps = {
  searchValue: SearchQueryParams;
};

const useHistory = () => {
  const dispatch = useDispatch();

  const addHistoryItem = useCallback(
    ({ searchValue }: HistoryItemProps) => {
      const date = new Date().toLocaleDateString();
      addDoc(collection(db, "history"), searchValue);
      dispatch(
        historyAdded({
          ...searchValue,
          date,
        }),
      );
    },
    [dispatch],
  );

  return { addHistoryItem };
};

export default useHistory;
