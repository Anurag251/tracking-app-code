import React from "react";

const Footer = ({ removeComponent }) => {
  return (
    <>
      {removeComponent ? (
        <footer>
          <h4>© 2015-2021 Tracking App All rights reserved.</h4>
          <div className="social-links">
            <div className="icon">
              <i className="fab fa-facebook"></i>
            </div>

            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>

            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>

            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
