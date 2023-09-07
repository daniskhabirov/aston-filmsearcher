import React, { useEffect } from "react";

import { Flex, Stack, Text } from "@mantine/core";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getFavoriteCardIds,
  getFavoriteCards,
} from "../../app/reducers/selectors";
import { fetchFavoriteCards } from "../../app/reducers/userSlice";
import CardList from "../../components/CardList/CardList";

const FavoritePage = () => {
  const dispatch = useAppDispatch();
  const favoriteCardIds = useAppSelector(getFavoriteCardIds);
  const favoriteCards = useAppSelector(getFavoriteCards);

  useEffect(() => {
    dispatch(fetchFavoriteCards());
  }, [dispatch, favoriteCardIds]);

  return (
    <Stack>
      <Text align="center">Favorite movies</Text>
      {favoriteCards.length > 0 && (
        <Flex justify={"center"} gap="md" wrap="wrap">
          <CardList cards={favoriteCards} />
        </Flex>
      )}
    </Stack>
  );
};

export default FavoritePage;
