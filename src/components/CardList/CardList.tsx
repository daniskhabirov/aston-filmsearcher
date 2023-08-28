import React from "react";
import { Box, Flex, Text } from "@mantine/core";

import { useSearchParams } from "react-router-dom";

import { Card } from "../CardItem/CardItem";
import CardItem from "../CardItem/CardItem";

interface Props {
  cards?: Card[];
}

const CardList = ({ cards }: Props) => {
  const [searchParams] = useSearchParams();
  const searchParamFilled = !!searchParams.get("search");

  return (
    <Box>
      {cards && cards?.length > 0 ? (
        <Flex gap="md" wrap="wrap" justify={"center"}>
          {cards.map((card) => {
            return <CardItem key={card.imdbID} card={card} />;
          })}
        </Flex>
      ) : (
        <Text align={"center"}>
          {searchParamFilled
            ? "Oh! Movies not found..."
            : "Please, search movies..."}
        </Text>
      )}
    </Box>
  );
};

export default CardList;
