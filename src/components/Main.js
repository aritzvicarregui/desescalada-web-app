import React from "react";
import Panel from "./Panel";
import PhasesButton from "./PhasesButton";

const Main = (props) => {
  const { month, date, day, phase, city, getCity, activities } = props;

  return (
    <React.Fragment>
      <Panel
        activities={activities}
        month={month}
        date={date}
        day={day}
        phase={phase}
        city={city}
        getCity={getCity}
      />
      <PhasesButton />
    </React.Fragment>
  );
};

export default Main;
