import React from "react";
import EventsCard from "./EventsCard";

const EventUpComing = ({ text }) => {
  return (
    <div className="event-parent">
      <h3 className="event-title">{text}</h3>
      <div className="cards-holder">
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

export default EventUpComing;
