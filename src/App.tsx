import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Router from "./app/routing/router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
