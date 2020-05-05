import React from "react";

const Modal = (props) => {
  const { isOpen, id } = props;
  const onClose = (evt) => {
    evt.preventDefault();
    props.modalHandler();
    console.log(isOpen);
  };
  return (
    <div className={id !== "" ? "modal modal--is-open" : "modal"}>
      <button className="close" onClick={onClose}>
        x
      </button>
      <h4>{props.id}</h4>
      <div className="content">{}</div>
    </div>
  );
};

export default Modal;
