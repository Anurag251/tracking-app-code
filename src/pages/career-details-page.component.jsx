import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomButton from "../components/custom-button.component";
import { urls } from "../url";

const CareerDetailsPageComponent = () => {
  const { careerId } = useParams();
  const [career, setCareer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(urls + `career/${careerId}`)
      .then((res) => res.json())
      .then((data) => {
        setCareer(data);
      });
  }, [careerId]);

  // let parser = new DOMParser();

  // const todayDate = new Date();

  // console.log(todayDate);

  return (
    <React.Fragment>
      {career && (
        <div className="career-details-page" key={career.id}>
          <div className="image-sec">
            <img src={career.image} alt="" />
          </div>

          <h3 className="title">{career.title}</h3>

          <Link to={`/apply-now/${careerId}`}>
            <CustomButton>Apply Now</CustomButton>
          </Link>

          <p>
            <i className="fas fa-briefcase"></i>{" "}
            {career.type === "Full" ? "Full Time" : "Part Time"}
          </p>

          <p>
            <i className="fas fa-clock"></i> Deadline: {career.end_date}
          </p>

          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: `${career.description}` }}
          ></p>

          {/*  <h4>Requirement</h4>

            <p className="desc">
              Job requirements are the skills, experiences and qualities an
              employer deems necessary for a candidate to be considered for a
              role. Job requirements — also called prerequisites or
              qualifications — are an important part of any job description and
              cannot be overlooked by either the employer or prospective
              employee.
            </p>

            <h4>Role & Responsibility</h4>

            <ul>
              <li>
                communicate with customers via phone, email, and social media
              </li>

              <li>respond promptly to customers’ complaints and questions</li>

              <li>give customers information about products and services</li>

              <li>process orders, forms, applications, and requests</li>

              <li>
                maintain a positive and professional attitude toward customers
              </li>

              <li>
                In-house and on-site communications and meetings with clients.
                Meetings can take place during regular and weekend business
                hours
              </li>

              <li>
                Using AutoCAD, BIM/Revit software. Software is to be used for
                the design and development of interior finishes, concepts, and
                themes.
              </li>

              <li>
                Preparation of construction documents for interiors and
                architectural components. Prepare presentations for client
                review and sales.{" "}
              </li>

              <li>
                Development of solutions to technical, design, and fixture
                delivery problems following established standards and codes.{" "}
              </li>
            </ul> */}
        </div>
      )}
    </React.Fragment>
  );
};

export default CareerDetailsPageComponent;
