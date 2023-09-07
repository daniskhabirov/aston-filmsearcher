import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";

import { Notifications } from "@mantine/notifications";

import { ErrorBoundary } from "react-error-boundary";

import App from "./App";

import { store } from "./app/store";
import { ThemeProvider } from "./utils/themeContext";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Provider store={store}>
            <Notifications />
            <App />
          </Provider>
        </MantineProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
