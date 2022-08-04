import React from "react";

const MessageBox = ({ children, time, myMessage }) => {
  return (
    <div className={`message-box ${myMessage ? "my-message" : ""}`}>
      <div className="text-message">{children}</div>
      <div className="send-time">{time}</div>
    </div>
  );
};

export default MessageBox;
