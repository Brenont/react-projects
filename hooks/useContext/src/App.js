import React from "react";
import Routes from "./routes";
import { GlobalStyles } from "./styles/globalStyled";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}
