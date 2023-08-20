import React from "react";
import { Button, Flex, Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import SearchInput from "../SearchInput/SearchInput";
import YearInput from "../YearInput/YearInput";

type SearchFormProps = {
  form: UseFormReturnType<{
    search: string;
    year: string;
    type: string;
  }>;
  handleSubmit: () => void;
};

const SearchForm = ({ form, handleSubmit }: SearchFormProps) => {
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5} sx={{ marginTop: "15px" }}>
        <SearchInput search={form.getInputProps("search")} />
        <YearInput {...form.getInputProps("year")} />
        <Select
          allowDeselect
          placeholder="Type"
          data={["movie", "series", "episode"]}
          {...form.getInputProps("type")}
        />
        <Button type="submit">Search</Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
