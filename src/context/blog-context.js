import React, { useState, createContext } from "react";
import blogImg1 from "../assets/images/about1.png";
import blogImg2 from "../assets/images/about2.png";
import blogImg3 from "../assets/images/earnWithUs.png";
import blogImg4 from "../assets/images/how-to-use.png";
import Blog from "../components/blog.component";

export const BlogContext = createContext();

export const BlogProvider = () => {
  const [blogDatas, setBlogDatas] = useState([
    {
      id: 1,
      title: "Tracking App Ride-sharing ",
      date: "dec 03, 2021",
      imageURL: blogImg1,
    },

    {
      id: 2,
      title: "Update your cart on Tracking App Food",
      date: "sep 10, 2021",
      imageURL: blogImg2,
    },

    {
      id: 3,
      title: "Ridesharing Insurance: For the first time in Nepal",
      date: "jan 06, 2021",
      imageURL: blogImg3,
    },

    {
      id: 4,
      title: "How to participate in the Tracking App Smile-Utsav Campaign?",
      date: "dec 06, 2021",
      imageURL: blogImg4,
    },
  ]);

  return (
    <BlogContext.Provider value={[blogDatas, setBlogDatas]}>
      <Blog />
    </BlogContext.Provider>
  );
};
