import React from "react";

const CurrentDay = (props) => {
  return (
    <div className="currentDate">
      <h1 className="day">{props.day}</h1>
      <h2 className="date">
        {props.date} {props.month} {props.year}
      </h2>
    </div>
  );
};

export default CurrentDay;
