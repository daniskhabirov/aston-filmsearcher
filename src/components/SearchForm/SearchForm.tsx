import React from "react";
import { Button, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";

import SearchInput from "../SearchInput/SearchInput";

type SearchFormProps = {
  handleSubmit: () => void;
};

const SearchForm = ({ handleSubmit }: SearchFormProps) => {
  const form = useForm({
    initialValues: {
      search: "",
    },
  });

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5} sx={{ marginTop: "15px" }}>
        <SearchInput search={form.getInputProps("search")} />
        <Button type="submit">Search</Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
