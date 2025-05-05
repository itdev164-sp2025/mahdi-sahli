import React from "react";
import { ThemeProvider } from "styled-components";
import gray from "./src/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={gray}>{element}</ThemeProvider>
);
