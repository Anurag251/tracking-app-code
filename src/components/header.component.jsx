import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import profileImage from "../assets/images/profile.jpg";
import {
  SearchIcon,
  NotificationsIcon,
  UserIcon,
  ThinArrowIcon,
  LogoutIcon,
} from "./icons.component";
import MobilePopup from "./mobile-popup.component";

const Header = ({ signInGo }) => {
  const [profileDrop, setProfileDrop] = useState(false);
  const [notification] = useState(true);
  const [login] = useState(true);

  const profileDropShow = (event) => {
    if (!profileDrop) {
      setProfileDrop(event);
    }
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search">
        <form action="">
          <input type="search" placeholder="Search..." />
          <button className="search-btn">
            <SearchIcon />
          </button>
        </form>
      </div>

      {!login ? (
        <div className="sign-up-btn">
          <div className="icon">
            <UserIcon />
          </div>

          <Link to="/login">
            <span onClick={() => signInGo(false)}>Login</span>
          </Link>

          <div className="das" />

          <Link to="/sign-up">
            <span className="su" onClick={() => signInGo(false)}>
              Sign Up <ThinArrowIcon />
            </span>
          </Link>
        </div>
      ) : (
        <div className="profile">
          <div className="notifications">
            {notification ? <div className="dot"></div> : null}
            <NotificationsIcon />
          </div>

          <div
            className="profile-details"
            onClick={() => profileDropShow(true)}
          >
            <div className="others">
              <div className="greet">Hello Morning</div>
              <h4 className="name">Naruto Uzumaki</h4>
            </div>
            <img className="profile-image" src={profileImage} alt="" />
          </div>

          {profileDrop ? (
            <MobilePopup>
              <span>Logout</span>
              <LogoutIcon />
            </MobilePopup>
          ) : null}
        </div>
      )}
    </header>
  );
};

export default Header;
