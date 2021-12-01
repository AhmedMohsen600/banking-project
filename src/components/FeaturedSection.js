import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/Slider";
import EventSliderCard from "./EventSliderCard";
const FeatureSection = () => {
  const element = useRef(null);
  const onDrag = () => {
    element.current.style.cursor = "grabbing";
  };
  const onDragEnd = () => {
    element.current.style.cursor = "grab";
  };
  return (
    <div className="feature-sec">
      <div className="feature-info">
        <h3>
          Featured <br /> Events
        </h3>
        <div className="view">
          <p className="on-desktop">View All events </p>
          <p className="on-mob">View All</p>
          <FontAwesomeIcon
            className="angel-right"
            color="white"
            icon={faAngleRight}
          />
        </div>
      </div>
      <div
        onMouseDown={onDrag}
        onMouseUp={onDragEnd}
        ref={element}
        className="slider-holder"
      >
        <Slider Card={EventSliderCard} mob={1.1} desktop={2.1} tablet={2} />
      </div>
    </div>
  );
};

export default FeatureSection;
