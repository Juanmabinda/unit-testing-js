import { describe, expect, it } from "vitest"
import { comprobarNumero, generarNumeroAleatorio } from "./motor"
import * as modelo from "./modelo"
import { beforeEach } from "vitest";


describe("Generar Número Aleatorio", () => {
  // caso extremo inferior
  it("Forzar Math para que devuelva 0 y debería dar el número 0", () => {
    // Arrange
  const numeroEsperado = 0;
  vi.spyOn(global.Math, "random").mockReturnValue(0);

  // Act
  const resultado = generarNumeroAleatorio();

  // Assert
  expect(resultado).toBe(numeroEsperado);
  });

  // caso extremo superior
  it("Forzar Math para que devuelva 0.999 y generarNumeroAleatorio debería dar el número 99", () => {
    // Arrange
    const numeroEsperado = 99;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Forzar Math para que devuelva 0.059 y generarNumeroAleatorio debería devolver 5", () => {
    // Arrange
    const numeroEsperado = 5;
    vi.spyOn(global.Math, "random").mockReturnValue(0.059);

    // Act
    const resultado = generarNumeroAleatorio();

    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
}),

describe("comprobarNumero", () => {
  beforeEach(() => {
    vi.spyOn(modelo, "numeroParaAcertar", "get").mockReturnValue(23);
  });

  it("Debería devolver NO_ES_UN_NUMERO cuando el texto no es un número"), () => {
    // Arrange
    const texto = "No soy un numero";

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(modelo.NO_ES_UN_NUMERO);
  };

  it("Debería devolver ES_EL_NUMERO_SECRETO cuando texto es el num secreto", () => {
    // Arrange
    const texto = "23";

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(modelo.ES_EL_NUMERO_SECRETO);
  });

  it("Debería devolver EL_NUMERO_SECRETO_ES_MAYOR cuando texto es menor que numeroParaAcertar", () => {
    // Arrange
    const texto = "10";

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(modelo.EL_NUMERO_SECRETO_ES_MAYOR)
  });

  it("Debería devolver EL_NUMERO_SECRETO_ES_MENOR cuando texto es mayor que numeroParaAcertar", () => {
    // Arrange
    const texto = "99";

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(modelo.EL_NUMERO_SECRETO_ES_MENOR)
  });

  it("Debería devolver GAME_OVER cuando se alcanza el número máximo de intentos", () => {
    // Arrange
    const numeroIntentos = 5;
    const texto = "90"
    vi.spyOn(modelo, "intentos", "get").mockReturnValue(numeroIntentos);

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(modelo.GAME_OVER)
  });
});
