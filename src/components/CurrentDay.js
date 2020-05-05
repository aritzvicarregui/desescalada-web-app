import React from "react";

const CurrentDay = (props) => {
  return (
    <div className="currentDate">
      <span className="day">{props.day}</span>
      <span className="date">, {props.date} de </span>
      <span className="month">{props.month}</span>
    </div>
  );
};

export default CurrentDay;
