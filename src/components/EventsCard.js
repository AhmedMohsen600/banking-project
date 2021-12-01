import React from "react";
import bankView from "../img/bankView.jpg";
const EventsCard = () => {
  return (
    <div className="event-card">
      <div className="img-holder">
        <img src={bankView} alt="bank" />
      </div>
      <div className="card-info">
        <h3>Events gose here</h3>
        <p className="event-time">7:00 Am | 1 jul 2020</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est enim eos
          dolor debitis unde excepturi!
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
