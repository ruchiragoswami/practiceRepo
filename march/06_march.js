import { useState } from "react";
import "./styles.css";

export default function ShowHideForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [btnText, setBtnText] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
    setBtnText(!btnText);    
  };

  return (
    <div>
      <h2> This is a form </h2>
      <form>
        <div>
          <label>
            New Passowrd:
            <input type={showPassword ? "text" : "password"} />
          </label>
        </div>
      </form>

      <button onClick={showPasswordHandler}>
        {" "}
        {btnText ? "Hide" : "Show"} Password{" "}
      </button>
    </div>
  );
}
