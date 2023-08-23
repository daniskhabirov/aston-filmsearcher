import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "@mantine/form";

import SearchForm from "../../components/SearchForm/SearchForm";
import { SearchFormValues } from "../../interfaces";

const HomePage = () => {
  const navigate = useNavigate();

  const initialValues = {
    search: "",
    year: "",
    type: "",
  };

  const form = useForm<SearchFormValues>({
    initialValues: { ...initialValues },
  });

  const handleSubmit = () => {
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}`,
    );
  };

  return <SearchForm form={form} handleSubmit={handleSubmit} />;
};

export default HomePage;
