import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const KnowUs = () => {
  return (
    <div className="know-us">
      <div className="overlay"></div>
      <div className="know-us-handler">
        <h3>
          We Deliver differentiated learning & consultancy <br /> services to
          selected customers with an special foucs on <br /> content and
          customer experience.
        </h3>
        <div className="our-services">
          <h4>Our services</h4>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
