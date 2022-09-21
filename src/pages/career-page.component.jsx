import React, {useEffect} from "react";
import CareerComponent from "../components/career.component";

const CareerPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-page">
      <h1 className="title">Career</h1>

      <CareerComponent />
    </div>
  );
};

export default CareerPageComponent;
