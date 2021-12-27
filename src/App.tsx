import React, { useState } from "react";
import { Header } from "../src/components/header";
import { Presentation } from "./components/presentation";
import { MoreInformation } from "./components/moreInformation";
import { ServerStatus } from "./components/serverStatus";
import { ProgressBar } from "./components/progressBar";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleCountPlus = () => {
    if (count + 5 >= 500) {
      setCount(500);
      console.log(500);
    } else {
      console.log(count + 5);
      setCount(count + 5);
    }
  };

  const handleCountLess = () => {
    if (count - 5 <= 0) {
      setCount(0);
      console.log(0);
    } else {
      setCount(count - 5);
      console.log(count - 5);
    }
  };

  return (
    <div className="App">
      <Header />
      <Presentation />
      <MoreInformation />
      <ServerStatus />
      <div style={{ width: "500px" }}>
        <ProgressBar currentValue={count} maxValue={500} />
        <button onClick={handleCountPlus}> + </button>
        <button onClick={handleCountLess}> - </button>
      </div>
    </div>
  );
}

export default App;
