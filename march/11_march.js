import "./styles.css";
import { useState } from "react";

export default function App() {
  const brandData = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" }
  ];

  const collectBrandNames = (someObj) => someObj.brandName;

  const filtNames = brandData.map(collectBrandNames);

  const [brand, setBrand] = useState(filtNames);

  const changeHandler = (e) => {
    const generalFunc = (someValue) => someValue.includes(e.target.value);

    const filteredByInput = filtNames.filter(generalFunc);

    setBrand(filteredByInput);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input type="text" onChange={changeHandler} />

      <p>
        {" "}
        {brand.map((x) => (
          <li key={x}> {x} </li>
        ))}{" "}
      </p>
    </div>
  );
}
