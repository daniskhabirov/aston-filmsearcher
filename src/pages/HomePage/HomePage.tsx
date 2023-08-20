import React from "react";
import { Stack } from "@mantine/core";

import SearchForm from "../../components/SearchForm/SearchForm";

const HomePage = () => {
  // logic will be added later
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSubmit = () => {};

  return (
    <Stack>
      <SearchForm handleSubmit={handleSubmit} />
    </Stack>
  );
};

export default HomePage;
