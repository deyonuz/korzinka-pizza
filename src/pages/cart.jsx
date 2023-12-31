import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cart.css"

const Cart = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username.length === 0 || password.length === 0) {
      alert("Iltimos, barcha ma'lumotlarni to'ldiring.");
    } else {
      const userData = { username, password };
      localStorage.setItem("userData", JSON.stringify(existingData));
      navigate("/login");
    }
  };``

  return (
    <div className="container-cart">
      <div className="reg-container">
        <span>Register</span>
        <input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}npm
          minLength={"3"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={"/login"}>
          <button className="reg-btn" onClick={handleSignUp}>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
