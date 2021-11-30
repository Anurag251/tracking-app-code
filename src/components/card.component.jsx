import React from "react";
import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";

export const Card = () => {
  return (
    <>
      <div className="card">
        <img src={feature1} alt="cardImage" />
        <h3 className="name">Fastest Delivery</h3>
        <p className="desc">
          Get your food delivered quickly to your doorstep within 45 minutes!
          That's the fastest food you can get.
        </p>
      </div>

      <div className="card">
        <img src={feature2} alt="cardImage" />
        <h3 className="name">So Much to Choose From</h3>
        <p className="desc">
          Find your favorite cuisines from thousands of restaurants we offer.
          Anything you crave for, we have it.
        </p>
      </div>

      <div className="card">
        <img src={feature3} alt="cardImage" />
        <h3 className="name">Best offers in town</h3>
        <p className="desc">
          The best offers and combos at the best price you can get. Grab it
          before it’s too late!
        </p>
      </div>
    </>
  );
};
