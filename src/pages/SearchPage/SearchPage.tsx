import React from "react";
import { LoadingOverlay, Stack } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useForm } from "@mantine/form";

import SearchForm from "../../components/SearchForm/SearchForm";
import { apiSlice } from "../../api/apiSlice";
import CardList from "../../components/CardList/CardList";
import { searchValidate } from "../../utils/validate";

interface QueryParams {
  search: string;
  year: string;
  type: string;
}

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const params: QueryParams = {
    search: searchParams.get("search") || "",
    year: searchParams.get("year") || "",
    type: searchParams.get("type") || "",
  };

  const { data: cards, isFetching } = apiSlice.useFetchCardsQuery(params);

  const form = useForm({
    initialValues: { ...params },
    validate: {
      search: searchValidate,
    },
  });

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
