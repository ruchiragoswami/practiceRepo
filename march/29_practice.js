// Codesandbox link
// https://codesandbox.io/s/class-live-practice-07bgkf?file=/src/App.js

// App.js
import "./styles.css";
import { Answer1 } from "./Answer1";
// import { Answer2 } from "./Answer2";
import { Answer3 } from "./Answer3";

export default function App() {
  return (
    <div className="App">
      <h1> Re-watching </h1>
      <h2>29 March 2022</h2>

      <Answer1 />
      {/* <Answer2 /> */}
      <Answer3 />
    </div>
  );
}
