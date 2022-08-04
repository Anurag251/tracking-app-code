import React from "react";
import { ChatProvider } from "../context/chat-context";
import ChatList from "../mobile-components/chat-components/chat-list.component";

const Chatpage = () => {
  return (
    <div className="chat-page">
      <ChatProvider>
        <ChatList />
      </ChatProvider>
    </div>
  );
};

export default Chatpage;
