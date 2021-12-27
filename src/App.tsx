import React from "react";
import { Header } from "../src/components/header";
import { Presentation } from "./components/presentation";
import { MoreInformation } from "./components/moreInformation";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Presentation />
      <MoreInformation />
    </div>
  );
}

export default App;
