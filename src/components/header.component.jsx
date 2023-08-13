import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/main-logo.png";
import { UserIcon, ThinArrowIcon } from "./icons.component";
import { urls } from "../url";

const Header = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(urls + "home/contact/")
      .then((res) => res.json())
      .then((data) => setContact(data[0]));
  }, []);

  return (
    <React.Fragment>
      <div className="header-top-section">
        {contact.email && (
          <a href={`mailto: ${contact.email}`}>
            <div className="email">
              <i className="fas fa-envelope"></i>
              {contact.email}
            </div>
          </a>
        )}

        {contact.phone_number1 && (
          <a href={`tel: ${contact.phone_number1}`}>
            <div className="email">
              <i className="fas fa-phone-alt"></i>
              CSD: {contact.phone_number1}
            </div>
          </a>
        )}

        {contact.phone_number2 && (
          <a href={`tel: ${contact.phone_number2}`}>
            <div className="email">
              <i className="fas fa-phone-alt"></i>
              Operation: {contact.phone_number2}
            </div>
          </a>
        )}

        {contact.phone_number3 && (
          <a href={`tel: ${contact.phone_number3}`}>
            <div className="email">
              <i className="fas fa-phone-alt"></i>
              Courier: {contact.phone_number3}
            </div>
          </a>
        )}
      </div>

      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* rest of your header content */}
      </header>
    </React.Fragment>
  );
};

export default Header;
