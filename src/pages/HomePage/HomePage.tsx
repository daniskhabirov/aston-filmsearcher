import React from "react";
import { useNavigate } from "react-router-dom";

import SearchForm from "../../components/SearchForm/SearchForm";
import Form from "../../components/SearchForm/Form";
import useHistory from "../../hooks/useHistory";

const HomePage = () => {
  const navigate = useNavigate();
  const { addHistoryItem } = useHistory();

  const form = Form();

  const handleSubmit = () => {
    addHistoryItem({ searchValue: form.values });
    navigate(
      `/search?search=${form.values.search}&year=${form.values.year}&type=${form.values.type}`,
    );
  };

  return <SearchForm form={form} handleSubmit={handleSubmit} />;
};

export default HomePage;
