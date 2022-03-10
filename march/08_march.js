// Counter runs only at the end of input
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("from use effect " + counter);
    console.log("***");
  });

  const incrementCounter = () => {
    setCounter(counter + 1);
    console.log("from handler " + counter);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  console.log(" before the render " + counter);
  return (
    <div className="App">
      <h1> Use effect </h1>
      <h2>Start editing to see some magic happen!</h2>

      <h2> {counter} </h2>
      <button onClick={incrementCounter}> + </button>
    </div>
  );
}

<label for="userInput"> Text here: <input type="text" id="userInput"></label>

<button class="btnText" value="log"> Log </button>
<button class="btnText" value="error"> Error </button>
<button class="btnText" value="warn"> Warn </button>