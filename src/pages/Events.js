import React from "react";
import EventUpComing from "../components/EventsUpComing";
import HeroSectionPrograme from "../components/HeroSectionPrograme";
import Menu from "../components/Menu";
import MenuOnMob from "../components/MenuOnMob";

const Events = () => {
  const h1Text = <h1>Events</h1>;
  return (
    <div style={{ backgroundColor: "#f3ebde" }}>
      <MenuOnMob />
      <Menu />
      <HeroSectionPrograme textH1={h1Text} />
      <div className="events-holder">
        <EventUpComing text="Upcoming" />
        <EventUpComing text="Recent" />
      </div>
    </div>
  );
};

export default Events;
