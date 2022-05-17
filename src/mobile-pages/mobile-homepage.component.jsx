import React from "react";
import WhatsNew from "../mobile-components/whats-new.component";
import MobileSlider from "../mobile-components/mobile-slider.component";
import { MobileSliderProvider } from "../context/mobile-context";

const MobileHomepage = () => {
  return (
    <div className="mobile-homepage">
      <div className="mobile-section">
        <MobileSliderProvider>
          <MobileSlider perView="1" fullViewSlide />
        </MobileSliderProvider>
      </div>
      <div className="mobile-section">
        <WhatsNew />
      </div>
    </div>
  );
};

export default MobileHomepage;
