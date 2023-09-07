import React, { useMemo } from "react";
import {
  Grid,
  Group,
  Image,
  LoadingOverlay,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { useParams } from "react-router-dom";

import { cardsApi } from "../../api/cardsApi";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useAppSelector } from "../../hooks/reduxHooks";
import { checkIsFavoriteByCardId } from "../../utils/redux";
import useFavoriteCard from "../../hooks/useFavoriteCards";
import { getFavoriteCardIds, getUserId } from "../../app/reducers/selectors";
import IfAuth from "../../components/auth/IfAuth/IfAuth";

interface Field {
  name: string;
  value: string;
}

const Field = ({ name, value }: Field) => {
  return (
    <Group>
      <Text color="dimmed">{name}</Text>
      <Text>{value}</Text>
    </Group>
  );
};

const CardPage = () => {
  const { id } = useParams();
  const { data: card, isFetching } = cardsApi.useFetchCardByIdQuery(id);

  const userId = useAppSelector(getUserId);
  const favoriteCardIds = useAppSelector(getFavoriteCardIds);
  const checkIsFavorite = useMemo(checkIsFavoriteByCardId, []);
  const { updateFavoriteList } = useFavoriteCard();

  const isFavorite = useAppSelector((state) => {
    if (card) {
      return checkIsFavorite(state, card.imdbID);
    }
    return false;
  });

  const checkboxHandler = () => {
    if (card) {
      updateFavoriteList({ userId, favoriteCardIds, cardId: card.imdbID });
    }
  };

  return isFetching ? (
    <LoadingOverlay visible={true} overlayOpacity={0} />
  ) : card ? (
    <Grid sx={{ display: "flex", margin: "auto" }}>
      <Grid.Col span="content">
        <Image src={card.poster} alt="img" height={500} />
      </Grid.Col>
      <Grid.Col span="content">
        <Stack>
          <Title order={1}>{card.title}</Title>
          <Field name="Actors:" value={card.actors || ""} />
          <Field name="Genre:" value={card.genre || ""} />
          <Field name="Year:" value={card.year || ""} />
          <Field name="Counry:" value={card.country || ""} />
          <Field name="Runtime:" value={card.runtime || ""} />
          <Field name="Director:" value={card.director || ""} />
          <Field name="Writer:" value={card.writer || ""} />
          <Field name="Released:" value={card.released || ""} />
          <Group>
            <Field name="Rating:" value={card.imdbRating || ""} />
            <Field name="Votes:" value={card.imdbVotes || ""} />
          </Group>
          <Field name="Type:" value={card.type || ""} />
          <IfAuth>
            <FavoriteButton
              checked={isFavorite}
              checkboxHandler={checkboxHandler}
            />
          </IfAuth>
        </Stack>
      </Grid.Col>
      <Grid.Col>
        <Text color="dimmed">{card.plot || ""}</Text>
      </Grid.Col>
    </Grid>
  ) : (
    <Text>Card not found</Text>
  );
};

export default CardPage;
