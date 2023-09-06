import React, { useState } from "react";
import { TextInput, InputProps, Popover, Stack, Loader } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { Card } from "../CardItem/CardItem";
import DropDownCardItem from "../DropDownCardItem/DropDownCardItem";

interface Props {
  search: InputProps;
  dropDownItems?: Card[];
  isFetching?: boolean;
}

const SearchInput = ({ search, dropDownItems, isFetching }: Props) => {
  const [popoverOpened, setPopoverOpened] = useState(false);

  const handleFocus = () => {
    setTimeout(() => {
      setPopoverOpened(!popoverOpened);
    }, 100);
  };

  return (
    <Popover width="target" opened={popoverOpened}>
      <Popover.Target>
        <TextInput
          sx={{ width: "100%" }}
          icon={<IconSearch size="1.2rem" />}
          placeholder="Search, at least 3 letters..."
          onFocusCapture={handleFocus}
          onBlurCapture={handleFocus}
          {...search}
        />
      </Popover.Target>
      {isFetching ? (
        <Popover.Dropdown sx={{ display: "flex", justifyContent: "center" }}>
          <Loader size="sm" />
        </Popover.Dropdown>
      ) : (
        dropDownItems &&
        dropDownItems.length > 0 && (
          <Popover.Dropdown>
            <Stack>
              {dropDownItems.map((item) => (
                <DropDownCardItem key={item.imdbID} card={item} />
              ))}
            </Stack>
          </Popover.Dropdown>
        )
      )}
    </Popover>
  );
};

export default SearchInput;
