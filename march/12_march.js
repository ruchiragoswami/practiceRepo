import "./styles.css";
import { useState } from "react";

export default function App() {
  const brandData = ["puma", "adiddas", "wildcraft", "levis", "celio"];

  // const getArrayItems = arrayItem => <li> {arrayItem}  </li>;

  // const getBrandDataItem = brandData.map(getArrayItems);

  const [brand, setBrand] = useState(brandData);

  // const filterData = brandData.filter(x.includes(y) => x;

  const filterHandler = (e) => {
    const filter = (item) => item.includes(e.target.value);
    const filteredData = brandData.filter(filter);
    setBrand(filteredData);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2> Start typing and the filtered products will be shown </h2>

      <input type="text" onChange={filterHandler} />

      <p>
        {" "}
        {brand.map((brandDataItem) => (
          <li key={brand.indexOf(brandDataItem)}> {brandDataItem} </li>
        ))}{" "}
      </p>

      {/* <p> <li> {brandData} </li> </p>  */}
    </div>
  );
}
