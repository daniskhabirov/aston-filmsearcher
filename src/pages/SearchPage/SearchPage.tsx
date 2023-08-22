import React from "react";
import { LoadingOverlay, Stack } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm";
import { apiSlice } from "../../api/apiSlice";
import CardList from "../../components/CardList/CardList";
import Form from "../../components/SearchForm/Form";
import { SearchQueryParams } from "../../interfaces";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryParams: SearchQueryParams = {
    search: searchParams.get("search") || "",
    year: searchParams.get("year") || "",
    type: searchParams.get("type") || "",
  };

  const { data: cards, isFetching } = apiSlice.useFetchCardsQuery(queryParams);

  const form = Form({ initialValues: { ...queryParams } });

  const handleSubmit = () => {
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}`,
    );
  };

  return (
    <Stack>
      <SearchForm form={form} handleSubmit={handleSubmit} />
      {isFetching ? (
        <LoadingOverlay visible={true} />
      ) : (
        <CardList cards={cards} />
      )}
    </Stack>
  );
};

export default SearchPage;
