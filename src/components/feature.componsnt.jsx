import React, { useState, useEffect } from "react";
import { urls } from "../url";
import { Card } from "./card.component";

const Feature = () => {
  const [featureData, setFeatureData] = useState([]);
  useEffect(() => {
    fetch(urls + "feature/")
      .then((res) => res.json())
      .then((data) => setFeatureData(data));
  }, []);
  return (
    <div className="feature">
      <div className="card-list">
        {featureData.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
