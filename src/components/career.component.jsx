import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./custom-button.component";

import { urls } from "../url";

const CareerComponent = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch(urls + "career/")
      .then((res) => res.json())
      .then((data) => setCareers(data));
  }, []);

  return (
    <div className="career">
      {careers[0] !== undefined ? (
        <div className="list">
          {careers.map((career) => (
            <Link to={`/career-details/${career.id}`} key={career.id}>
              <div className="item">
                <div className="image-section">
                  <img src={career.image} alt="" />
                </div>

                <div className="name">{career.title}</div>

                <p>
                  <i className="fas fa-briefcase"></i>{" "}
                  {career.type === "Full" ? "Full Time" : "Part Time"}
                </p>

                <p>
                  <i className="fas fa-clock"></i> Deadline: {career.end_date}
                </p>

                <CustomButton>View Details</CustomButton>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2>Opps! No vacancy right now</h2>
      )}
    </div>
  );
};

export default CareerComponent;
