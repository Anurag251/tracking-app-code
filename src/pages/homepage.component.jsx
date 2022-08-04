import React from "react";
import Banner from "../components/banner.componant";
import EarnWithUs from "../components/earn-with-us.component";
import Feature from "../components/feature.componsnt";
import HowToUse from "../components/how-to-use.component";
import Solutions from "../components/solutions.component";
import Testimonial from "../components/testimonial.component";

const Homepage = () => {
  // const [isMobView, setIsMobView] = useState(false);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // useEffect(() => {
  //   if (window.innerWidth <= 600) {
  //     setIsMobView(true);
  //   } else {
  //     setIsMobView(false);
  //   }
  // }, []);

  return (
    <div className="homepage">
      <Banner />
      <section>
        <Feature />
      </section>

      <section>
        <Solutions />
      </section>

      <section>
        <HowToUse />
      </section>

      <section>
        <EarnWithUs />
      </section>

      <section>
        <Testimonial />
      </section>
    </div>
  );
};

export default Homepage;
