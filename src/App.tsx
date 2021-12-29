import React from "react";
import GlobalStyle from "./styles/global";
// import { Header } from "../src/components/header";
// import { Presentation } from "./components/presentation";
// import { MoreInformation } from "./components/moreInformation";
// import { ServerStatus } from "./components/serverStatus";
// import { Rewards } from "./components/rewards";
// import { ClasseContainer } from "./components/classesContainer";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Header />
      <Presentation />
      <MoreInformation />
      <ServerStatus />
      <ClasseContainer />
      <Rewards /> */}
      <Routes />
    </div>
  );
}

export default App;
