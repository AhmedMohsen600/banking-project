import React from "react";
import InfoServicesSec from "../components/InfoServicesSec";
import Menu from "../components/Menu";
import LearnMore from "../components/LearnMore";
import HeroSectionPrograme from "../components/HeroSectionPrograme";
import MenuOnMob from "../components/MenuOnMob";
import InfoServicesSecMob from "../components/InfoServicesSecMob";

const Services = () => {
  const text1 = (
    <div>
      <h3>
        Blended& experiential <br /> learning workshops& <br /> development
        tracks.
      </h3>
      <LearnMore />
    </div>
  );
  const text2 = (
    <div className="koko1">
      <h3>Consultancy in human capital development.</h3>
      <LearnMore />
    </div>
  );
  const text3 = (
    <div>
      <h3>
        Building individual <br /> development plans (IDPs).
      </h3>
      <LearnMore />
    </div>
  );
  const text4 = (
    <div className="koko1">
      <h3>Career coaching (individual, groups).</h3>
      <LearnMore />
    </div>
  );
  //
  const pragra = (
    <p style={{ color: "black" }}>
      We deliver differentiated learning & consultancy <br /> services to
      selected customers with a special focus <br /> on content and customer
      experience.
    </p>
  );
  const h1 = <h1>Services</h1>;
  return (
    <div
      className="services"
      style={{
        position: "relative",
        backgroundColor: "#f3eade",
      }}
    >
      <MenuOnMob />
      <Menu />
      <HeroSectionPrograme textP={pragra} textH1={h1} />
      <div style={{ marginTop: "50px" }}>
        <InfoServicesSec text={text1} order1={1} order2={2} />
        <InfoServicesSec order1={2} order2={1} text={text2} />
        <InfoServicesSec order1={1} order2={2} text={text3} />
        <InfoServicesSec order1={2} order2={1} text={text4} />
        <InfoServicesSecMob />
        <InfoServicesSecMob />
        <InfoServicesSecMob />
        <InfoServicesSecMob />
      </div>
    </div>
  );
};

export default Services;
