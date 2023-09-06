import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { doc, updateDoc } from "firebase/firestore";

import {
  favoriteCardIdAdded,
  favoriteCardIdDeleted,
} from "../app/reducers/userSlice";
import { db } from "../utils/firebase";

type UpdateFavoriteListProps = {
  userId: string;
  favoriteCardIds: string[];
  cardId: string;
};

const useFavoriteCard = () => {
  const dispatch = useDispatch();

  const updateFavoriteList = useCallback(
    ({ userId, favoriteCardIds, cardId }: UpdateFavoriteListProps) => {
      let result = Array.from(favoriteCardIds);
      if (favoriteCardIds.includes(cardId)) {
        result = result.filter((id) => id !== cardId);
        dispatch(favoriteCardIdDeleted(cardId));
      } else {
        result.push(cardId);
        dispatch(favoriteCardIdAdded(cardId));
      }
      updateDoc(doc(db, "users", userId), {
        favoriteCardIds: result,
      });
    },
    [dispatch],
  );

  return { updateFavoriteList };
};

export default useFavoriteCard;
