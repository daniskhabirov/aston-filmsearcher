import React from "react";

import {
  Card as CardContainer,
  Image,
  Stack,
  Text,
  Button,
} from "@mantine/core";
import { useNavigate } from "react-router";

export interface Card {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
  actors?: string;
  genre?: string;
  country?: string;
  runtime?: string;
  director?: string;
  writer?: string;
  released?: string;
  imdbRating?: string;
  imdbVotes?: string;
  plot?: string;
}

interface Props {
  card: Card;
}

const CardItem = ({ card }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${card.imdbID}`);
  };

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
        <Button variant="light" radius="md" onClick={handleClick}>
          More details
        </Button>
      </Stack>
    </CardContainer>
  );
};

export default CardItem;
