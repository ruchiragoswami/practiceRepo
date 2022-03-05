// Twitter component

import "./styles.css";
import { useState } from "react";

/* Ex1: See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.
 */

export default function App() {
  const [remainingChars, setRemainingChars] = useState(10);
  const [inputValue, setInputValue] = useState("");

  const showRemaining = (e) => {
    console.log(e.target.value);
    setRemainingChars(10 - e.target.value.length);
    setInputValue(e.target.value);

    // if (remainingChars <= 0) {
    //   setBgColor("pink");
    // } else {
    //   setBgColor("initial");
    // }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Twitter component </h2>
      <input
        value={inputValue}
        // maxLength="10"
        onChange={showRemaining}
        style={{ backgroundColor: remainingChars < 0 ? "pink" : "initial" }}
      />
      <p> Characters remaining : {remainingChars} </p>
    </div>
  );
}

return (
  <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Twitter component </h2>
    <input
      value={inputValue}
      // maxLength="10"
      onChange={showRemaining}
      style={{ backgroundColor: remainingChars < 0 ? "pink" : "initial" }}
    />
    <p> Characters remaining : {remainingChars} </p>
  </div>
);
}
