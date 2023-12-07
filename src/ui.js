import {
  GAME_OVER,
  MAX_INTENTOS
} from "./modelo";

import {
  sumaIntentos,
  comprobarNumero,
  compruebaEstado
} from "./motor";

export const muestraMensajeDeComprobacion = (nuevoMensaje) => {
  let mensaje = nuevoMensaje;
  document.getElementById("resultado").innerHTML = mensaje;
};

export const muestraCantidadDeIntentos = (intentos) => {
  const mostrarIntentos = document.getElementById("intentos");

  mostrarIntentos.innerHTML = `Intentos: ${intentos} de ${MAX_INTENTOS}`;
};

export const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER) {
    document.getElementById("comprobar").disabled = true;
  }
};

export const handleCompruebaClick = () => {
  muestraCantidadDeIntentos(sumaIntentos());
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeDeComprobacion(compruebaEstado(texto, estado));
  gestionarGameOver(estado);
};
