import { vi } from "vitest";
import { comprobarNumero } from "./motor";
import { Estado, partida } from "./modelo";

describe("comprobarNumero", () => {
  it("Devería de devolver NO_ES_UN_NUMERO si el texto no es un número", () => {
    //Arrange
    const texto: string = "esto no es un número";
    const resultadoEsperado: Estado = "NO_ES_UN_NUMERO";

    //Act
    const resultado: Estado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Devería de devolver ES_EL_NUMERO_SECRETO si texto es el numero secreto", () => {
    //Arrange
    const resultadoEsperado: Estado = "ES_EL_NUMERO_SECRETO";
    const texto: string = "23";
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);

    //Act
    const resultado: Estado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devilver EL_NUMERO_ES_MAYOR si texto es mayor que el numeroParaAcertar", () => {
    //Arrange
    const texto: string = "24";
    const resultadoEsperado = "EL_NUMERO_ES_MAYOR";
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);

    //Act
    const resultado: Estado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devilver EL_NUMERO_ES_MENOR si texto es menor que el numeroParaAcertar", () => {
    //Arrange
    const texto: string = "22";
    const resultadoEsperado = "EL_NUMERO_ES_MENOR";
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);

    //Act
    const resultado: Estado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería devolver GAME_OVER_MAXIMO_INTENTOS cuando has superado MAXIMO_INTENTOS", () => {
    //Arrange
    const resultadoEsperado: Estado = "GAME_OVER_MAXIMO_INTENTOS";
    const texto: string = "25";
    vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);
    vi.spyOn(partida, "numeroDeIntentos", "get").mockResolvedValue(5);

    //Act
    const resultado: Estado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
