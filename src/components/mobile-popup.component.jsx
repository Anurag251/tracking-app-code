import React from "react";

const MobilePopup = ({ children }) => {
  return (
    <div className="mobile-popup">
      <div className="pointer"></div>
      <div className="inner">{children}</div>
    </div>
  );
};

export default MobilePopup;
