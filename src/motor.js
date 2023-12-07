import {
  numeroParaAcertar,
  ES_EL_NUMERO_SECRETO,
  NO_ES_UN_NUMERO,
  EL_NUMERO_SECRETO_ES_MAYOR,
  EL_NUMERO_SECRETO_ES_MENOR,
  GAME_OVER,
  MAX_INTENTOS,
  intentos,
  setNumerosIntentos
} from "./modelo";


export const generarNumeroAleatorio = () => Math.floor(Math.random() * 100);

export const sumaIntentos = () => {
  setNumerosIntentos(intentos + 1);
  return intentos;
};


export const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if(intentos < MAX_INTENTOS) {
    if(!esUnNumero) {
      return NO_ES_UN_NUMERO;
    };

    if(numero < numeroParaAcertar) {
      return EL_NUMERO_SECRETO_ES_MAYOR;
    } else if (numero > numeroParaAcertar) {
      return EL_NUMERO_SECRETO_ES_MENOR;
    } else {
      return ES_EL_NUMERO_SECRETO;
    }
  }else{
    return GAME_OVER;
  };
};

export const compruebaEstado = (texto, estado) => {
  let mensaje = "";
  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `${texto} no es un número, intenta nuevamente`;
      break;
    case EL_NUMERO_SECRETO_ES_MENOR:
      mensaje = `Lo siento, ${texto} no es el número correcto. Intenta con un número MENOR`;
      break;
    case EL_NUMERO_SECRETO_ES_MAYOR:
      mensaje = `Lo siento, ${texto} no es el número correcto. Intenta con un número MAYOR`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `Felicitacione!! Has adivinado, ${texto} era el número secreto!`;
      break;
    case GAME_OVER:
      mensaje = `Lo siento, has perdido porque alcanzaste el máximo de intentos.`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no debería estar aquí";
      break;
  }
  return mensaje;
};
