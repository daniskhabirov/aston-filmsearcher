import React from "react";
import { Flex, LoadingOverlay, Pagination, Stack, Text } from "@mantine/core";

import { useNavigate } from "react-router";

import SearchForm from "../../components/SearchForm/SearchForm";
import { cardsApi } from "../../api/cardsApi";
import CardList from "../../components/CardList/CardList";
import useSearch from "../../hooks/useSearch";

const SearchPage = () => {
  const navigate = useNavigate();
  const { getInitialValues } = useSearch();
  const initialValues = getInitialValues();

  const { data: search, isFetching } =
    cardsApi.useFetchCardsQuery(initialValues);

  const handlePaginationChange = (page: number) => {
    navigate(
      `/search?search=${initialValues.search}` +
        `${initialValues.year ? `&year=${initialValues.year}` : ``}` +
        `${initialValues.type ? `&type=${initialValues.type}` : ``}` +
        `&page=${page}`,
    );
  };

  return (
    <Stack>
      <SearchForm isLoading={isFetching} />
      {isFetching ? (
        <LoadingOverlay visible={true} overlayOpacity={0} />
      ) : search && search.totalResults > 0 ? (
        <>
          <CardList cards={search.cards} />
          {search.totalResults > 10 && (
            <Flex justify="center">
              <Pagination
                value={Number(initialValues.page)}
                total={search.totalResults / 10}
                onChange={handlePaginationChange}
              />
            </Flex>
          )}
        </>
      ) : (
        <Text align="center">
          {initialValues.search
            ? `Oh! Movies not found...`
            : "Please, search movies..."}
        </Text>
      )}
    </Stack>
  );
};

export default SearchPage;
