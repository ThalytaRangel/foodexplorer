import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import { register } from "swiper/element/bundle";
import { SearchProvider } from "./hooks/search";

register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <SearchProvider>
          <Routes />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
