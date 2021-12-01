import React from "react";
import bank from "../img/bankView.jpg";
import LearnMore from "./LearnMore";
const AboutSection = () => {
  return (
    <div className="about-sec">
      <div className="about-info">
        <h3>
          We are a group of banking consltants,career coaches and experts hell
          bent on helping young dreamers to realize their full potenial in the
          banking industry.
        </h3>
        <LearnMore />
      </div>
      <div className="about-img">
        <img src={bank} alt="bank" />
      </div>
    </div>
  );
};

export default AboutSection;
