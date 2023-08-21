import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import CardPage from "../pages/CardPage/CardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/card/:id",
    element: <CardPage />,
  },
]);
