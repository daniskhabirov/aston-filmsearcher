import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { MantineProvider } from "@mantine/core";

import { Notifications } from "@mantine/notifications";

import App from "./App";

import { store } from "./app/store";
import { ThemeProvider } from "./utils/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ReduxProvider store={store}>
          <Notifications />
          <App />
        </ReduxProvider>
      </MantineProvider>
    </ThemeProvider>
  </StrictMode>,
);
