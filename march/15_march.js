// working solution
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  // const [change, setChange] = useState(false);

  const clickHandler = async () => {
    try {
      console.log(newAddress);
      const response = await axios.post("/api/addresses", {
        address: { city: newAddress }
        // address: { value }
      });
      // setChange((prev) => !prev);

      console.log(response.data);
    } catch {
      console.log("error");
    }
  };

  /*
  const clickHandler = () => {
    try {
      console.log(newAddress);
      const response = axios.post("/api/addresses", {
        address: { city: newAddress }
        // address: { value }
      });
      console.log(response.data);
    } catch {
      console.log("error");
    }
  }; 
  */

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/addresses");
      setAddresses(data.addresses);
      // setAddresses((currentAddress) =>
      //   currentAddress.concat({ city: "Tanay" })
      // );
    })();
  }, []);

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

      {/* {newAddress} */}
    </div>
  );
}
