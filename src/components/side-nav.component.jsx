import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ContactIcon,
  SupportIcon,
  MapMarkerIcon,
  InformationIcon,
  ChatIcon,
  NotificationsIcon,
} from "./icons.component";

const SideNav = ({ removeComponent }) => {
  const [indic, setIndic] = useState(2.5);
  const [mobIndic, setMobIndic] = useState(16.6);
  const [isMobView, setIsMobView] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  let history = useHistory();

  useEffect(() => {
    const check = (e) => {
      setIsMobView(e);
      setMobileNav(e);
    };

    if (window.innerWidth <= 600) {
      check(true);
    } else {
      check(false);
    }
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".side-nav-bar a");
    const link = document.querySelectorAll(".side-nav-bar .nav-links");

    navLinks.forEach((navLink, idx) => {
      let linkUrl = navLink.getAttribute("href");

      if (linkUrl === history.location.pathname) {
        link[idx].classList.add("active");
      } else {
        link[idx].classList.remove("active");
      }
    });
  }, [history.location.pathname]);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".side-nav-bar a");

    navLinks.forEach((navLink) => {
      let linkUrl = navLink.getAttribute("href");

      if (history.location.pathname === linkUrl) {
        setIndic(2.5);
        setMobIndic(16.6);
      }
      if (
        history.location.pathname === linkUrl ||
        history.location.pathname === linkUrl
      ) {
        setIndic(23.2);
        setMobIndic(33.4);
      }

      if (history.location.pathname === linkUrl) {
        setIndic(44.2);
        setMobIndic(50);
      }

      if (history.location.pathname === linkUrl) {
        setIndic(64.6);
        setMobIndic(66.6);
      }

      if (history.location.pathname === linkUrl) {
        setIndic(85.1);
        setMobIndic(83.4);
      }
    });
  }, [history]);

  return (
    <>
      {removeComponent ? (
        <div className={`${mobileNav ? "side-nav-mob" : "side-nav"}`}>
          <ul className="side-nav-bar">
            {isMobView ? (
              <div className="indic" style={{ left: `${mobIndic}%` }}></div>
            ) : (
              <div className="indic" style={{ top: `${indic}%` }}></div>
            )}
            <Link to="/">
              <li
                className="nav-links"
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

            {mobileNav ? (
              <Link to="/chat">
                <li
                  className="nav-links"
                  onClick={() => {
                    setIndic(23.2);
                    setMobIndic(33.4);
                  }}
                >
                  <div className="icon">
                    <ChatIcon />
                  </div>
                  <div className="name">Chat</div>
                </li>
              </Link>
            ) : (
              <Link to="/about">
                <li
                  className="nav-links"
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
            )}

            {/* <Link to="/map">
              <li
                className="nav-links"
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
            </Link> */}

            <Link to="/blog">
              <li
                className="nav-links"
                onClick={() => {
                  setIndic(44.2);
                  setMobIndic(50);
                }}
              >
                <div className="icon">
                  <SupportIcon />
                </div>
                <div className="name">Blog</div>
              </li>
            </Link>

            <Link to="/notifications">
              <li
                className="nav-links"
                onClick={() => {
                  setIndic(64.6);
                  setMobIndic(66.6);
                }}
              >
                <div className="icon">
                  <NotificationsIcon />
                </div>
                <div className="name">Notification</div>
              </li>
            </Link>

            <Link to="/contact">
              <li
                className="nav-links"
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
      ) : null}
    </>
  );
};

export default SideNav;
