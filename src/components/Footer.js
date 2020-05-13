import React from "react";

const Footer = (props) => {
  const showRefs = (evt) => {
    evt.preventDefault();
    props.openRR();
  };

  return (
    <footer className="footer">
      <h6 onClick={showRefs}>Referencias y recursos</h6>
      <a href="https://www.linkedin.com/in/mgraceshyubarcel/" className="reg">
        M Grace® | 2020
      </a>
      <span className="refsIcon" onClick={showRefs}></span>
    </footer>
  );
};

export default Footer;
