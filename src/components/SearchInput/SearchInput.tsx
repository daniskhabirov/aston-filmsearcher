import React from "react";
import { TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type SearchInputProps = {
  search: TextInputProps;
};

const SearchInput = ({ search }: SearchInputProps) => {
  return (
    <TextInput
      sx={{ width: "300px" }}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      placeholder="Search"
      {...search}
    />
  );
};

export default SearchInput;
