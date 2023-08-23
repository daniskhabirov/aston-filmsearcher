import React from "react";
import { Button, Flex } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import SearchInput from "../SearchInput/SearchInput";
import YearInput from "../YearInput/YearInput";
import TypeInput from "../TypeInput/TypeInput";
import { SearchFormValues } from "../../interfaces";

type Props = {
  form: UseFormReturnType<SearchFormValues>;
  handleSubmit: () => void;
};

const SearchForm = ({ form, handleSubmit }: Props) => {
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5} sx={{ marginTop: "15px" }}>
        <SearchInput search={form.getInputProps("search")} />
        <YearInput year={form.getInputProps("year")} />
        <TypeInput type={form.getInputProps("type")} />
        <Button type="submit">Search</Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
