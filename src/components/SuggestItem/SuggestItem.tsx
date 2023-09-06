import React from "react";
import { Button, Flex, Text } from "@mantine/core";

import { Link } from "react-router-dom";

import { Card } from "../CardItem/CardItem";

interface Props {
  card: Card;
}

const SuggestItem = ({ card }: Props) => {
  return (
    <Button
      component={Link}
      to={`/card/${card.imdbID}`}
      variant="light"
      color="gray"
      styles={{
        label: {
          width: "100%",
        },
      }}
    >
      <Flex justify="space-between" sx={{ width: "100%" }}>
        <Text size="xs">{card.title}</Text>
        <Text size="xs">{card.year}</Text>
      </Flex>
    </Button>
  );
};

export default SuggestItem;
