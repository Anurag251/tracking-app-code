import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import logo from "../assets/images/logo/logo.svg";
import { ArrowIcon, HomeIcon } from "./icons.component";
import bgImage from "../assets/images/bg.png";
import SignUpFormUser from "./sign-up-form-user.component";
import SignUpFormRider from "./sign-up-form-rider.component";
import SignUpFormVender from "./sign-up-form-vender.component";

const SignUp = ({ signInGo }) => {
  const [indicatroMove, setIndicaterMove] = useState(16);
  let history = useHistory();

  return (
    <div className="sign-up" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="inner">
        <div className="top-sec">
          <div
            className="back-btn"
            onClick={() => {
              history.goBack();
              signInGo(true);
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

        <div className="sign-nav">
          <div
            className="indicator"
            style={{ left: `${indicatroMove}%` }}
          ></div>

          <ul>
            <li onClick={() => setIndicaterMove(16)}>User</li>
            <li onClick={() => setIndicaterMove(49)}>Rider</li>
            <li onClick={() => setIndicaterMove(83)}>Seller</li>
          </ul>
        </div>

        {indicatroMove === 16 ? (
          <div
            className="for-user"
            style={{
              opacity: `${indicatroMove === 16 ? "1" : "0"}`,
            }}
          >
            <SignUpFormUser />
          </div>
        ) : null}

        {indicatroMove === 49 ? (
          <div
            className="for-rider"
            style={{
              opacity: `${indicatroMove === 49 ? "1" : "0"}`,
            }}
          >
            <SignUpFormRider />
          </div>
        ) : null}

        {indicatroMove === 83 ? (
          <div
            className="for-vender"
            style={{
              opacity: `${indicatroMove === 83 ? "1" : "0"}`,
            }}
          >
            <SignUpFormVender />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SignUp;
