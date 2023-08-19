import React, { FormEvent } from "react";
import { Button, Flex } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

import SearchInput from "../SearchInput/SearchInput";

export type SearchFormProps = {
  form: UseFormReturnType<
    {
      title: string;
    },
    (values: { title: string }) => {
      title: string;
    }
  >;
  handleSubmit: (
    values: { title: string },
    event: FormEvent<HTMLFormElement>,
  ) => void;
};

const SearchForm = ({ form, handleSubmit }: SearchFormProps) => {
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Flex justify="center" gap={5} sx={{ marginTop: "15px" }}>
        <SearchInput title={form.getInputProps("title")} />
        <Button type="submit">Search</Button>
      </Flex>
    </form>
  );
};

export default SearchForm;
