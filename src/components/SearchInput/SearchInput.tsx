import React, { useState } from "react";
import { TextInput, InputProps, Popover, Stack, Loader } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { Card } from "../CardItem/CardItem";
import DropDownItem from "../DropDownCardItem/DropDownCardItem";

interface Props {
  search: InputProps;
  dropDownItems?: Card[];
  dropDownItemsIsFetching?: boolean;
}

const SearchInput = ({
  search,
  dropDownItems,
  dropDownItemsIsFetching,
}: Props) => {
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
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          placeholder="Search, at least 3 letters..."
          onFocusCapture={handleFocus}
          onBlurCapture={handleFocus}
          {...search}
        />
      </Popover.Target>
      {dropDownItemsIsFetching ? (
        <Popover.Dropdown sx={{ display: "flex", justifyContent: "center" }}>
          <Loader size="sm" />
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
