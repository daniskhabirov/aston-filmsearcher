import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingOverlay } from "@mantine/core";

import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import CardPage from "../pages/CardPage/CardPage";

const Router = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
