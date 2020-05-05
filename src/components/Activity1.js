import React from "react";
import church from "../images/church.svg";

const Activity1 = (props) => {
  const infoHandler = (evt) => {
    evt.preventDefault();
    props.displayInfo(evt.target.id);
  };
  return (
    <div className="container">
      <ul className="activities">
        <li className="activity" id="ceremonias" onClick={infoHandler}>
          <img
            src={church}
            alt="ceremonias religiosas"
            className="img__ceremonias"
          />
          <h3>Ceremonias religiosas</h3>
          <span
            className={props.id === "ceremonias" ? "display" : "hidden"}
          ></span>
        </li>
        <li className="activity" id="comercios" onClick={infoHandler}>
          <img src="" alt="comercios" className="img__ceremonias" />
          <h3>Comercios</h3>
          <span
            className={props.id === "comercios" ? "display" : "hidden"}
          ></span>
        </li>
        <li className="activity" id="deportes" onClick={infoHandler}>
          <img src="" alt="deportes" className="img__ceremonias" />
          <h3>Deporte</h3>
          <span
            className={props.id === "deportes" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="eventos" onClick={infoHandler}>
          <img src="" alt="eventos" className="img__ceremonias" />
          <h3>Eventos</h3>
          <span
            className={props.id === "eventos" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="funerales" onClick={infoHandler}>
          <img src="" alt="funerales" className="img__funerales" />
          <h3>Funerales</h3>
          <span
            className={props.id === "funerales" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="hosteleria" onClick={infoHandler}>
          <img src="" alt="hosteleria" className="img__ceremonias" />
          <h3>Hostelería</h3>
          <span
            className={props.id === "hosteleria" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="ocio" onClick={infoHandler}>
          <img src="" alt="ocio" className="img__ceremonias" />
          <h3>Ocio y Cultura</h3>
          <span className={props.id === "ocio" ? "display" : "hidden"}></span>
        </li>
      </ul>
    </div>
  );
};

export default Activity1;
