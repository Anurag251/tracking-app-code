import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  AboutIcon,
  ServicesIcon,
  ContactIcon,
  SupportIcon,
} from "./icons.component";

const SideNav = () => {
  const [indic, setIndic] = useState(2.5);

  return (
    <div className="side-nav">
      <ul className="side-nav-bar">
        <div className="indic" style={{ top: `${indic}%` }}></div>
        <Link to="/">
          <li
            className={`nav-links ${indic === 2.5 ? "active" : ""}`}
            onClick={() => setIndic(2.5)}
          >
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="name">Home</div>
          </li>
        </Link>

        <Link to="/about">
          <li
            className={`nav-links ${indic === 23.2 ? "active" : ""}`}
            onClick={() => setIndic(23.2)}
          >
            <div className="icon">
              <AboutIcon />
            </div>
            <div className="name">About</div>
          </li>
        </Link>

        <Link to="/">
          <li
            className={`nav-links ${indic === 44.2 ? "active" : ""}`}
            onClick={() => setIndic(44.2)}
          >
            <div className="icon">
              <ServicesIcon />
            </div>
            <div className="name">Service</div>
          </li>
        </Link>

        <Link to="/">
          <li
            className={`nav-links ${indic === 64.6 ? "active" : ""}`}
            onClick={() => setIndic(64.6)}
          >
            <div className="icon">
              <SupportIcon />
            </div>
            <div className="name">Support</div>
          </li>
        </Link>

        <Link to="/contact">
          <li
            className={`nav-links ${indic === 85.1 ? "active" : ""}`}
            onClick={() => setIndic(85.1)}
          >
            <div className="icon">
              <ContactIcon />
            </div>
            <div className="name">Contact</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
