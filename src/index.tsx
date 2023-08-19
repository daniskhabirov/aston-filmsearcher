import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { store } from "./app/store";
import { router } from "./app/router";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <App />
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  </React.StrictMode>,
);
