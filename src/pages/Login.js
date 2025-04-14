import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js"; // adjust path as needed
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // dummy for now
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = {
      "aryan@cd.com": { role: "cd", token: "token_cd" },
      "shubham@cdqa.com": { role: "cdqa", token: "token_cdqa" },
      "viraj@quality.com": { role: "quality", token: "token_quality" },
    };

    if (users[email]) {
      localStorage.setItem("authToken", users[email].token);
      localStorage.setItem("userEmail", email);
      navigate(`/${users[email].role}`);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <Header />
      {!token && (
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            {error && <p className="error-text">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
}
