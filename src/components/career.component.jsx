import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./custom-button.component";

import img1 from "../assets/images/profile.jpg";
import img2 from "../assets/images/feature1.png";
import img3 from "../assets/images/banner2.png";
import img4 from "../assets/images/feature2.png";

const CareerComponent = () => {
  return (
    <div className="career">
      <div className="list">
        <Link to="/career-details">
          <div className="item">
            <div className="image-section">
              <img src={img1} alt="" />
            </div>

            <div className="name">Hello Worlds</div>

            <p>
              <i className="fas fa-briefcase"></i> Full Time
            </p>

            <CustomButton>Apply Now</CustomButton>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CareerComponent;
