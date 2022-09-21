import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/main-logo.png";
import { UserIcon, ThinArrowIcon } from "./icons.component";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-top-section">
        <a href="mailto: eliteslogistics100@gmail.com">
          <div className="email">
            <i className="fas fa-envelope"></i>
            eliteslogistics100@gmail.com
          </div>
        </a>

        <a href="tel: +977015912468">
          <div className="email">
            <i className="fas fa-phone-alt"></i>
            CSD: +977-015912468
          </div>
        </a>

        <a href="tel: +9779881111100">
          <div className="email">
            <i className="fas fa-phone-alt"></i>
            Operation: +977-9881111100
          </div>
        </a>

        <a href="tel: +9779881111200">
          <div className="email">
            <i className="fas fa-phone-alt"></i>
            Courier: +977-9881111200
          </div>
        </a>
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
          <a href="https://delivery.eliteslogistics.com/login" target="blank">
            <div className="icon">
              <UserIcon />
            </div>

            <span>Login</span>
          </a>

          <div className="das" />

          <a href="https://delivery.eliteslogistics.com/sign-up" target="blank">
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
