import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingOverlay } from "@mantine/core";

import HomePage from "../../pages/HomePage/HomePage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import HistoryPage from "../../pages/HistoryPage/HistoryPage";
import CardPage from "../../pages/CardPage/CardPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import FavoritePage from "../../pages/FavoritePage/FavoritePage";

import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<ProtectedRoute />}>
          <Route index element={<HistoryPage />} />
        </Route>
        <Route path="/favorite" element={<ProtectedRoute />}>
          <Route index element={<FavoritePage />} />
        </Route>
        <Route path="/card/:id" element={<CardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
