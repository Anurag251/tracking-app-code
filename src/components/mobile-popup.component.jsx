import React from "react";

const MobilePopup = ({ children, profileDrop, toggles }) => {
  return (
    <>
      <div
        className={`${profileDrop ? "bg-for-close" : ""}`}
        onClick={() => toggles()}
      ></div>
      <div className={`mobile-popup ${profileDrop ? "active" : ""}`}>
        <div className="pointer"></div>
        <div className="inner">{children}</div>
      </div>
    </>
  );
};

export default MobilePopup;
