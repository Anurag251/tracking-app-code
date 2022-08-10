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

        <Link to="/login">
          <span>Login</span>
        </Link>

        <div className="das" />

        <Link to="/sign-up">
          <span className="su">
            Sign Up <ThinArrowIcon />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
