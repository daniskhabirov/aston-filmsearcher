import React from "react";
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

import { omdbApi } from "../../api/omdbApi";

const CardPage = () => {
  const { id } = useParams();
  const { data: card, isFetching } = omdbApi.useFetchCardByIdQuery(id);

  type MovieProps = {
    propName: string;
    propValue: string;
  };

  const MovieProp = ({ propName, propValue }: MovieProps) => {
    return (
      <Group>
        <Text color="dimmed">{propName}</Text>
        <Text>{propValue}</Text>
      </Group>
    );
  };

  return isFetching ? (
    <LoadingOverlay visible={true} />
  ) : card ? (
    <Grid sx={{ display: "flex", margin: "auto" }}>
      <Grid.Col span="content">
        <Image src={card.poster} alt="img" height={500} />
      </Grid.Col>
      <Grid.Col span="content">
        <Stack>
          <Title order={1}>{card.title}</Title>
          <MovieProp propName="Actors:" propValue={card.actors || ""} />
          <MovieProp propName="Genre:" propValue={card.genre || ""} />
          <MovieProp propName="Year:" propValue={card.year || ""} />
          <MovieProp propName="Counry:" propValue={card.country || ""} />
          <MovieProp propName="Runtime:" propValue={card.runtime || ""} />
          <MovieProp propName="Director:" propValue={card.director || ""} />
          <MovieProp propName="Writer:" propValue={card.writer || ""} />
          <MovieProp propName="Released:" propValue={card.released || ""} />
          <Group>
            <MovieProp propName="Rating:" propValue={card.imdbRating || ""} />
            <MovieProp propName="Votes:" propValue={card.imdbVotes || ""} />
          </Group>
          <MovieProp propName="Type:" propValue={card.type || ""} />
        </Stack>
      </Grid.Col>
      <Grid.Col>
        <Text color="dimmed">{card.plot || ""}</Text>
      </Grid.Col>
    </Grid>
  ) : (
    <Text>Data not found</Text>
  );
};

export default CardPage;
