import React from "react";

const Footer = (props) => {
  const showRefs = (evt) => {
    evt.preventDefault();
    props.showRR();
  };
  return (
    <div className="footer">
      <h6 onClick={showRefs}>Referencias y recursos</h6>
      <a href="https://www.linkedin.com/in/mgraceshyubarcel/" className="reg">
        M Grace® | 2020
      </a>
      <span className="refsIcon"></span>
    </div>
  );
};

export default Footer;
