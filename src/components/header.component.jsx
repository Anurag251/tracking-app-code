import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/main-logo.png";
import { auth } from "../firebase/firebase.utils";
import {
  SearchIcon,
  NotificationsIcon,
  UserIcon,
  ThinArrowIcon,
  LogoutIcon,
  ServicesIcon,
} from "./icons.component";
import MobilePopup from "./mobile-popup.component";

const Header = ({ signInGo, currentUser, removeComponent }) => {
  const [profileDrop, setProfileDrop] = useState(false);
  const [notification] = useState(true);

  // const { displayName, photoURL } = auth.currentUser;

  const toggles = (e) => {
    if (!profileDrop) {
      setProfileDrop(e);
    } else {
      setProfileDrop(false);
    }
  };

  const ifUserNotLogin = () => [
    {
      id: 1,
      name: "Login",
      url: "/login",
    },

    {
      id: 2,
      name: "Sign Up",
      url: "/sign-up",
    },
  ];

  const ifUserLogin = () => [
    {
      id: 1,
      name: "Profile",
      url: "/",
      icon: <UserIcon />,
    },

    {
      id: 2,
      name: "Setting",
      url: "/",
      icon: <ServicesIcon />,
    },
  ];

  return (
    <>
      {removeComponent ? (
        <header>
          <div className="logo">
            <Link to="/mobile">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="search">
            <form action="">
              <input type="search" placeholder="Search..." />
              <button className="search-btn">
                <SearchIcon />
              </button>
            </form>
          </div>

          {currentUser ? (
            <div className="profile">
              <Link to="/notifications">
                <div className="notifications">
                  {notification ? <div className="dot"></div> : null}
                  <NotificationsIcon />
                </div>
              </Link>

              <div
                className="profile-details"
                onClick={() => toggles(ifUserLogin)}
              >
                <div className="others">
                  <div className="greet">Hello Morning</div>
                  <h4 className="name">{currentUser.displayName}</h4>
                </div>
                <img
                  className="profile-image"
                  src={currentUser.photoURL}
                  alt=""
                />
              </div>

              {profileDrop ? (
                <MobilePopup profileDrop={profileDrop} toggles={toggles}>
                  <ul>
                    {profileDrop.map((data) => (
                      <li key={data.id}>
                        <span>{data.name}</span>
                        {data.icon}
                      </li>
                    ))}

                    <li onClick={() => auth.signOut()}>
                      <span>Logout</span>
                      <LogoutIcon />
                    </li>
                  </ul>
                </MobilePopup>
              ) : null}
            </div>
          ) : (
            <div className="sign-up-btn">
              <div className="icon" onClick={() => toggles(ifUserNotLogin)}>
                <UserIcon />
              </div>

              {profileDrop ? (
                <MobilePopup profileDrop={profileDrop} toggles={toggles}>
                  <ul>
                    {profileDrop.map((data) => {
                      return (
                        <li key={data.id}>
                          <Link to={`${data.url}`}>
                            <span onClick={() => signInGo(false)}>
                              {data.name}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </MobilePopup>
              ) : null}

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
          )}
        </header>
      ) : null}
    </>
  );
};

export default Header;
