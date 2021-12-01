import React from "react";
import WhoAreWe from "./WhoAreWe";

const AboutUsStrategy = () => {
  const h3Color = {
    color: "black",
  };
  const borderColor = {
    borderRight: "1px solid #73726e",
  };

  return (
    <div style={{ backgroundColor: "#f3ebde" }} className="about-us-info">
      <WhoAreWe
        borderColor={borderColor}
        h3Color={h3Color}
        text="BLH Strategy"
      />
      <div className="who-are-mission">
        <div className="mission-info">
          <h5>Mission</h5>
          <h6>
            To Empower the Capabilites of Banks and Banker through best in-class
            learning and consulting <br /> services, powered by digital.
          </h6>
        </div>
        <div className="mission-info">
          <h5>Vision</h5>
          <h6>
            BLH will become a provider of choice for banking learning &
            consulting solutions inside the <br /> Egyption market by 2023
          </h6>
        </div>
        <div className="mission-info">
          <h5>Values</h5>
          <h6>
            Deliver differentiated learning & consulting services to our
            customers with special foucs on <br /> Content Excellency and
            memorable customer experience
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUsStrategy;
