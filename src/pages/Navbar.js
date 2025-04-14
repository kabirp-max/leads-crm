// src/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          LeadCRM
        </Link>
        <Link to="/main" className="nav-link">
          Campaigns
        </Link>
        <Link to="/cd" className="nav-link">
          CD
        </Link>
        <Link to="/cdqa" className="nav-link">
          CDQA
        </Link>
        <Link to="/quality" className="nav-link">
          Quality
        </Link>
      </div>

      {user && (
        <div className="navbar-right">
          <span className="nav-user">
            👋 {user.name} ({user.role.toUpperCase()})
          </span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
