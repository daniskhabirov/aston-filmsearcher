import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingOverlay } from "@mantine/core";

import HomePage from "../../pages/HomePage/HomePage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import HistoryPage from "../../pages/HistoryPage/HistoryPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

import SignUpPage from "../../pages/SignUpPage/SignUpPage";

import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<PrivateRoute />}>
          <Route index element={<HistoryPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
