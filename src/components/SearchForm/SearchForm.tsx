import React from "react";
import { Button, Flex } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import SearchInput from "../SearchInput/SearchInput";
import YearInput from "../YearInput/YearInput";
import TypeInput from "../TypeInput/TypeInput";

type Props = {
  form: UseFormReturnType<{
    search: string;
    year: string;
    type: string;
  }>;
  handleSubmit: () => void;
};

const SearchForm = ({ form, handleSubmit }: Props) => {
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5} sx={{ marginTop: "15px" }}>
        <SearchInput props={form.getInputProps("search")} />
        <YearInput props={form.getInputProps("year")} />
        <TypeInput props={form.getInputProps("type")} />
        <Button type="submit">Search</Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
