import React from "react";

const Text = (props) => {
  const value = props.value;
  const val = Object.entries(value);

  return (
    <ul className="infoList">
      {val.map((obj, index) => (
        <li
          key={index}
          className={
            obj[0] === "a" || obj[0] === "b" || obj[0] === "c"
              ? "li horarios"
              : obj[0] === "d"
              ? "li horariosInfo"
              : obj[1] !== null
              ? "li enable"
              : "li"
          }
        >
          <span
            className={
              obj[0] === "a"
                ? "icon a"
                : obj[0] === "b"
                ? "icon b"
                : obj[0] === "c"
                ? "icon c"
                : obj[0] === "d"
                ? "icon d"
                : obj[1] !== null
                ? `icon ${obj[0]}`
                : `icon  ${obj[0]}`
            }
          ></span>

          <span
            className={
              obj[0] === "a" ||
              obj[0] === "b" ||
              obj[0] === "c" ||
              obj[0] === "d"
                ? "none"
                : obj[1] !== null
                ? "yes"
                : "no"
            }
          ></span>

          <p className="infoTitle">
            {obj[0] === "a"
              ? "Menores de 14 años"
              : obj[0] === "b"
              ? "Mayores de 70 o personas dependientes con cuidador"
              : obj[0] === "c"
              ? "Mayores de 14 años"
              : obj[0] === "d"
              ? "Los paseos se pueden realizar :"
              : obj[0] === "cc"
              ? "centros comerciales :"
              : obj[0] === "takeaway"
              ? "comida para llevar :"
              : obj[0] === "enlocal"
              ? "servicio de mesa :"
              : obj[0] === "profesional"
              ? "alto rendimiento :"
              : obj[0] === "hoteles"
              ? "hoteles y alojamientos turísticos :"
              : `${obj[0]} :`}
          </p>
          <p
            className={
              obj[0] === "a" ||
              obj[0] === "b" ||
              obj[0] === "c" ||
              obj[0] === "d"
                ? "timeText"
                : "infoText"
            }
          >
            {obj[1] === null ? "no permitido" : obj[1]}
          </p>
        </li>
      ))}

      <li className={props.other !== "" ? "otherInfo" : "noInfo"}>
        {props.other !== "" ? props.other : ""}
      </li>
      <li className="important">
        'En todo caso, deberán respetarse las medidas de seguridad e higiene
        establecidas por las autoridades sanitarias para la prevención del
        COVID-19, relativas al mantenimiento de una distancia mínima de
        seguridad de dos metros e higiene de manos. El uso de la mascarilla es
        obligatoria.'
      </li>
    </ul>
  );
};

export default Text;
