import React, { useState } from "react";
import { Popover, TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type SearchInputProps = {
  search: TextInputProps;
};

const SearchInput = ({ search }: SearchInputProps) => {
  const [popoverOpened, setPopoverOpened] = useState(false);

  const searchInputChange = () =>
    setPopoverOpened(String(search.value).length >= 1 ? true : false);

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      width="target"
      transitionProps={{ transition: "pop" }}
    >
      <Popover.Target>
        <div
          onBlurCapture={() => setPopoverOpened(false)}
          onChange={searchInputChange}
        >
          <TextInput
            sx={{ width: "300px" }}
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            placeholder="Search"
            {...search}
          />
        </div>
      </Popover.Target>
    </Popover>
  );
};

export default SearchInput;
