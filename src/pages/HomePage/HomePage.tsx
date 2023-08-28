import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "@mantine/form";

import SearchForm from "../../components/SearchForm/SearchForm";
import { SearchFormValues } from "../../components/SearchForm/SearchForm";
import useHistory from "../../hooks/useHistory";

const HomePage = () => {
  const navigate = useNavigate();
  const { addHistoryItem } = useHistory();

  const initialValues = {
    search: "",
    year: "",
    type: "",
  };

  const form = useForm<SearchFormValues>({
    initialValues: { ...initialValues },
  });

  const handleSubmit = () => {
    addHistoryItem({ searchValues: form.values });
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}`,
    );
  };

  return <SearchForm form={form} handleSubmit={handleSubmit} />;
};

export default HomePage;
