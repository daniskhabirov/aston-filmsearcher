import React from "react";
import { TextInput, InputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface Props {
  search: InputProps;
}

const SearchInput = ({ search }: Props) => {
  return (
    <TextInput
      sx={{ width: "100%" }}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      placeholder="Search"
      {...search}
    />
  );
};

export default SearchInput;
