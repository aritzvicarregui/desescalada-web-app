import React from "react";

const CurrentDay = () => {
  const today = new Date();
  const date = today.getMonth() + 1 + today.getDate();

  return <div className="date">{date}</div>;
};

export default CurrentDay;
