import "./styles.css";
import { useState } from "react";

export default function App() {
  const divStyle = {
    // width: "50%",
    // color: "red",
    textAlign: "center",
    // border: "1px solid green",
    margin: "1rem 0 0 2rem  "
  };

  const inputStyle = {
    width: "10rem"
  };
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [passwordOutput, setPasswordOutput] = useState("");
  const getPassword1 = (e1) => {
    console.log(e1.target.value);
    setInputValue1(e1.target.value);
  };

  const getPassword2 = (e2) => {
    console.log(e2.target.value);
    setInputValue2(e2.target.value);
  };

  const matchPasswords = () => {
    console.log(`Passowrd 1 is ${inputValue1} and password 2 ${inputValue2}`);

    //The  "if" condition below checks if both the password values are not empty and then compares if they are the same
    if (!inputValue1 || !inputValue2) {
      setPasswordOutput("passwords can't be empty");
    } else if (inputValue1 === inputValue2) {
      setPasswordOutput("success: Passwords match");
    } else {
      setPasswordOutput("error: Passwords don't match");
    }
  };

  return (
    <div className="App">
      <h1>Password matcher </h1>

      <div style={divStyle}>
        <label>
          Passowrd:
          <input
            type="password"
            value={inputValue1}
            onChange={getPassword1}
            style={inputStyle}
          />
        </label>
      </div>
      <div style={divStyle}>
        <label>
          Confirm Passowrd:
          <input type="password" value={inputValue2} onChange={getPassword2} />
        </label>
      </div>

      <button onClick={matchPasswords} style={{ marginTop: "2rem" }}>
        {" "} {/* I keep getting these strange thing, curly brackets with empty string. Do you know why ?*/}
        Check{" "}
      </button>

      <p> {passwordOutput} </p>
    </div>
  );
}
