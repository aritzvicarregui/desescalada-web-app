import React from "react";

const CurrentPhase = (props) => {
  return (
    <div className="currentPhase">
      <h3> Fase actual &#187; {props.phase}</h3>
    </div>
  );
};

export default CurrentPhase;
