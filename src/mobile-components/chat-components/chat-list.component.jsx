import React, { useContext } from "react";
import { ChatContext } from "../../context/chat-context";
import Chat from "./chat.component";

const ChatList = () => {
  const [chatData] = useContext(ChatContext);
  // const []

  return (
    <div className="chat-list">
      {chatData.map((data) => (
        <Chat key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ChatList;
