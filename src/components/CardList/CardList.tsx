import React from "react";
import { Box, Flex } from "@mantine/core";

import { Card } from "../CardItem/CardItem";
import CardItem from "../CardItem/CardItem";

interface Props {
  cards: Card[];
}

const CardList = ({ cards }: Props) => {
  return (
    <Box>
      <Flex gap="md" wrap="wrap" justify={"center"}>
        {cards.map((card) => (
          <CardItem key={card.imdbID} card={card} />
        ))}
      </Flex>
    </Box>
  );
};

export default CardList;
