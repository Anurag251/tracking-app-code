import React from "react";
import earnWithUsImage from "../assets/images/earnWithUs.png";
import CustomButton from "./custom-button.component";

const EarnWithUs = () => {
  return (
    <div className="earn-with-us">
      <div className="image">
        <img src={earnWithUsImage} alt="" />
      </div>

      <div className="details">
        <div className="name">Got a Bike/Cycle? Earn with us</div>
        <ul>
          <li>The freedom to give the service whenever you want</li>
          <li>Earn extra with daily quests and special offers</li>
          <li>Always get your payment right on time!</li>
        </ul>

        <CustomButton>Become a Delivery Person</CustomButton>
      </div>
    </div>
  );
};

export default EarnWithUs;
