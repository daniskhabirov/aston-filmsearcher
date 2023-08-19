import React, { useState } from "react";
import { Popover, TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type InputProps = {
  title: TextInputProps;
};

const SearchInput = ({ title }: InputProps) => {
  const [popoverOpened, setPopoverOpened] = useState(false);

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
          onChange={() =>
            String(title.value).length >= 1
              ? setPopoverOpened(true)
              : setPopoverOpened(false)
          }
        >
          <TextInput
            sx={{ width: "300px" }}
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
          />
        </div>
      </Popover.Target>
    </Popover>
  );
};

export default SearchInput;
