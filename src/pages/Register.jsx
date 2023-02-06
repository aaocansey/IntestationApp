import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-Container signupform">
      <h1 className="login-title">SignUp</h1>
      <form className="loginForm">
        {/* <img src="" alt="profile picture" /> */}
        <div className="inputField Username">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="inputField Password">
          <label>New Password</label>
          <input type="password" />
        </div>
        <div className="inputField Password">
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <div>
          <div className="btn-group">
            <Link to="/AppPortal" className={"btn"}>
              SignUp
            </Link>
          </div>
          <div className="signupInfo">
            Already registered? <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
