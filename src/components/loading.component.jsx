import React from "react";

const Loading = ({ fullPage }) => {
  return (
    <div className={`${fullPage ? "fullPage" : ""} loading`}>
      <div className="loading-area">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loading;
