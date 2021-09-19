import React from "react";
import "./App.css";

import { Button } from "@mui/material";

import { TypographyPaper } from "./components/typography/typography";

// ----------

function App() {
  return (
    <div className="App">
      {/* Typography */}
      <TypographyPaper />
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
