import React from "react";

const City = (props) => {
  const cityHandler = (evt) => {
    evt.preventDefault();
    props.getCity(evt.currentTarget.value);
  };
  return (
    <select
      id="cityForm"
      name="cityForm"
      className="cityForm"
      value={props.city}
      onChange={cityHandler}
    >
      <option hidden>Selecciona provincia</option>
      <option className="cities" value="álava">
        álava
      </option>
      <option className="cities" value="albacete">
        albacete
      </option>
      <option className="cities" value="alicante">
        alicante
      </option>
      <option className="cities" value="almería">
        almería
      </option>
      <option className="cities" value="asturias">
        asturias
      </option>
      <option className="cities" value="ávila">
        ávila
      </option>
      <option className="cities" value="badajoz">
        badajoz
      </option>
      <option className="cities" value="barcelona">
        barcelona
      </option>
      <option className="cities" value="burgos">
        burgos
      </option>
      <option className="cities" value="cáceres">
        cáceres
      </option>
      <option className="cities" value="cádiz">
        cádiz
      </option>
      <option className="cities" value="cantabria">
        cantabria
      </option>
      <option className="cities" value="castellón">
        castellón
      </option>
      <option className="cities" value="cr">
        ciudad real
      </option>
      <option className="cities" value="córdoba">
        córdoba
      </option>
      <option className="cities" value="cuenca">
        cuenca
      </option>
      <option className="cities" value="gerona">
        gerona
      </option>
      <option className="cities" value="granada">
        granada
      </option>
      <option className="cities" value="guadalajara">
        guadalajara
      </option>
      <option className="cities" value="guipúzcoa">
        guipúzcoa
      </option>
      <option className="cities" value="huelva">
        huelva
      </option>
      <option className="cities" value="huesca">
        huesca
      </option>
      <option className="cities" value="ib">
        islas baleares
      </option>
      <option className="cities" value="jaén">
        jaén
      </option>
      <option className="cities" value="lc">
        la coruña
      </option>
      <option className="cities" value="lr">
        la rioja
      </option>
      <option className="cities" value="lp">
        las palmas
      </option>
      <option className="cities" value="león">
        león
      </option>
      <option className="cities" value="lérida">
        lérida
      </option>
      <option className="cities" value="madrid">
        madrid
      </option>
      <option className="cities" value="málaga">
        málaga
      </option>
      <option className="cities" value="murcia">
        murcia
      </option>
      <option className="cities" value="navarra">
        navarra
      </option>
      <option className="cities" value="orense">
        orense
      </option>
      <option className="cities" value="palencia">
        palencia
      </option>
      <option className="cities" value="pontevedra">
        pontevedra
      </option>
      <option className="cities" value="salamanca">
        salamanca
      </option>
      <option className="cities" value="segovia">
        segovia
      </option>
      <option className="cities" value="sevilla">
        sevilla
      </option>
      <option className="cities" value="soria">
        soria
      </option>
      <option className="cities" value="tarragona">
        tarragona
      </option>
      <option className="cities" value="tenerife">
        tenerife
      </option>
      <option className="cities" value="teruel">
        teruel
      </option>
      <option className="cities" value="toledo">
        toledo
      </option>
      <option className="cities" value="valencia">
        valencia
      </option>
      <option className="cities" value="valladolid">
        valladolid
      </option>
      <option className="cities" value="vizcaya">
        vizcaya
      </option>
      <option className="cities" value="zamora">
        zamora
      </option>
      <option className="cities" value="zaragoza">
        zaragoza
      </option>
    </select>
  );
};

export default City;
