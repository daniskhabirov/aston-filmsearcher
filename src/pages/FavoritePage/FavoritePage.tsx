import React, { useEffect } from "react";

import { Flex, Stack, Text } from "@mantine/core";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getFavoriteCardIds,
  getFavoriteCards,
} from "../../app/reducers/selectors";
import CardItem from "../../components/CardItem/CardItem";
import { fetchFavoriteCards } from "../../app/reducers/userSlice";

const FavoritePage = () => {
  const dispatch = useAppDispatch();
  const favoriteCardIds = useAppSelector(getFavoriteCardIds);
  const favoriteCards = useAppSelector(getFavoriteCards);

  useEffect(() => {
    dispatch(fetchFavoriteCards());
  }, [favoriteCardIds]);

  return (
    <Stack>
      <Text align="center">Favorite movies</Text>
      <Flex justify={"center"} gap="md" wrap="wrap">
        {favoriteCards.map((card) => {
          return <CardItem key={card.imdbID} card={card} />;
        })}
      </Flex>
    </Stack>
  );
};

export default FavoritePage;
