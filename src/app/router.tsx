import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingOverlay } from "@mantine/core";

import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";

const Router = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
