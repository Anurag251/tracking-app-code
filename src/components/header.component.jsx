import React, { useState } from "react";
import logo from "../assets/images/logo/logo.svg";
import profileImage from "../assets/images/profile.jpg";
import { SearchIcon, NotificationsIcon } from "./icons.component";

const Header = () => {
  const [notification, setNotification] = useState(true);
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

      <div className="profile">
        <div className="notifications">
          {notification ? <div className="dot"></div> : null}
          <NotificationsIcon />
        </div>

        <div className="profile-details">
          <div className="others">
            <div className="greet">Hello Morning</div>
            <h4 className="name">Naruto Uzumaki</h4>
          </div>
          <img className="profile-image" src={profileImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
