import React, { useMemo } from "react";

import {
  Card as CardContainer,
  Image,
  Stack,
  Text,
  Button,
  Flex,
} from "@mantine/core";
import { useNavigate } from "react-router";

import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectIsFavoriteByCardId } from "../../utils/redux";
import useFavoriteCard from "../../hooks/useFavoriteCards";
import { getFavoriteCardIds, getUserId } from "../../app/reducers/selectors";
import IfAuth from "../auth/IfAuth/IfAuth";

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

  const userId = useAppSelector(getUserId);
  const favoriteCardIds = useAppSelector(getFavoriteCardIds);
  const selectIsFavorite = useMemo(selectIsFavoriteByCardId, []);
  const { updateFavoriteList } = useFavoriteCard();

  const isFavorite = useAppSelector((state) => {
    return selectIsFavorite(state, card.imdbID);
  });

  const checkboxHandler = () => {
    updateFavoriteList({ userId, favoriteCardIds, cardId: card.imdbID });
  };

  const handleClick = () => {
    navigate(`/card/${card.imdbID}`);
  };

  return (
    <CardContainer
      shadow="sm"
      padding="lg"
      radius="md"
      sx={{
        width: "308px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        margin: "2px",
      }}
    >
      <CardContainer.Section>
        <Image src={card.poster} height={400} alt="img" />
      </CardContainer.Section>
      <Stack mt="md">
        <Text weight={500}>{card.title}</Text>
        <Flex gap={10} align="center" justify="space-between">
          <Text size="sm" color="dimmed">
            {card.year}, {card.type}
          </Text>
          <IfAuth>
            <FavoriteButton
              checked={isFavorite}
              checkboxHandler={checkboxHandler}
            />
          </IfAuth>
        </Flex>
        <Button
          variant="light"
          radius="md"
          fullWidth
          onClick={handleClick}
          sx={{
            ":hover": {
              cursor: "pointer",
              transform: "translateY(-3px)",
            },
          }}
        >
          More details
        </Button>
      </Stack>
    </CardContainer>
  );
};

export default CardItem;
