import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/about1.png";
import CustomButton from "../components/custom-button.component";

const CareerDetailsPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-details-page">
      <div className="image-sec">
        <img src={image} alt="" />
      </div>

      <h3 className="title">Hello Worlds</h3>

      <Link to="/apply-now">
        <CustomButton>Apply Now</CustomButton>
      </Link>

      <p>
        <i class="fas fa-briefcase"></i> Full Time
      </p>

      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae
        repudiandae, aperiam facere atque necessitatibus voluptatibus dolorem
        illum sequi saepe vero possimus aut, rem odit neque obcaecati maiores
        delectus reprehenderit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quia molestiae repudiandae, aperiam facere atque
        necessitatibus voluptatibus dolorem illum sequi saepe vero possimus aut,
        rem odit neque obcaecati maiores delectus reprehenderit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quia molestiae repudiandae,
        aperiam facere atque necessitatibus voluptatibus dolorem illum sequi
        saepe vero possimus aut, rem odit neque obcaecati maiores delectus
        reprehenderit.
      </p>

      <h4>Requirement</h4>

      <p className="desc">
        Job requirements are the skills, experiences and qualities an employer
        deems necessary for a candidate to be considered for a role. Job
        requirements — also called prerequisites or qualifications — are an
        important part of any job description and cannot be overlooked by either
        the employer or prospective employee.
      </p>

      <h4>Role & Responsibility</h4>

      <ul>
        <li>communicate with customers via phone, email, and social media</li>

        <li>respond promptly to customers’ complaints and questions</li>

        <li>give customers information about products and services</li>

        <li>process orders, forms, applications, and requests</li>

        <li>maintain a positive and professional attitude toward customers</li>

        <li>
          In-house and on-site communications and meetings with clients.
          Meetings can take place during regular and weekend business hours
        </li>

        <li>
          Using AutoCAD, BIM/Revit software. Software is to be used for the
          design and development of interior finishes, concepts, and themes.
        </li>

        <li>
          Preparation of construction documents for interiors and architectural
          components. Prepare presentations for client review and sales.{" "}
        </li>

        <li>
          Development of solutions to technical, design, and fixture delivery
          problems following established standards and codes.{" "}
        </li>
      </ul>
    </div>
  );
};

export default CareerDetailsPageComponent;
