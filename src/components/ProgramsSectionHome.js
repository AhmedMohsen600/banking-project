import React, { useRef } from "react";
import Card from "./Card";
import Slider from "./Slider";

const ProgramsSectionHome = () => {
  const element = useRef(null);
  const draggable = () => {
    element.current.style.cursor = "grabbing";
  };
  const undraggable = () => {
    element.current.style.cursor = "grab";
  };
  return (
    <div className="programe-sec">
      <div className="title">
        <h2>Programs & Certificates</h2>
      </div>
      <div
        onMouseDown={draggable}
        onMouseUp={undraggable}
        ref={element}
        className="slider-holder"
      >
        <Slider Card={Card} mob={1.1} tablet={2} desktop={3.2} />
      </div>
    </div>
  );
};

export default ProgramsSectionHome;
