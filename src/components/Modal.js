import React from "react";
import Text from "./Text";

const Modal = (props) => {
  const { id, modal } = props;
  const onClose = (evt) => {
    evt.preventDefault();
    props.modalHandler();
  };

  const showInfo = () => {
    for (const [key, value] of Object.entries(modal)) {
      if (key === id) {
        return <Text value={value} />;
      }
    }
  };

  return (
    <div className={id !== "" ? "modal modal--is-open" : "modal"}>
      <div className="closeButton" onClick={onClose}></div>
      <h5>{id}</h5>
      <div className="content">{showInfo()}</div>
    </div>
  );
};

export default Modal;
