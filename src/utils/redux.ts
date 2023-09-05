import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

const getFavoriteCardIds = (state: RootState) => state.user.favoriteCardIds;

export const checkIsFavoriteByCardId = () =>
  createSelector(
    getFavoriteCardIds,
    (_: RootState, cardId: string) => cardId,
    (favoriteCardIds: string[], cardId: string) => {
      return favoriteCardIds.includes(cardId);
    },
  );
