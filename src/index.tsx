import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// For custom theme:
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appTheme } from "./customTheme/appTheme";

// ----------

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
