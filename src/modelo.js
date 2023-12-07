export let numeroParaAcertar = 0;

export const setNumeroParaAcertar = (nuevoNumero) => (numeroParaAcertar = nuevoNumero);

export const NO_ES_UN_NUMERO = 0;
export const EL_NUMERO_SECRETO_ES_MENOR = 1;
export const EL_NUMERO_SECRETO_ES_MAYOR = 2;
export const ES_EL_NUMERO_SECRETO = 3;
export  const GAME_OVER = 5;

export let intentos = 0;
export const MAX_INTENTOS = 5;

export const setNumerosIntentos = (numeroIntentos) => (intentos = numeroIntentos);
