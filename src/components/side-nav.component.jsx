import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ContactIcon,
  SupportIcon,
  MapMarkerIcon,
  InformationIcon,
} from "./icons.component";

const SideNav = () => {
  const [indic, setIndic] = useState(2.5);
  const [mobIndic, setMobIndic] = useState(16.6);
  const [isMobView, setIsMobView] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  let history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/") {
      setIndic(2.5);
      setMobIndic(16.6);
    }
    if (history.location.pathname === "/about") {
      setIndic(23.2);
      setMobIndic(33.4);
    }

    if (history.location.pathname === "/map") {
      setIndic(44.2);
      setMobIndic(50);
    }

    if (history.location.pathname === "/blog") {
      setIndic(64.6);
      setMobIndic(66.6);
    }

    if (history.location.pathname === "/contact") {
      setIndic(85.1);
      setMobIndic(83.4);
    }
  }, [history]);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobView(true);
      setMobileNav(true);
    } else {
      setIsMobView(false);
      setMobileNav(false);
    }
  }, []);

  return (
    <div className={`${mobileNav ? "side-nav-mob" : "side-nav"}`}>
      <ul className="side-nav-bar">
        {isMobView ? (
          <div className="indic" style={{ left: `${mobIndic}%` }}></div>
        ) : (
          <div className="indic" style={{ top: `${indic}%` }}></div>
        )}
        <Link to="/">
          <li
            className={`nav-links ${
              history.location.pathname === "/" ? "active" : ""
            }`}
            onClick={() => {
              setIndic(2.5);
              setMobIndic(16.6);
            }}
          >
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="name">Home</div>
          </li>
        </Link>

        <Link to="/about">
          <li
            className={`nav-links ${
              history.location.pathname === "/about" ? "active" : ""
            }`}
            onClick={() => {
              setIndic(23.2);
              setMobIndic(33.4);
            }}
          >
            <div className="icon">
              <InformationIcon />
            </div>
            <div className="name">About</div>
          </li>
        </Link>

        <Link to="/map">
          <li
            className={`nav-links ${
              history.location.pathname === "/map" ? "active" : ""
            }`}
            onClick={() => {
              setIndic(44.2);
              setMobIndic(50);
            }}
          >
            <div className="icon">
              <MapMarkerIcon />
            </div>
            <div className="name">Map</div>
          </li>
        </Link>

        <Link to="/blog">
          <li
            className={`nav-links ${
              history.location.pathname === "/blog" ? "active" : ""
            }`}
            onClick={() => {
              setIndic(64.6);
              setMobIndic(66.6);
            }}
          >
            <div className="icon">
              <SupportIcon />
            </div>
            <div className="name">Blog</div>
          </li>
        </Link>

        <Link to="/contact">
          <li
            className={`nav-links ${
              history.location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={() => {
              setIndic(85.1);
              setMobIndic(83.4);
            }}
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
