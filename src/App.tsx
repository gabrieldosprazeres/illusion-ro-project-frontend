import React from "react";
import { Header } from "../src/components/header";
import { Presentation } from "./components/presentation";
import { MoreInformation } from "./components/moreInformation";
import GlobalStyle from "./styles/global";
import { ServerStatus } from "./components/serverStatus";
import { Rewards } from "./components/rewards";
import { ClasseContainer } from "./components/classesContainer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Presentation />
      <MoreInformation />
      <ServerStatus />
      <ClasseContainer />
      <Rewards />
    </div>
  );
}

export default App;
