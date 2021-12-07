import React from "react";
import { useHistory, Link } from "react-router-dom";
import { ArrowIcon, HomeIcon } from "./icons.component";
import logo from "../assets/images/logo/logo.svg";
import LoginForm from "./login-form.component";

const Login = ({ signInGo }) => {
  let history = useHistory();
  return (
    <div className="login">
      <div className="inner">
        <div className="top-sec">
          <div
            className="back-btn"
            onClick={() => {
              signInGo(true);
              history.goBack();
            }}
          >
            <ArrowIcon />
          </div>

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <Link to="/">
            <div className="home-btn" onClick={() => signInGo(true)}>
              <HomeIcon />
            </div>
          </Link>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
