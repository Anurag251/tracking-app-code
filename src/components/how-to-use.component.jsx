import React from "react";
import CustomButton from "./custom-button.component";
import { BoxIcon } from "./icons.component";
import image from "../assets/images/how-to-use.png";

const HowToUse = () => {
  return (
    <div className="how-to-use">
      <div className="details">
        <div className="title-section">
          <div className="icon">
            <BoxIcon />
          </div>
          <div className="info">
            <p>Track Your Product With</p>
            <div className="name">Tracking App</div>
          </div>
        </div>

        <div className="procress">
          <div className="step">
            <div className="sn">01</div>
            <div className="name">Visit Our Website</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <CustomButton>Visit Website</CustomButton>
          </div>

          <div className="step">
            <div className="sn">02</div>
            <div className="name">Buy Something</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="step">
            <div className="sn">03</div>
            <div className="name">
              Confirm your order and track your product
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HowToUse;
