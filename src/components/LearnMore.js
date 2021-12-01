import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const LearnMore = () => {
  return (
    <div className="learn-more">
      <p>Learn More</p>
      <FontAwesomeIcon
        color="#064875"
        className="angel-right"
        icon={faAngleRight}
      />
    </div>
  );
};

export default LearnMore;
