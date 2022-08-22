import React, { useState, useEffect } from "react";
import FullCard from "../components/fullcard.component";
import PageBanner from "../components/page-banner.component";
import { urls } from "../url";

const Aboutpage = () => {
  const [aboutUsDatas, setAboutUsDatas] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(urls + "aboutus/")
      .then((res) => res.json())
      .then((data) => {
        setAboutUsDatas(data);
      });
  }, []);

  return (
    <div className="about-page">
      <PageBanner title="About Us">
        Tracking App is a transportation technology providing a full range of
        app-based services including ride-sharing, food delivery and free games.
      </PageBanner>

      <section className="no-padding">
        {aboutUsDatas.map((aboutUsData, idx) => {
          return (
            <FullCard
              key={idx}
              title={aboutUsData.title}
              image={aboutUsData.image}
              rotate={idx % 2 === 0 ? true : false}
            >
              {aboutUsData.description?.length > aboutUsData.description.length
                ? aboutUsData.description.substr(
                    0,
                    aboutUsData.description.length - 1
                  ) + "..."
                : aboutUsData.description}
            </FullCard>
          );
        })}
      </section>
    </div>
  );
};

export default Aboutpage;
