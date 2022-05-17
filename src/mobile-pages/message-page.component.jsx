import React, { useState, useEffect, useRef } from "react";
import { ArrowIcon } from "../components/icons.component";
import { auth, firestore } from "../firebase/firebase.utils";
import firebase from "firebase/compat/app";
import MessageLayout from "../mobile-components/chat-components/message-layout.component";
import { useHistory } from "react-router-dom";

const img1 =
  "https://images.pexels.com/photos/2787310/pexels-photo-2787310.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const MessagePage = () => {
  const [messages, setMesages] = useState([]);
  const [myMessage, setMyMessage] = useState("");

  const scroll = useRef();

  const history = useHistory();

  useEffect(() => {
    firestore
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapShot) => {
        setMesages(snapShot.docs.map((doc) => doc.data()));
      });
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await firestore.collection("messages").add({
      text: myMessage,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMyMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="message-page">
      <div className="chat-head">
        <div className="back-btn" onClick={() => history.goBack()}>
          <ArrowIcon />
        </div>

        <div className="user-image">
          <img src={img1} alt="userImage" />
        </div>

        <div className="details">
          <div className="user-name">Pankaj Mahato</div>
          <div className="status">Active Now</div>
        </div>
      </div>

      <div className="message-section">
        <MessageLayout messages={messages} />

        <div ref={scroll}></div>
      </div>

      <form action="" style={{ width: "100%" }} onSubmit={sendMessage}>
        <div className="message-input">
          <input
            value={myMessage}
            onChange={(e) => setMyMessage(e.target.value)}
            type="text"
            placeholder="Type your message..."
          />
          <button type="submit" className="send-message-btn">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessagePage;
