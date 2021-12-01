import React from "react";
const InfoServicesSec = ({ order1, order2, text }) => {
  return (
    <div className="info-services">
      <div className="spider" style={{ order: `${order1}` }}>
        {text}
      </div>
      <div style={{ order: `${order2}` }} className="img-holder"></div>
    </div>
  );
};

export default InfoServicesSec;
