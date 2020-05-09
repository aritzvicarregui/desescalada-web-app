import React from "react";

const PhasesButton = (props) => {
  const showInfo = () => {};
  return (
    <div className="phases" onClick={showInfo}>
      <h4>Fases desescalada</h4>
      <p>+ información detallada</p>
      <span className="phasesIcon"></span>
    </div>
  );
};

export default PhasesButton;
