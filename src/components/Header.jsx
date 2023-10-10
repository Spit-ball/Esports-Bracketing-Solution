// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./headerStyles.css"; // Import the styles

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
