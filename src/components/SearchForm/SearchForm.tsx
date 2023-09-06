import React, { useState } from "react";
import { Button, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useNavigate } from "react-router";

import SearchInput from "../SearchInput/SearchInput";
import YearInput from "../YearInput/YearInput";
import TypeInput from "../TypeInput/TypeInput";
import { searchValueValidator } from "../../utils/validate";
import { useAppSelector } from "../../hooks/reduxHooks";
import useHistory from "../../hooks/useHistory";
import { getHistoryItems, getUserId } from "../../app/reducers/selectors";
import useSearch from "../../hooks/useSearch";
import useDebounce from "../../hooks/useDebounce";
import { omdbApi } from "../../api/omdbApi";

export interface SearchFormValues {
  search: string;
  year: string;
  type: string;
  page: string;
}

interface Props {
  isFetching?: boolean;
}

const SearchForm = ({ isFetching = false }: Props) => {
  const { getInitialValues, checkValuesChanged } = useSearch();

  const userId = useAppSelector(getUserId);
  const historyItems = useAppSelector(getHistoryItems);
  const { addHistoryItem } = useHistory();

  const [lastSearch, setLastSearch] = useState<SearchFormValues>();

  const navigate = useNavigate();

  const initialValues = getInitialValues();

  const form = useForm<SearchFormValues>({
    initialValues: { ...initialValues },
    validate: { search: searchValueValidator },
  });

  const debounceValue = useDebounce(form.values.search, 1000);
  const { data: fetchedData, isFetching: dropDownItemsIsFetching } =
    omdbApi.useFetchCardsQuery({
      ...initialValues,
      search: debounceValue,
    });

  const handleSubmit = () => {
    if (
      userId &&
      checkValuesChanged({
        lastSearch: lastSearch,
        currentSearch: { ...form.values },
      })
    ) {
      addHistoryItem({
        historyItems: historyItems,
        userId: userId,
        searchValues: form.values,
      });
    }
    setLastSearch(form.values);
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}&page=1`,
    );
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5}>
        <SearchInput
          search={form.getInputProps("search")}
          dropDownItems={fetchedData?.cards?.slice(0, 5)}
          dropDownItemsIsFetching={dropDownItemsIsFetching}
        />
        <YearInput year={form.getInputProps("year")} />
        <TypeInput type={form.getInputProps("type")} />
        <Button type="submit" loading={isFetching} sx={{ width: "150px" }}>
          Search
        </Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
