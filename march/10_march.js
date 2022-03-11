import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles.css";

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);
  // if (!wishList) {
  //   setWishList(wishList);
  // }

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  const setLocal = (wishList) => {
    localStorage.setItem("userWishItem", JSON.stringify(wishList));
    //  setWishList(local1);

    // setWishList(localStorage.getItem("userWishItem"));
    // console.log(JSON.parse(localStorage.getItem("userWishItem")));

    let local1 = localStorage.getItem("userWishItem");
    console.log(local1);

    //  localStorage.setItem(local1);
  };

  // useEffect(() => {
  //   if (local1) {
  //     setLocal(wishList);
  //   }
  // }, [wishList]);

  useEffect(() => {
    setLocal(wishList);
  }, [wishList]);

  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">wishing well</h1>
      <div className="app-body">
        <WishList />
      </div>
    </div>
  );
}
