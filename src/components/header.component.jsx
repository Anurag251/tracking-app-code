import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/main-logo.png";
import { UserIcon, ThinArrowIcon } from "./icons.component";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/mobile">
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
        <div className="icon">
          <UserIcon />
        </div>

        <a href="https://delivery.eliteslogistics.com/login" target="_blank">
          <span>Login</span>
        </a>

        <div className="das" />

        <a href="https://delivery.eliteslogistics.com/sign-up" target="_blank">
          <span className="su">
            Sign Up <ThinArrowIcon />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
