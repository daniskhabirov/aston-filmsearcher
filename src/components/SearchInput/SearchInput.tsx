import React from "react";
import { TextInput, InputProps, Popover, Stack, Loader } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { Card } from "../CardItem/CardItem";
import DropDownItem from "../DropDownCardItem/DropDownCardItem";

interface Props {
  search: InputProps;
  dropDownItems?: Card[];
  isFetchingDropDownItems?: boolean;
}

const SearchInput = ({
  search,
  dropDownItems,
  isFetchingDropDownItems,
}: Props) => {
  return (
    <Popover width="target">
      <Popover.Target>
        <TextInput
          sx={{ width: "100%" }}
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          placeholder="Search, at least 3 symbol..."
          {...search}
        />
      </Popover.Target>
      {isFetchingDropDownItems ? (
        <Popover.Dropdown sx={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </Popover.Dropdown>
      ) : (
        dropDownItems &&
        dropDownItems.length > 0 && (
          <Popover.Dropdown>
            <Stack>
              {dropDownItems.map((item) => (
                <DropDownItem key={item.imdbID} card={item} />
              ))}
            </Stack>
          </Popover.Dropdown>
        )
      )}
    </Popover>
  );
};

export default SearchInput;
