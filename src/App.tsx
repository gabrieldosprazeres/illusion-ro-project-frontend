import React from "react";
import { Header } from "../src/components/header";
import { Presentation } from "./components/presentation";
import { MoreInformation } from "./components/moreInformation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <MoreInformation />
    </div>
  );
}

export default App;
