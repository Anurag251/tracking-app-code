import React, { createContext, useState } from "react";
import WhatsNewSlider from "../mobile-components/mobile-whats-new-slider.component";

const whatsNewImg1 =
  "https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
const whatsNewImg2 =
  "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const whatsNewImg3 =
  "https://images.pexels.com/photos/6947683/pexels-photo-6947683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const whatsNewImg4 =
  "https://images.pexels.com/photos/5816955/pexels-photo-5816955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const WhatsNewContext = createContext();

export const WhatsNewProvider = () => {
  const [whatsNewData, setWhatsNewData] = useState([
    {
      id: 1,
      name: "Special Sale",
      price: "1200",
      imageURL: whatsNewImg1,
    },

    {
      id: 2,
      name: "Food Eat",
      price: "1200",
      imageURL: whatsNewImg2,
    },

    {
      id: 3,
      name: "Go To Play Home",
      price: "1200",
      imageURL: whatsNewImg3,
    },

    {
      id: 4,
      name: "Hello there, How are you",
      price: "1200",
      imageURL: whatsNewImg4,
    },
  ]);

  return (
    <WhatsNewContext.Provider value={[whatsNewData, setWhatsNewData]}>
      <WhatsNewSlider />
    </WhatsNewContext.Provider>
  );
};
