import React from "react";
import "./App.css";

import { Button, Typography } from "@mui/material";

// ---

function App() {
  return (
    <div className="App">
      {/* Typography */}
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body1">
        body1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Typography>
      <Typography variant="body2">
        body2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Typography>
      <Typography variant="overline">Overline (Pretitle)</Typography>
      <br />
      {/* Buttons */}
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
    </div>
  );
}

export default App;
