import React from "react";
import DragonSvg from "./DragonSvg";

const HeroSectionPrograme = ({ textP, textH1 }) => {
  return (
    <div style={{ backgroundColor: "#f3ebde" }} className="hero-programe">
      <div className="strong">
        {textH1}
        {textP}
      </div>
      <DragonSvg />
    </div>
  );
};

export default HeroSectionPrograme;
