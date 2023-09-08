import React from "react";

import { Flex, Stack, Text } from "@mantine/core";

import { useAppSelector } from "../../hooks/reduxHooks";
import { getFavoriteCards } from "../../app/reducers/selectors";
import CardList from "../../components/CardList/CardList";

const FavoritePage = () => {
  const favoriteCards = useAppSelector(getFavoriteCards);

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
