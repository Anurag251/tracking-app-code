import React from "react";
import FullCard from "../components/fullcard.component";
import PageBanner from "../components/page-banner.component";
import aboutImage1 from "../assets/images/about1.png";
import aboutImage2 from "../assets/images/about2.png";

const Aboutpage = () => (
  <div className="about-page">
    <PageBanner title="About Us">
      Tracking App is a transportation technology providing a full range of
      app-based services including ride-sharing, food delivery and free games.
    </PageBanner>

    <section>
      <FullCard title="What is Tracking App?" image={aboutImage1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </FullCard>

      <FullCard title="What Tracking App Does?" image={aboutImage2} rotate>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </FullCard>
    </section>
  </div>
);

export default Aboutpage;
