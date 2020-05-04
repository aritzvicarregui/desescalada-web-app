import React from "react";
import Activity from "./Activity";
import CurrentPhase from "./CurrentPhase";

const Panel = (props) => {
  const { month, date, day, phase } = props;
  return (
    <div>
      <CurrentPhase month={month} date={date} day={day} phase={phase} />
      <Activity />
    </div>
  );
};

export default Panel;
