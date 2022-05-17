import React from "react";

const feature1 =
  "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const feature2 =
  "https://images.pexels.com/photos/5696170/pexels-photo-5696170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const feature3 =
  "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

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
        <h3 className="name">Warehouse</h3>
        <p className="desc">
          The best offers and combos at the best price you can get. Grab it
          before it’s too late!
        </p>
      </div>
    </>
  );
};
