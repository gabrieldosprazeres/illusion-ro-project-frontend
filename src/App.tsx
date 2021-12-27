import React from "react";
import { Header } from "../src/components/header";
import { Presentation } from "./components/presentation";
import { MoreInformation } from "./components/moreInformation";
import GlobalStyle from "./styles/global";
import { ServerStatus } from "./components/serverStatus";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Presentation />
      <MoreInformation />
      <ServerStatus />
    </div>
  );
}

export default App;
