import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

const selectFavoriteCardIds = (state: RootState) => state.user.favoriteCardIds;

export const selectIsFavoriteByCardId = () =>
  createSelector(
    selectFavoriteCardIds,
    (_: RootState, cardId: string) => cardId,
    (favoriteCardIds: string[], cardId: string) => {
      return favoriteCardIds.includes(cardId);
    },
  );
