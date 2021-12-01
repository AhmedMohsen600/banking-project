import React from "react";

const PartnerSection = () => {
  const compaines = [1, 2, 3, 4, 5, 6];
  return (
    <div className="partner-sec">
      <div className="partner-info">
        <h3>Our partners</h3>
        <p>Here are some of the compaines that we are working with</p>
      </div>
      <div className="holder">
        {compaines.map((comp, index) => (
          <div key={index} className="small-card"></div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
