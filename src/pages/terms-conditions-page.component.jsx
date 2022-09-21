import React, { useState, useEffect } from "react";
import Loading from "../components/loading.component";
import { urls } from "../url";

const TermsConditionsPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [termsConditions, setTermsConditions] = useState([]);

  useEffect(() => {
    fetch(urls + "terms-conditions/")
      .then((res) => res.json())
      .then((data) => setTermsConditions(data));
  }, []);

  return (
    <div className="terms-conditions-page">
      {termsConditions[0] !== undefined ? (
        <React.Fragment>
          <h2>Terms & Conditions</h2>

          {termsConditions.map((termsCondition) => (
            <React.Fragment key={termsCondition.id}>
              <h3>{termsCondition.title}</h3>

              <p>{termsCondition.content}</p>
            </React.Fragment>
          ))}
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TermsConditionsPageComponent;
