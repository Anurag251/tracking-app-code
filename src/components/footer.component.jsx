import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urls } from "../url";
import Loading from "./loading.component";

const Footer = ({ removeComponent }) => {
  const [socialMedia, setSocialMedia] = useState();

  useEffect(() => {
    fetch(urls + "social-media/")
      .then((res) => res.json())
      .then((data) => setSocialMedia(data.social_media));
  }, []);

  return (
    <footer>
      <h4>© 2015-2021 Tracking App All rights reserved.</h4>

      <ul>
        <li>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </li>

        <li>
          <Link to="/apply-now">Proposal</Link>
        </li>

        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>

      {socialMedia !== undefined ? (
        <div className="social-links">
          {socialMedia.facebook !== "" && socialMedia.facebook !== null ? (
            <a href={socialMedia.facebook} target="blank">
              <div className="icon">
                <i className="fab fa-facebook"></i>
              </div>
            </a>
          ) : null}

          {socialMedia.instagram !== "" && socialMedia.instagram !== null ? (
            <a href={socialMedia.instagram} target="blank">
              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>
            </a>
          ) : null}

          {socialMedia.linkedin !== "" && socialMedia.linkedin !== null ? (
            <a href={socialMedia.linkedin} target="blank">
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
            </a>
          ) : null}

          {socialMedia.twitter !== "" && socialMedia.twitter !== null ? (
            <a href={socialMedia.twitter} target="blank">
              <div className="icon">
                <i className="fab fa-twitter"></i>
              </div>
            </a>
          ) : null}
        </div>
      ) : (
        <Loading />
      )}
    </footer>
  );
};

export default Footer;
