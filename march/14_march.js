//post data

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/addresses");
      setAddresses(data.addresses);

      axios.post("/api/addresses", {
        id: "1",
        city: {newAddress}
      });

      // setAddresses((currentAddress) =>
      //   currentAddress.concat({ city: "Tanay" })
      // );
    })();
  }, []);

  const clickHandler = () => {
   
    setAddresses((currentAddress) => currentAddress.concat({ city: newAddress }));
  };

  return (
    <div className="App">
      <h1> address book </h1>
      <input
        type="text"
        value={newAddress}
        placeholder="enter city"
        onChange={(event) => {
          const { value } = event.target;
          setNewAddress(value);
        }}
      />
      <button onClick={clickHandler}> Save Address </button>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.city}</li>
        ))}
      </ul>
    </div>
  );
}
