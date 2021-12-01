import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const ViewDetails = () => {
  return (
    <div className="view-details">
      <h4>View details</h4>
      <FontAwesomeIcon
        style={{ transform: "translateY(3px)" }}
        color="#064875"
        className="angel-right"
        size="1x"
        icon={faAngleRight}
      />
    </div>
  );
};

export default ViewDetails;
