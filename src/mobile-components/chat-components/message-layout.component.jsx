import React from "react";
import { auth } from "../../firebase/firebase.utils";

import MessageBox from "./message-box.component";

const MessageLayout = ({ messages }) => {
  return (
    <div className="message-layout">
      {messages.map(({ uid, text, photoURL, createdAt }, idx) => {
        return (
          <div
            className={` ${
              uid === auth.currentUser ? "others-message" : "your-message"
            }`}
            key={idx}
          >
            <div
              className={`user-image ${
                uid === auth.currentUser ? "" : "noImage"
              }`}
              style={{ backgroundImage: `url(${photoURL})` }}
            ></div>
            <MessageBox
              time={
                createdAt
                  ? new Date(createdAt.seconds * 1000).toJSON()
                  : "loading..."
              }
              myMessage
            >
              {text}
            </MessageBox>
          </div>
        );
      })}
    </div>
  );
};

// <div className="others-message" key={id}>
//   <div
//     className="user-image"
//     style={{ backgroundImage: `url(${photoURL})` }}
//   ></div>
//   <MessageBox time={null}>{text}</MessageBox>
// </div>

export default MessageLayout;
