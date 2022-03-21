// https://codesandbox.io/s/setting-up-17-march-part-2-zm41tq?file=/src/Nav.jsx
// Codesandbox link for the complete code

import "./styles.css";
// import { useContext } from "react";
import { Nav } from "./Nav";
import { ProductListing } from "./ProductListing";
import { useTheme } from "./theme-context";
import { Cart } from "./Cart.1";
import { getFontColor } from "./getFontColor";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      <h1 className="app-header" style={{ color: getFontColor(theme) }}>
        eCommerce
      </h1>
      <div className="app-body">
        <Nav />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
