import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { MantineProvider } from "@mantine/core";

import App from "./App";

import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </MantineProvider>
  </React.StrictMode>,
);
