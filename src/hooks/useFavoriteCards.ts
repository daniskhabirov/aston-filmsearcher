import { useCallback } from "react";

import { doc, updateDoc } from "firebase/firestore";

import {
  favoriteCardIdAdded,
  favoriteCardIdDeleted,
  fetchFavoriteCards,
} from "../app/reducers/userSlice";
import { db } from "../utils/firebase";

import { useAppDispatch } from "./reduxHooks";

type UpdateFavoriteListProps = {
  userId: string;
  favoriteCardIds: string[];
  cardId: string;
};

const useFavoriteCard = () => {
  const dispatch = useAppDispatch();

  const updateFavoriteList = useCallback(
    async ({ userId, favoriteCardIds, cardId }: UpdateFavoriteListProps) => {
      let result = Array.from(favoriteCardIds);
      if (favoriteCardIds.includes(cardId)) {
        result = result.filter((id) => id !== cardId);
        dispatch(favoriteCardIdDeleted(cardId));
      } else {
        result.push(cardId);
        dispatch(favoriteCardIdAdded(cardId));
      }
      await dispatch(fetchFavoriteCards());
      updateDoc(doc(db, "users", userId), {
        favoriteCardIds: result,
      });
    },
    [dispatch],
  );

  return { updateFavoriteList };
};

export default useFavoriteCard;
