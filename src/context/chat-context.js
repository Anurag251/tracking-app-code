import React, { useState, createContext } from "react";
import ChatList from "../mobile-components/chat-components/chat-list.component";

const userImage1 =
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const userImage2 =
  "https://images.pexels.com/photos/3760916/pexels-photo-3760916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const userImage3 =
  "https://images.pexels.com/photos/3854884/pexels-photo-3854884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const userImage4 =
  "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const userImage5 =
  "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export const ChatContext = createContext();

export const ChatProvider = () => {
  const [chatData, setChatData] = useState([
    {
      id: 1,
      fName: "Sasuke",
      lName: "Uchiha",
      userImageURL: userImage1,
      time: "8:30 PM",
      active: true,
      link: "/message",
      message: [
        {
          id: 1,
          textMessage: "Hello There, How are you?",
        },

        {
          id: 2,
          textMessage: "where are you?",
        },

        {
          id: 3,
          textMessage: "When you go home?",
        },

        {
          id: 4,
          textMessage: "When you come?",
        },
      ],
    },

    {
      id: 2,
      fName: "Rin",
      lName: "",
      userImageURL: userImage2,
      time: "3:40 PM",
      active: false,
      link: "chat/message",
      message: [
        {
          id: 1,
          textMessage: "Hello There, How are you?",
        },

        {
          id: 2,
          textMessage: "where are you?",
        },

        {
          id: 3,
          textMessage: "When you go home?",
        },

        {
          id: 4,
          textMessage: "When you come?",
        },
      ],
    },

    {
      id: 3,
      fName: "Sakura",
      lName: "Haruno",
      userImageURL: userImage3,
      time: "10:04 AM",
      active: false,
      link: "chat/message",
      message: [
        {
          id: 1,
          textMessage: "Hello There, How are you?",
        },

        {
          id: 2,
          textMessage: "where are you?",
        },

        {
          id: 3,
          textMessage: "When you go home?",
        },

        {
          id: 4,
          textMessage: "When you come?",
        },
      ],
    },

    {
      id: 4,
      fName: "Ino",
      lName: "",
      userImageURL: userImage4,
      time: "12:32 PM",
      active: false,
      link: "chat/message",
      message: [
        {
          id: 1,
          textMessage: "Hello There, How are you?",
        },

        {
          id: 2,
          textMessage: "where are you?",
        },

        {
          id: 3,
          textMessage: "When you go home?",
        },

        {
          id: 4,
          textMessage: "When you come?",
        },
      ],
    },

    {
      id: 5,
      fName: "Naruto",
      lName: "Uzumaki",
      userImageURL: userImage5,
      time: "10:11 AM",
      active: true,
      link: "chat/message",
      message: [
        {
          id: 1,
          textMessage: "Hello There, How are you?",
        },

        {
          id: 2,
          textMessage: "where are you?",
        },

        {
          id: 3,
          textMessage: "When you go home?",
        },

        {
          id: 4,
          textMessage: "When you come?",
        },
      ],
    },
  ]);

  return (
    <ChatContext.Provider value={[chatData, setChatData]}>
      <ChatList />
    </ChatContext.Provider>
  );
};
