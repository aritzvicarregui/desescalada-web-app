import React from "react";
import Panel from "./Panel";
import Phases from "./Phases";

const Main = (props) => {
  const { month, date, day, phase, modal } = props;

  return (
    <React.Fragment>
      <Panel month={month} date={date} day={day} phase={phase} modal={modal} />
      <Phases />
    </React.Fragment>
  );
};

export default Main;
