import React from "react";
import { Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { useForm } from "@mantine/form";

import SearchForm from "../../components/SearchForm/SearchForm";
import { searchValidate } from "../../utils/validate";

const HomePage = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      search: "",
      year: "",
      type: "",
    },
    validate: {
      search: searchValidate,
    },
  });

  const handleSubmit = () => {
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}`,
    );
  };

  return (
    <Stack>
      <SearchForm form={form} handleSubmit={handleSubmit} />
    </Stack>
  );
};

export default HomePage;
