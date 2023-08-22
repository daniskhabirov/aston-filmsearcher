import React from "react";
import { useNavigate } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm";
import Form from "../../components/SearchForm/Form";

const HomePage = () => {
  const navigate = useNavigate();

  const form = Form();

  const handleSubmit = () => {
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}`,
    );
  };

  return <SearchForm form={form} handleSubmit={handleSubmit} />;
};

export default HomePage;
