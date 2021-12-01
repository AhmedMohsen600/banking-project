import React from "react";
import WhoAreWe from "./WhoAreWe";

function Challenges() {
  const borderColor = {
    borderRight: "1px solid #b2bcc0",
  };

  return (
    <div style={{ backgroundColor: "#064875" }} className="about-us-info">
      <WhoAreWe borderColor={borderColor} text="Why BLH" />
      <div className="challenges-info">
        <div className="challenges-koko">
          <h6 className="on-desktop">
            We've faced Same Challenges corporate& individuals face and we
            answerd
            <br />
            the same questions, we've scaled the corporate jungle gym and we
            know the <br /> ropes.
          </h6>
          <h6 className="on-mob">
            We've faced Same Challenges corporate& individuals face and we
            answerd the same questions, we've scaled the corporate jungle gym
            and we know the ropes.
          </h6>
          <h6 className="on-desktop">
            We have understand the ascent can be challenging, and it isn't
            always perfect, it's <br /> why our approach isn't coddle you,
            sugarcoat your situation, or wrap you in a <br /> warm, spiritual
            embrace.
          </h6>
          <h6 className="on-mob">
            We have understand the ascent can be challenging, and it isn't
            always perfect, it's why our approach isn't coddle you, sugarcoat
            your situation, or wrap you in a warm, spiritual embrace.
          </h6>
          <h6 className="on-desktop">
            Our strength come from experience, pushing boundaries, even at times
            when <br /> we were fearful.
          </h6>
          <h6 className="on-mob">
            Our strength come from experience, pushing boundaries, even at times
            when <br /> we were fearful.
          </h6>
          <h6>We foucs forward to ultimately rise-up.</h6>
          <h6>
            Let's get crystal clear on what your're after and design the
            blueprint to get you <br /> there.
          </h6>
          <h6>
            Banking is our playground and we know its bread and butter things.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
