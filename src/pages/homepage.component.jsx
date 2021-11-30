import React from "react";
import Banner from "../components/banner.componant";
import EarnWithUs from "../components/earn-with-us.component";
import Feature from "../components/feature.componsnt";
import HowToUse from "../components/how-to-use.component";

const Homepage = () => (
  <div className="homepage">
    <Banner />
    <section>
      <Feature />
    </section>

    <section>
      <HowToUse />
    </section>

    <section>
      <EarnWithUs />
    </section>
  </div>
);

export default Homepage;
