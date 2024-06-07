import {
  comprobarNumero,
  generarNumeroAleatorio,
  hasSuperadoElNumeroMaximoDeIntentos,
} from "./motor";
import {
  NO_ES_UN_NUMERO,
  ES_EL_NUMERO_SECRETO,
  EL_NUMERO_ES_MAYOR,
  GAME_OVER_MAXIMO_INTENTOS,
  EL_NUMERO_ES_MENOR,
} from "./modelo";

import * as modelo from "./modelo";
import { beforeEach } from "vitest";

describe("generarNumeroAleatorio", () => {
  it("MathRandom lo forzamos a que devuelva 0, y debería de dar el numero 0", () => {
    //Arrange
    const numeroEsperado = 0;
    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("MathRandom lo forzamos a que devuelva 1, y debería devolver el número 100", () => {
    //Arrange
    const numeroEsperado = 100;
    const spyOnMathRandom = vi
      .spyOn(global.Math, "random")
      .mockReturnValue(0.99999);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("MathRandom lo forzamos a que devuelva 0.27, y debería devolver el número 27", () => {
    //Arrange
    const numeroEsperado = 27;
    const spyOnMathRandom = vi
      .spyOn(global.Math, "random")
      .mockReturnValue(0.27);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("comprobarNumero", () => {
  beforeEach(() => {
    vi.spyOn(modelo, "numeroParaAcertar", "get").mockReturnValue(23);
  });

  it("Debería de devolver NO_ES_UN_NUMERO cuando el texto no es un número", () => {
    // Arrange
    const texto = "esto no es un numero";

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(NO_ES_UN_NUMERO);
  });

  it("Debería devolver ES_EL_NUMERO_SECRETO cuando texto es el numero a acertar", () => {
    // Arrange
    const texto = 23;

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
  });

  it("Debería devolver EL_NUMERO_ES_MAYOR si el numero es mayor que el numero para acertar", () => {
    //Arrange
    const texto = "45";

    //Act
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
  });
  it("Debería devolver EL_NUMERO_ES_MENOR si el numero es menor que el numero para acertar", () => {
    //Arrange
    const texto = "20";

    //Act
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MENOR);
  });

  it("Debería devolver GAME_OVER_MAXIMO_INTENTOS si se han superado el numero maximo de intentos", () => {
    //Arrange
    const texto = "70";

    vi.spyOn(modelo, "numeroDeIntentos", "get").mockReturnValue(5);

    //Act
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(GAME_OVER_MAXIMO_INTENTOS);
  });
});
