import React from "react";
import { Box, Flex, Text } from "@mantine/core";

import { Card } from "../../api/apiSlice";
import CardItem from "../CardItem/CardItem";

interface CardsProps {
  cards?: Card[];
}

const CardList = ({ cards }: CardsProps) => {
  return (
    <Box>
      {cards && cards?.length > 0 ? (
        <Flex gap="md" wrap="wrap" justify={"center"}>
          {cards.map((card) => {
            return <CardItem key={card.imdbID} card={card} />;
          })}
        </Flex>
      ) : (
        <Text align={"center"}>Please, search movies</Text>
      )}
    </Box>
  );
};

export default CardList;
