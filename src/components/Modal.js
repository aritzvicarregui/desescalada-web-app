import React from "react";
import Text from "./Text";

const Modal = (props) => {
  const { id, activities } = props;
  const info = Object.entries(activities);
  const onClose = (evt) => {
    evt.preventDefault();
    props.modalHandler();
  };

  const showInfo = () => {
    for (const [key, value] of Object.entries(info)) {
      if (value[0] === id) {
        return <Text value={value[1]} key={key} other={props.other} />;
      }
    }
  };

  return (
    <React.Fragment>
      <div className={id === "" ? "no-content" : "no-content hidden"}>
        <p className={id === "" ? "no-text" : "hidden"}>
          Para visualizar contenido, primero selecciona provincia. Luego explore
          por actividad
        </p>
      </div>
      <div className={id !== "" ? "overlay" : "modal"} onClick={onClose}>
        <div className={id !== "" ? "modal modal--is-open" : "modal"}>
          <div className="closeButton" onClick={onClose}></div>
          <h5>{id}</h5>
          <div className="content">{showInfo()}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
