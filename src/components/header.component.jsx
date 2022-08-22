import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/main-logo.png";
import { UserIcon, ThinArrowIcon } from "./icons.component";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-top-section">
        <div className="email">
          <i className="fas fa-envelope"></i>
          eliteslogistics@gmail.com
        </div>

        <div className="email">
          <i className="fas fa-phone-alt"></i>
          +977-9876543210
        </div>
      </div>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* <div className="search">
        <form action="">
          <input type="search" placeholder="Search..." />
          <button className="search-btn">
            <SearchIcon />
          </button>
        </form>
      </div> */}

        <div className="sign-up-btn">
          <a href="https://delivery.eliteslogistics.com/login" target="_blank">
            <div className="icon">
              <UserIcon />
            </div>

            <span>Login</span>
          </a>

          <div className="das" />

          <a
            href="https://delivery.eliteslogistics.com/sign-up"
            target="_blank"
          >
            <span className="su">
              Sign Up <ThinArrowIcon />
            </span>
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
