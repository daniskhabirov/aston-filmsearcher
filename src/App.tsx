import React from "react";

import { BrowserRouter } from "react-router-dom";

import { LoadingOverlay } from "@mantine/core";

import Header from "./components/Header/Header";
import Router from "./app/routing/router";
import useAuthLoadingState from "./hooks/useAuthLoadingState";

const App = () => {
  const authStateIsLoading = useAuthLoadingState();

  if (authStateIsLoading) {
    return <LoadingOverlay visible={true} overlayBlur={2} />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
