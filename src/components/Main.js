import React from "react";
import Panel from "./Panel";

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
    </React.Fragment>
  );
};

export default Main;
