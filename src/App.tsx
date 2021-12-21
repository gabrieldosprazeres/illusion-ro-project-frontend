import { useState } from "react";
import "./App.css";
import ProgressBar from "./progressBar";

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
      <header className="App-header">
        <div style={{ width: "500px" }}>
          <ProgressBar currentValue={count} maxValue={500} />
        </div>
        <button onClick={handleCountPlus}> + </button>
        <button onClick={handleCountLess}> - </button>
      </header>
    </div>
  );
}

export default App;
