import React from "react";
import ViewDetails from "./ViewDetails";

const ProgrameCard = () => {
  return (
    <div className="programe-card">
      <div className="img-holder">
        {/* <img src={bankView} alt="bank" /> */}
      </div>
      <div className="programe-info">
        <h3>Fit for banking</h3>
        <p>
          To Empower the capabilites of Banks and Bankers through best in-class
          learning and consulting services, powerd by digital.
        </p>
        <ViewDetails />
      </div>
    </div>
  );
};

export default ProgrameCard;
