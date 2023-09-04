import React from "react";
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

export interface SearchFormValues {
  search: string;
  year: string;
  type: string;
}

interface Props {
  isFetching?: boolean;
}

const SearchForm = ({ isFetching = false }: Props) => {
  const { getInitialValues } = useSearch();
  const userId = useAppSelector(getUserId);
  const historyItems = useAppSelector(getHistoryItems);
  const { addHistoryItem } = useHistory();
  const navigate = useNavigate();

  const initialValues = getInitialValues();

  const form = useForm<SearchFormValues>({
    initialValues: { ...initialValues },
    validate: { search: searchValueValidator },
  });

  const handleSubmit = () => {
    if (userId) {
      addHistoryItem({
        historyItems: historyItems,
        userId: userId,
        searchValues: form.values,
      });
    }
    navigate(
      `/search?search=${form.values.search}` +
        `${form.values.year ? `&year=${form.values.year}` : ``}` +
        `${form.values.type ? `&type=${form.values.type}` : ``}`,
    );
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5}>
        <SearchInput search={form.getInputProps("search")} />
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
