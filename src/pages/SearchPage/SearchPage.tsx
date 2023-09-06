import React from "react";
import { Flex, LoadingOverlay, Pagination, Stack } from "@mantine/core";

import { useNavigate } from "react-router";

import SearchForm from "../../components/SearchForm/SearchForm";
import { omdbApi } from "../../api/omdbApi";
import CardList from "../../components/CardList/CardList";
import useSearch from "../../hooks/useSearch";

const SearchPage = () => {
  const navigate = useNavigate();
  const { getInitialValues } = useSearch();
  const initialValues = getInitialValues();

  const { data: search, isFetching } =
    omdbApi.useFetchCardsQuery(initialValues);

  const handlePaginationChange = (page: number) => {
    navigate(
      `/search?search=${initialValues.search}&year=${initialValues.year}&type=${initialValues.type}&page=${page}`,
    );
  };

  return (
    <Stack>
      <SearchForm isFetching={isFetching} />
      {isFetching ? (
        <LoadingOverlay visible={true} overlayOpacity={0} />
      ) : (
        search && (
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
        )
      )}
    </Stack>
  );
};

export default SearchPage;
