import React from "react";
import { Navigate } from "react-router-dom";
import "./loginRegisterStyles.css";

const Login = ({ setIsLoggedIn }) => {
  const handleLoginClick = () => {
    // For simplicity, let's assume login is successful
    setIsLoggedIn(true);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Login</h2>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input className="input" type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button
          className="button"
          type="button" // Change this to "submit" to submit the form
          onClick={handleLoginClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
