import React from "react";
import Login from "../../components/login/Login";
import "./login.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="loginpage">
      <div>
        <Link to="/">
          <img
            className="Aclabsolute"
            src="Images/IndexPageImages/logo.png"
            alt="acelogo"
          />
        </Link>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
