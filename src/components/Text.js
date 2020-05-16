import React from "react";

const Text = (props) => {
  const value = props.value;
  const val = Object.entries(value);

  return (
    <ul>
      {val.map((obj, index) => (
        <li key={index}>{obj}</li>
      ))}
    </ul>
  );
  // return (
  //   <ul className="infoList">
  //     {val.map((obj, index) => (
  //       <li
  //         key={index}
  //         className={
  //           obj[0] === "texto"
  //             ? "li moreInfo"
  //             : obj[1] !== null
  //             ? "li enable"
  //             : "li"
  //         }
  //       >
  //         <span
  //           className={
  //             obj[0] === "texto"
  //               ? "empty"
  //               : obj[1] !== null
  //               ? `icon ${obj[0]}`
  //               : `icon  ${obj[0]}`
  //           }
  //         ></span>

  //         <span
  //           className={
  //             obj[0] === "texto" ? "empty" : obj[1] !== null ? "yes" : "no"
  //           }
  //         ></span>

  //         <p className={obj[0] === "texto" ? "infoText text" : "infoText"}>
  //           {obj[0] === "cc"
  //             ? "centros comerciales :"
  //             : obj[0] === "takeaway"
  //             ? "comida para llevar :"
  //             : obj[0] === "enlocal"
  //             ? "servicio de mesa :"
  //             : obj[0] === "profesional"
  //             ? "de alto rendimiento :"
  //             : obj[0] === "texto"
  //             ? "+ información :"
  //             : `${obj[0]} :`}
  //           <br />
  //           {obj[1] !== null ? obj[1] : obj[1] === null ? "no" : obj[1]}
  //         </p>
  //       </li>
  //     ))}

  //     <li className={props.other !== "" ? "otherInfo" : "noInfo"}>
  //       {props.other !== "" ? props.other : ""}
  //     </li>
  //     <li className="important">
  //       'En todo caso, deberán respetarse las medidas de seguridad e higiene
  //       establecidas por las autoridades sanitarias para la prevención del
  //       COVID-19, relativas al mantenimiento de una distancia mínima de
  //       seguridad de dos metros, higiene de manos y etiqueta respiratoria.'
  //     </li>
  //   </ul>
  // );
};

export default Text;
