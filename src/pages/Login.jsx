// Login.jsx
import React from "react";
import "./loginRegisterStyles.css"; // Import the styles

const Login = () => {
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
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
