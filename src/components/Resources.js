import React from "react";

const Resources = (props) => {
  const { isRefsOpen } = props;
  const onClose = (evt) => {
    evt.preventDefault();
    props.closeRR();
  };
  return (
    <div className={!isRefsOpen ? "hidden" : "overlay"}>
      <div
        className={!isRefsOpen ? "resources " : "resources resources--is-open"}
      >
        <div className="closeButton" onClick={onClose}></div>
        <h3>Referencias y recursos</h3>
        <ul className="refsList">
          <li>
            <a href="https://www.lamoncloa.gob.es/consejodeministros/resumenes/Documents/2020/PlanTransicionNuevaNormalidad.pdf">
              Plan para la transición hacia una nueva normalidad
            </a>
            . Ministerio de Sanidad(España) | Consultado el 10 de mayo de 2020.
          </li>

          <li>
            <a href="https://elpais.com/sociedad/2020/04/28/actualidad/1588099170_587777.html">
              Guía visual de la desescalada: fechas, fases y todas las claves de
              la vuelta a la normalidad
            </a>
            . El País | Consultado el 10 de mayo de 2020.
          </li>
          <li>
            <a href="https://www.rtve.es/noticias/comparador-desescalada-coronavirus-paises/">
              COMPARA LOS PLANES DE DESESCALADA
            </a>
            . RTVE | Consultado el 10 de mayo de 2020.
          </li>
          <li>
            <a href="https://amp.antena3.com/noticias/sociedad/mapa-provincias-que-pasan-fase-desescalada-coronavirus_202005085eb5ab514f718700015ecef2.html">
              Mapa de provincias que pasan a la fase 1 de desescalada del
              coronavirus
            </a>
            . Antena3 Noticias | Consultado el 8 de mayo de 2020.
          </li>
          <li>
            <a href="https://www.rtve.es/noticias/20200509/mapa-desescalada-espana-fase-esta-tu-provincia/2013477.shtml/">
              El mapa de la desescalada en España: ¿en qué fase está tu
              provincia?
            </a>
            . RTVE | Consultado el 11 de mayo de 2020.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
