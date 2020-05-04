import React from "react";
import Card from "./Card";
import CurrentDay from "./CurrentDay";

const Main = () => {
  return (
    <React.Fragment>
      <CurrentDay />
      <Card />
    </React.Fragment>
  );
};

export default Main;
