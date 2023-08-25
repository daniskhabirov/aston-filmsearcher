import React from "react";
import { Box, Flex, Text } from "@mantine/core";

import { Card } from "../CardItem/CardItem";
import CardItem from "../CardItem/CardItem";

interface Props {
  cards?: Card[];
}

const CardList = ({ cards }: Props) => {
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
          Oh! Movies not found, please search by another parameters...
        </Text>
      )}
    </Box>
  );
};

export default CardList;
