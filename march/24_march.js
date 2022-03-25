// https://codesandbox.io/s/custom-hooks-qdgh54?file=/src/App.js:0-593

import "./styles.css";
import { useEffect, useState } from "react";

const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = counter;
  }, [counter]);
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  useDocumentTitle(counter);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button onClick={incrementCounter}> {counter} </button>
    </div>
  );
}


