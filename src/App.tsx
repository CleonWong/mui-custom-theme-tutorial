import React from "react";
import "./App.css";

import { TypographyPaper } from "./components/typography/typography";
import { PaletteCard } from "./components/palette/paletteCard";
import { ButtonCard } from "./components/button/buttonCard";

// ----------

function App() {
  return (
    <div className="App">
      <TypographyPaper />
      <br />
      <PaletteCard />
      <br />
      <ButtonCard />
    </div>
  );
}

export default App;
