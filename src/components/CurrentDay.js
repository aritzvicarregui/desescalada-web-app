import React from "react";

const Date = () => {
  return <span>{new Date().toDateString()}</span>;
};
export default Date;

// Date object
const currentDate = new Date();

// Current Date
var date =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  " " +
  currentDate.getDate();

document.getElementById("current_date").innerHTML = date;
