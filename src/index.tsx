import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./app/store";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
