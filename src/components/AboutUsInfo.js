import React from "react";
import WhoAreWe from "./WhoAreWe";

const AboutUsInfo = () => {
  const borderColor = {
    borderRight: "1px solid #b2bcc0",
  };
  return (
    <div style={{ backgroundColor: "#064875" }} className="about-us-info">
      <WhoAreWe borderColor={borderColor} text="who are we ?" />
      <div className="who-are-dec">
        <h3 className="on-desktop">
          We are group of Banking Consultants,career coaches <br /> and experts
          hell bent on helping young dreames to realize <br /> their full
          potential in banking industry.
        </h3>
        <h3 className="on-mobile">
          We are group of Banking <br /> Consultants,career coaches and <br />
          experts hell bent on helping young dreames to realize
        </h3>
        <div className="full-dec">
          <p className="small on-desktop">
            BLH is a group of Banking Experts, Consultants, space career coaches
            and facilitators who hell-bent on
          </p>
          <p className="on-mobile">BLH is a group of Banking Experts,</p>
          <p className="boss on-desktop">
            Providing Banks Experts with the best in-class learning & consulting
            solutions through a wide range of <br /> banking & non-Banking
            Models & Products.
          </p>
          <p className="on-mobile">
            Providing Banks Experts with the best in-class learning & consulting
            solutions
          </p>

          <p className="boss on-desktop">
            Helping mutli-levels of bankers with a wide rangeof learning &
            Development services, Programs <br /> and Certifications to realize
            their full potenial in Banking industry.
          </p>
          <p className="on-mobile">
            Helping mutli-levels of bankers with a wide rangeof learning&
          </p>
          <p className="small on-desktop">
            Supporting fresh graduates who are looking for pitch their career to
            join Banking industry.
          </p>
          <p className="on-mobile">Supporting fresh graduates who are</p>
          <p className="boss on-desktop">
            BLH has set the aspiration best in class customer experience powered
            by Digital to <br /> cope with the new ERA in learning & Development
            industry and the repaid change happened in.
          </p>
          <p className="on-mobile">
            BLH has set the aspiration best in class customer
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
