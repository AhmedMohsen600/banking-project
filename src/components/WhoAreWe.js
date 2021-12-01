import React from "react";

const WhoAreWe = ({ text, h3Color, borderColor }) => {
  return (
    <div style={borderColor} className="who-are-we">
      <h3 style={h3Color}>{text}</h3>
    </div>
  );
};

export default WhoAreWe;
