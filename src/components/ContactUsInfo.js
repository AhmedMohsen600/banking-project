import React from "react";
export default function ContactUsInfo() {
  return (
    <div className="contact-content">
      <div className="contact-info-parent">
        <div className="img-holder"></div>
        <div className="contact-info-holder">
          <div className="contact-info">
            <div className="contact-details">
              <h3>Hello@bankerslearninghub.com</h3>
              <p className="number">+201113334161</p>
            </div>
            <div className="line"></div>
            <div className="adress">
              <h3 className="on-desktop">
                8.Hafez Ramdan St. 4th floor, Office <br /> 12, Nasr City, Cairo
                11765, Egypt.
              </h3>
              <h3 className="on-mob">
                8.Hafez Ramdan St. <br /> 4th floor, Office 12, Nasr <br />{" "}
                City, Cairo 11765, Egypt.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
