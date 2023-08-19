import React from "react";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import SearchForm from "../../components/SearchForm/SearchForm";

const HomePage = () => {
  const form = useForm({
    initialValues: {
      title: "",
    },
  });

  const handleSubmit = () => {
    return null;
  };

  return (
    <Stack>
      <SearchForm form={form} handleSubmit={handleSubmit} />
    </Stack>
  );
};

export default HomePage;
