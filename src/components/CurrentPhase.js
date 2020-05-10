import React from "react";

const CurrentPhase = (props) => {
  const { phase } = props;
  return (
    <div className="currentPhase">
      <h3>Fase: {phase}</h3>
    </div>
  );
};

export default CurrentPhase;
