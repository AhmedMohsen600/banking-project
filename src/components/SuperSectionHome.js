import { useScrollTrigger } from "@material-ui/core";
import Menu from "../components/Menu";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeaturedSection";
import MenuOnMob from "./MenuOnMob";
import PartnerSection from "./PartnerSection";
import ProgramsSectionHome from "./ProgramsSectionHome";
import React from "react";
const SuperSectionHome = () => {
  // const koko = (window.onscroll = () => {
  //   const doc = document.documentElement;
  //   const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  //   console.log("im suck as hell");
  //   if (top > window.innerHeight)
  //     document.querySelector(".menu").style.position = "sticky";
  //   else document.querySelector(".menu").style.position = "fixed";
  // });
  const trigger = useScrollTrigger({
    threshold: window.innerHeight,
  });

  return (
    <div className="super-section">
      <MenuOnMob
        opacity={trigger ? "1" : "0"}
        zIndex={trigger ? "20" : "-20"}
        height={trigger ? "10vh" : "0vh"}
      />

      <div className="menu-holder">
        <Menu menuPosition={trigger ? "fixed" : "sticky"} />
      </div>
      <AboutSection />
      <ProgramsSectionHome />
      <FeatureSection />
      <PartnerSection />
    </div>
  );
};
export default SuperSectionHome;
