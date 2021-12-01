import React from "react";
import HeroSectionHome from "../components/HeroSectionHome";

import SuperSectionHome from "../components/SuperSectionHome";

const Home = () => {
  return (
    <div className="home-page" style={{ position: "relative" }}>
      <div style={{ isolation: "isolate" }}>
        <HeroSectionHome />
      </div>
      <div id="super">
        <SuperSectionHome />
      </div>
    </div>
  );
};

export default Home;
