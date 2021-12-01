import React from "react";
import LearnMore from "./LearnMore";

const Card = () => {
  return (
    <div className="card">
      <div className="img-holder"></div>
      <div className="info-holder">
        <h4>This is The Course titleit could be in 2 lines</h4>
        <LearnMore />
      </div>
    </div>
  );
};
export default Card;
