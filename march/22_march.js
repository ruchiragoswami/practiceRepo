// codesandbox link at the end of this file
// h1, h2 both needed separate styling 

import "./styles.css";
import { ThemeBtn } from "./ThemeBtn.js";
import { useTheme } from "./theme-context";
import { getFontColor } from "./getFontColor";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black"
      }}
    >
      <h1 style={{ color: getFontColor(theme) }}>Hello CodeSandbox</h1>
      <h2 style={{ color: getFontColor(theme) }}>
        Start editing to see some magic happen!
      </h2>
      <ThemeBtn />
    </div>
  );
}

// https://codesandbox.io/s/practice-dark-light-theme-oz5x74?file=/src/App.js:0-575