import React from "react";

const Text = (props) => {
  const value = props.value;
  const val = Object.entries(value);
  console.log(val);
  return (
    <ul className="infoList">
      {val.map((obj, index) => (
        <li key={index} className="li">
          <span
            className={obj[1] !== null ? `icon ${obj[0]}` : `icon  ${obj[0]}`}
          ></span>
          <span className={obj[1] !== null ? "yes" : "no"}></span>
          <p className="infoText">
            {obj[0]} : {obj[1] !== null ? obj[1] : "no permitido"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Text;
