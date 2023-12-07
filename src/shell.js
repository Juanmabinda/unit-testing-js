import { setNumerosIntentos, setNumeroParaAcertar } from "./modelo";

import { generarNumeroAleatorio } from "./motor";

import { muestraCantidadDeIntentos, handleCompruebaClick } from "./ui";

const eventos = () => {
  const boton = document.getElementById("comprobar");
boton.addEventListener("click", handleCompruebaClick);
};

const comenzarPartida = () => {
  setNumerosIntentos(0);
  setNumeroParaAcertar(generarNumeroAleatorio());
  muestraCantidadDeIntentos(0);
  eventos();
};

document.addEventListener("DOMContentLoaded", comenzarPartida);
