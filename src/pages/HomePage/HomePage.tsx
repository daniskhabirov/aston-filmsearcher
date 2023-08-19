import React from "react";
import { Stack } from "@mantine/core";

import SearchForm from "../../components/SearchForm/SearchForm";

const HomePage = () => {
  const handleSubmit = () => {
    return null;
  };

  return (
    <Stack>
      <SearchForm handleSubmit={handleSubmit} />
    </Stack>
  );
};

export default HomePage;
