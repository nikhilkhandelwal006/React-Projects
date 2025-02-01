import React, { useState } from "react";
import "./Login.css";
import wall from "../assets/wall.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!isPasswordShown);
  };

  async function handleClick() {
    try {
      // console.log(body);
      const response = await fetch("http://localhost:9090/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(response);
      console.log("login successful", data);
    } catch (error) {
      console.error("Login failed!", error);
    }
  }

  return (
    <div className="container">
      <div className="login-container">
        <div className="im">
          <img src={wall} alt="" />
        </div>
        <div className="form">
          <h2>Login</h2>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              className="e"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type={isPasswordShown ? "text" : "password"}
              id="password"
              className="e"
              placeholder="Enter your password"
            />
            <i
              id="togglePassword"
              className={`fa ${isPasswordShown ? "fa-eye" : "fa-eye-slash"}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>

          <div className="rem">
            <input type="checkbox" id="" />
            <span>Remember me</span>
          </div>
          <button onClick={handleClick}>Login</button>

          <p className="info">
            Software Design & Developed By : NIKHIL KHANDELWAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
