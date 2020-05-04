import React from "react";
import Panel from "./Panel";
import Phases from "./Phases";

const Main = (props) => {
  const { month, date, day, phase } = props;
  console.log(props);
  return (
    <React.Fragment>
      <Panel month={month} date={date} day={day} phase={phase} />
      <Phases />
    </React.Fragment>
  );
};

export default Main;
