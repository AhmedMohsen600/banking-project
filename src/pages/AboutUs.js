import React from "react";
import Challenges from "../components/AboutUschallenges";
import AboutUsInfo from "../components/AboutUsInfo";
import KnowUs from "../components/AboutUsKnowUs";
import ReconizedPrograme from "../components/AboutUsReconize";
import AboutUsStrategy from "../components/AboutUsStrategy";
import TimeLine from "../components/AboutUsTimeLine";
import HeroSectionPrograme from "../components/HeroSectionPrograme";
import Menu from "../components/Menu";
import MenuOnMob from "../components/MenuOnMob";

const AboutUs = () => {
  const text1 = <h1>About Us</h1>;
  return (
    <div className="about-us">
      <MenuOnMob />
      <Menu />
      <HeroSectionPrograme textH1={text1} />
      <AboutUsInfo />
      <AboutUsStrategy />
      <Challenges />
      <ReconizedPrograme />
      <div style={{ isolation: "isolate" }}>
        <KnowUs />
      </div>
      <TimeLine />
    </div>
  );
};

export default AboutUs;
