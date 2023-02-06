import React from "react";
import { Link } from "react-router-dom";
import Register from "../pages/Register";
const LoginForm = () => {
  return (
    <>
      <form className="loginForm">
        {/* <img src="" alt="profile picture" /> */}
        <div className="inputField Username">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="inputField Password">
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <div className="btn-group">
            <Link className={"forgotPassword"}>forgot password</Link>
            <Link to='/AppPortal' className={'btn'}>Login</Link>
          </div>
          <div className="signupInfo">
            New? SignUp or <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
