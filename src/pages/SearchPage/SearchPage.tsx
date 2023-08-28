import React from "react";
import { LoadingOverlay, Stack } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useForm } from "@mantine/form";

import SearchForm from "../../components/SearchForm/SearchForm";
import { omdbApi } from "../../api/omdbApi";
import CardList from "../../components/CardList/CardList";
import { SearchFormValues } from "../../components/SearchForm/SearchForm";

interface SearchQueryParams {
  search: string;
  year: string;
  type: string;
}

import useHistory from "../../hooks/useHistory";
import { searchValueValidator } from "../../utils/validate";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getHistoryItems, getUserId } from "../../app/reducers/selectors";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addHistoryItem } = useHistory();
  const userId = useAppSelector(getUserId);
  const historyItems = useAppSelector(getHistoryItems);

  const queryParams: SearchQueryParams = {
    search: searchParams.get("search") || "",
    year: searchParams.get("year") || "",
    type: searchParams.get("type") || "",
  };

  const { data: cards, isFetching } = omdbApi.useFetchCardsQuery(queryParams);

  const form = useForm<SearchFormValues>({
    initialValues: { ...queryParams },
    validate: { search: searchValueValidator },
  });

  const handleSubmit = () => {
    addHistoryItem({
      historyItems: historyItems,
      userId: userId,
      searchValues: form.values,
    });
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
