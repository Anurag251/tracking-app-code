import React from "react";
import { Link } from "react-router-dom";

const MobileTitle = ({ children, goTo }) => {
  return (
    <div className="mobile-title">
      <h3>{children}</h3>

      <Link to={goTo}>
        <h6>
          view all <i className="fas fa-chevron-right"></i>
        </h6>
      </Link>
    </div>
  );
};

export default MobileTitle;
