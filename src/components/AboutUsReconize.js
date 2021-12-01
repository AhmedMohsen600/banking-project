import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import bankView from "../img/bankView.jpg";
const ReconizedPrograme = () => {
  return (
    <div className="bad-guy">
      <div className="bad-info">
        <h2>Recognized Programe by</h2>
        <h3>The London Institute of Banking & Finance</h3>
        <p className="on-desktop">
          Providing Banks with the best-in-class learning & consulting
          <br />
          solutions through a wide range of banking & non-Banking
          <br /> Models & Products. Helping mutli-levels of bankers with a
          <br />
          wide range of learning & Development services, Programs
          <br /> and Certifications to realize their full potenial in Banking
          <br />
          Industry
        </p>
        <p className="on-mob">
          Providing Banks with the best-in-class learning & consulting solutions
          through a wide range of banking & non-Banking Models & Products.
          Helping mutli-levels of bankers with a wide range of learning &
          Development services, Programs and Certifications to realize their
          full potenial in Banking Industry
        </p>
        <div className="programe-view">
          <h4>View our programs </h4>
          <span>
            <FontAwesomeIcon icon={faAngleRight} color="#064875" />
          </span>
        </div>
      </div>
      <div className="img-holder">
        <img src={bankView} alt="bank" />
      </div>
    </div>
  );
};

export default ReconizedPrograme;
