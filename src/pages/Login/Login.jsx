import React from "react";
import Navbar from "../../Components/Navbar";
import "../Login/login.css";
import LoginForm from "../../Components/LoginForm";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-Container">
        <h1 className="login-title">Login</h1>
        <LoginForm />
      </div>
      <p className="loginInfo">
        Login with your user details to enjoy the experience on this premium app
        take a tour, start a new application or return and track an application.
      </p>
      <p className="loginInfo">If you want to learn more about how it works, click the here</p>
      <p className="loginInfo">If you are not registered register to proceed.</p>
    </div>
  );
};

export default Login;
