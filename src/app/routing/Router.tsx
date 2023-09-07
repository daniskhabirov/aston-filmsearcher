import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingOverlay } from "@mantine/core";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("../../pages/SearchPage/SearchPage"));
const HistoryPage = lazy(() => import("../../pages/HistoryPage/HistoryPage"));
const CardPage = lazy(() => import("../../pages/CardPage/CardPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const FavoritePage = lazy(
  () => import("../../pages/FavoritePage/FavoritePage"),
);

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
