import "./styles.css";
import { useState } from "react";
// import { useEffect} from "react";

const items = [
  {
    name: "shoe",
    price: 100
  },
  {
    name: "jacket",
    price: 400
  },
  {
    name: "hat",
    price: 50
  },
  {
    name: "sunglasses",
    price: 250
  },
  {
    name: "gloves",
    price: 300
  }
];

export default function App() {
  const [allItems, setAllItems] = useState(items);

  const sortAsc = () => {
    let ascendingItems = [...items].sort((obj1, obj2) =>
      obj1.price > obj2.price ? 1 : -1
    );
    setAllItems(ascendingItems);
    // console.log(ascendingItems);
  };

  const sortDesc = () => {
    let descendingItems = [...items].sort((obj1, obj2) =>
      obj1.price < obj2.price ? 1 : -1
    );
    setAllItems(descendingItems);
    // console.log(descendingItems);
  };

  const displayItems = allItems.map((eachItem) => (
    <li key={allItems.indexOf(eachItem)}>
      {" "}
      {eachItem.name} : {eachItem.price}{" "}
    </li>
  ));

  // useEffect(() => sortAsc, [displayItems]);
  // useEffect(() => sortAsc, [allItems]);

  return (
    <div className="App">
      <h1> Sort itmes based on their price </h1>
      <h2>Choose ascending or descending </h2>

      <section>
        {/* {allItems.map((eachItem) => (
          <li key={allItems.indexOf(eachItem)}>
            {" "}
            {eachItem.name} : {eachItem.price}{" "}
          </li>
        ))} */}

        {displayItems}
      </section>

      <button onClick={sortAsc}> Asc </button>
      <button onClick={sortDesc}> Desc </button>
    </div>
  );
}
// key={items.indexOf(eachItem)}
