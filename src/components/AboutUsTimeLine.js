import React from "react";
import AboutUsSlider from "./AboutUsSlider";

const TimeLine = () => {
  return (
    <div style={{ backgroundColor: "#f3ebde" }} className="timeline">
      <div className="timeline-info">
        <h2>Corporate timeline</h2>
      </div>
      <div className="slider-holder">
        <AboutUsSlider />
      </div>
    </div>
  );
};

export default TimeLine;
