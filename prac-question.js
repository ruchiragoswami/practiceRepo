// error in the code, to be fixed

import "./styles.css";
import { useState } from "react";

const items = [
  {
    id: 1,
    name: "shoes",
    price: 100
  },
  {
    id: 2,
    name: "jacket",
    price: 400
  },
  {
    id: 3,
    name: "hat",
    price: 50
  },
  {
    id: 4,
    name: "sunglasses",
    price: 250
  },
  {
    id: 5,
    name: "gloves",
    price: 300
  }
];

export default function App() {
  const itemPrice = items.map((eachItem) => eachItem.price);

  const [price, setPrice] = useState({ itemPrice });

  const idReader = (e) => {
    let givenId = e.target.value;
    console.log(givenId + " is given Id");
  };

  const priceReader = (e) => {
    let givenPrice = e.target.value;
    console.log(givenPrice + " is given price");
  };

  // const priceUpdateHandler = (idReader, priceReader) => {
  //   items.map( eachItem => (eachItem.id === givenId) ? {...})
    console.log( `Given price is ${givenPrice} and given id is ${givneId}`)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <label>
        {" "}
        Id <input type="text" id="input_id" onChange={idReader} />
      </label>
      <label>
        {" "}
        Price <input type="number" id="input_price" onChange={priceReader} />
      </label>

      <button onClick={priceUpdateHandler}> Submit </button>

      <section className="output_display">
        {items.map((eachItem) => (
          <li key={items.indexOf(eachItem)}>
            {" "}
            id: {eachItem.id} -- {eachItem.name} : ${eachItem.price}{" "}
          </li>
        ))}
      </section>
    </div>
  );
}
