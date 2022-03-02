//Class - Running Lecture - Thinking in React 

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [fontHeight, setFontHeight] = useState("1em");
  const [fontColor, setFontColor] = useState("blue");

  console.log(fontHeight);
  const runHone = () => {
    setFontHeight("4em");
  };

  const runHtwo = () => setFontHeight("2em");

  const runNormal = () => {
    setFontHeight("1em");
    setFontColor("blue");
  };

  const makeRed = () => setFontColor("red");
  const makeGreen = () => setFontColor("green");

  const [someValue, setSomeValue] = useState(0);

  const incrementOne = () => {
    let incrementedValue = someValue + 1;
    setSomeValue(incrementedValue);
  };

  const decrementOne = () => {
    setSomeValue(someValue - 1);
  };

  const [bgColor, setBgColor] = useState("yellow");

  const changeBgColor = () => {
    if (bgColor === "yellow") {
      setBgColor("red");
    } else if (bgColor === "red") {
      setBgColor("yellow");
    }
  };

  return (
    <div className="App">
      <h1>Thinking in React </h1>
      <h2> Size Changer </h2>

      <button onClick={runHone}> h1 </button>
      <button onClick={runHtwo}> h2 </button>
      <button onClick={runNormal}> Back to Normal </button>

      <div>
        <button onClick={makeRed}> Red </button>
        <button onClick={makeGreen}> Green </button>
      </div>
      <p style={{ fontSize: fontHeight, color: fontColor }}>
        I am a Complan Girl!
      </p>

      <section>
        <p> {someValue} </p>

        <button onClick={incrementOne}> + </button>
        <button onClick={decrementOne}> - </button>
        <br />

        <p style={{ backgroundColor: bgColor }}>Change Color background </p>
        <button onClick={changeBgColor}> Toggle </button>
      </section>
    </div>
  );
}
