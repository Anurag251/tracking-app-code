import React from "react";
import { WhatsNewProvider } from "../context/mobile-whats-new-context";
import MobileTitle from "./mobile-title.component";
import WhatsNewSlider from "./mobile-whats-new-slider.component";

const WhatsNew = () => {
  return (
    <div className="whats-new">
      <MobileTitle goTo="/">Shipping Services</MobileTitle>

      <ul className="cate-opt">
        <li className="active">All</li>
        <li>Electronic</li>
        <li>Dress</li>
        <li>Shooes</li>
      </ul>

      <div className="item-list">
        <WhatsNewProvider>
          <WhatsNewSlider />
        </WhatsNewProvider>
      </div>
    </div>
  );
};

export default WhatsNew;
