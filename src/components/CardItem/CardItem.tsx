import React from "react";

import {
  Card as CardContainer,
  Image,
  Stack,
  Text,
  Button,
} from "@mantine/core";

import { Card } from "../../interfaces";

type CardProps = {
  card: Card;
};

const CardItem = ({ card }: CardProps) => {
  return (
    <CardContainer
      shadow="sm"
      padding="lg"
      radius="md"
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "inherit",
      }}
    >
      <CardContainer.Section>
        <Image src={card.poster} height={400} alt="img" />
      </CardContainer.Section>
      <Stack mt="md">
        <Text weight={500}>{card.title}</Text>
        <Text size="sm" color="dimmed">
          {card.year}, {card.type}
        </Text>
        <Button variant="light" radius="md">
          More details
        </Button>
      </Stack>
    </CardContainer>
  );
};

export default CardItem;
