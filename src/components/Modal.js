import React from "react";
import Text from "./Text";

const Modal = (props) => {
  const { id, activities } = props;
  const info = Object.entries(activities);
  const onClose = (evt) => {
    evt.preventDefault();
    props.modalHandler();
  };
  console.log("MODAL", info, id);

  const showInfo = () => {
    for (const [key, value] of Object.entries(info)) {
      console.log("KEY", key, "VALUE", value);
      if (value[0] === id) {
        return <Text value={value[1]} />;
      }
    }
  };

  return (
    <div className={id !== "" ? "overlay" : "modal"}>
      <div className={id !== "" ? "modal modal--is-open" : "modal"}>
        <div className="closeButton" onClick={onClose}></div>
        <h5>{id}</h5>
        <div className="content">{showInfo()}</div>
      </div>
    </div>
  );
};

export default Modal;
