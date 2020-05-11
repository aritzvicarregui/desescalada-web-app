import React from "react";

const Footer = (props) => {
  const showRefs = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="footer">
      <h6 onClick={showRefs}>Referencias y recursos.</h6>
      <p>Mercy | 2020</p>
      <span className="phasesIcon"></span>
    </div>
  );
};

export default Footer;
