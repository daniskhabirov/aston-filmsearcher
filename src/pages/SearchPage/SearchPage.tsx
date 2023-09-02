import React from "react";
import { LoadingOverlay, Stack } from "@mantine/core";

import SearchForm from "../../components/SearchForm/SearchForm";
import { omdbApi } from "../../api/omdbApi";
import CardList from "../../components/CardList/CardList";
import useSearch from "../../hooks/useSearch";

const SearchPage = () => {
  const { getInitialValues } = useSearch();
  const initialValues = getInitialValues();

  const { data: cards, isFetching } = omdbApi.useFetchCardsQuery(initialValues);

  return (
    <Stack>
      <SearchForm />
      {isFetching ? (
        <LoadingOverlay visible={true} />
      ) : (
        <CardList cards={cards} />
      )}
    </Stack>
  );
};

export default SearchPage;
