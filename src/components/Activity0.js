import React from "react";
import church from "../images/church.svg";
import sports from "../images/sports.svg";
import funeral from "../images/funeral.svg";
import museum from "../images/museum.svg";
import catering from "../images/catering.svg";
import shopping from "../images/shopping.svg";
import ocio from "../images/ocio.svg";

const Activity0 = (props) => {
  const infoHandler = (evt) => {
    evt.preventDefault();
    props.displayInfo(evt.currentTarget.id);
  };
  return (
    <div className="container">
      <ul className="activities">
        <li className="activity" id="ceremonias" onClick={infoHandler}>
          <img src={church} alt="ceremonias religiosas" className="img" />
          <h3>Ceremonias religiosas</h3>
          <span
            className={props.id === "ceremonias" ? "display" : "hidden"}
          ></span>
        </li>
        <li className="activity" id="comercios" onClick={infoHandler}>
          <img src={shopping} alt="comercios" className="img" />
          <h3>Comercios</h3>
          <span
            className={props.id === "comercios" ? "display" : "hidden"}
          ></span>
        </li>
        <li className="activity" id="deportes" onClick={infoHandler}>
          <img src={sports} alt="deporte" className="img" />
          <h3>Deporte</h3>
          <span
            className={props.id === "deportes" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="cultura" onClick={infoHandler}>
          <img src={museum} alt="cultura" className="img" />
          <h3>Cultura</h3>
          <span
            className={props.id === "cultura" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="funerales" onClick={infoHandler}>
          <img src={funeral} alt="funerales" className="img" />
          <h3>Funerales</h3>
          <span
            className={props.id === "funerales" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="hosteleria" onClick={infoHandler}>
          <img src={catering} alt="hosteleria" className="img" />
          <h3>Hostelería</h3>
          <span
            className={props.id === "hosteleria" ? "display" : "hidden"}
          ></span>
        </li>

        <li className="activity" id="ocio" onClick={infoHandler}>
          <img src={ocio} alt="ocio" className="img" />
          <h3>Ocio</h3>
          <span className={props.id === "ocio" ? "display" : "hidden"}></span>
        </li>
      </ul>
    </div>
  );
};

export default Activity0;
