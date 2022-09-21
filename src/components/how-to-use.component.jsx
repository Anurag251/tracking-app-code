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
            <p>How to use our app</p>
            <div className="name">Elites Logestics</div>
          </div>
        </div>

        <div className="procress">
          <div className="step">
            <div className="sn">01</div>
            <div className="name">Let's Start Delivery</div>
            <p>You got product to deliver from your stroe</p>

            <div className="btn-group">
              <a
                href="https://delivery.eliteslogistics.com/login"
                target="blank"
              >
                <CustomButton>Login</CustomButton>
              </a>

              <a
                href="https://delivery.eliteslogistics.com/sign-up"
                target="blank"
              >
                <CustomButton>Sign Up</CustomButton>
              </a>
            </div>
          </div>

          <div className="step">
            <div className="sn">02</div>
            <div className="name">
              How to become a partner and initiate delivery?
            </div>
            <p>
              Click here to know the process of how you can become our delivery
              partner
            </p>

            <a
              href="https://delivery.eliteslogistics.com/sign-up"
              target="blank"
            >
              <CustomButton>Sign Up As Vendor</CustomButton>
            </a>
          </div>

          {/* <div className="step">
            <div className="sn">03</div>
            <div className="name">
              Confirm your order and track your product
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div> */}
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HowToUse;
