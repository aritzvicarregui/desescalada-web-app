import React from "react";

const Activity0 = (props) => {
  const infoHandler = (evt) => {
    evt.preventDefault();
    props.displayInfo(evt.target.id);
  };
  return (
    <div className="activities">
      <ul>
        <li className="activity" id="ceremonias" onClick={infoHandler}>
          <span className="icon__ceremonias"></span>
          <h3>Ceremonias religiosas</h3>
          <span
            className={props.id === "ceremonias" ? "display" : "hidden"}
          ></span>
        </li>
        <li className="activity" id="comercios" onClick={infoHandler}>
          <span className="icon__comercios"></span>
          <h3>Comercios</h3>
          <span
            className={props.id === "comercios" ? "display" : "hidden"}
          ></span>
        </li>
        <li className="activity" id="deportes" onClick={infoHandler}>
          <span className="icon__deportes"></span>
          <h3>Deporte</h3>
          <span
            className={props.id === "deportes" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="eventos" onClick={infoHandler}>
          <span className="icon__eventos"></span>
          <h3>Eventos</h3>
          <span
            className={props.id === "eventos" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="funerales" onClick={infoHandler}>
          <span className="icon__funerales"></span>
          <h3>Funerales</h3>
          <span
            className={props.id === "funerales" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="hosteleria" onClick={infoHandler}>
          <span className="icon__hosteleria"></span>
          <h3>Hostelería</h3>
          <span
            className={props.id === "hosteleria" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="ocio" onClick={infoHandler}>
          <span className="icon__ocio"></span>
          <h3>Ocio y Cultura</h3>
          <span className={props.id === "ocio" ? "display" : "hidden"}></span>
        </li>
      </ul>
    </div>
  );
};

export default Activity0;
