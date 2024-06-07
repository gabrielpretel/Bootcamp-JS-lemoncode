import {
  compruebaPartidaGanada,
  compruebaPartidaPerdida,
  obtenerNumeroAleatorio,
  obtenerCarta,
  obtenerPuntuacionCarta,
} from "./motor";
import { Partida } from "./modelo";
import { vi } from "vitest";

// Funciones que determinan si el usuario ha ganado o perdido la partida.

describe("compruebaPartidaGanada", () => {
  it("Debería devolver true si la puntuación del usuario es igual a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 7.5,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = true;

    //Act
    const resultado: boolean = compruebaPartidaGanada(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver false si la puntuación del usuario es distinta a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 5,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = false;

    //Act
    const resultado: boolean = compruebaPartidaPerdida(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("compruebaPartidaPerdida", () => {
  it("Debería devolver true si la puntuación del usuario es superior a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 8,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = true;

    //Act
    const resultado: boolean = compruebaPartidaPerdida(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver true si la puntuación del usuario es superior a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 5,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = false;

    //Act
    const resultado: boolean = compruebaPartidaPerdida(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

// Comprobación de que el número aleatorio se genera bien y suma 2 cuando le toca.

describe("obtenerNumeroAleatorio", () => {
  it("Debería devolver 1 cuando el número aleatorio que se genera es 0", () => {
    //Arrange
    const numeroEsperado = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0);

    //Act
    const resultado: number = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Debería devolver 10 cuando el número aleatorio que se genera es 0.9", () => {
    //Arrange
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.9);

    //Act
    const resultado: number = obtenerNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("obtenerCarta", () => {
  it("Debería devolver el numero aleatorio sin sumarle 2 cuando el numero es menor o igual a 7", () => {
    //Arrange
    const numeroAleatorio: number = 7;

    //Act
    const resultado: number = obtenerCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(7);
  });
  it("Debería devolver el numero aleatorio sumandole 2 cuando el numero es mayor a 7", () => {
    //Arrange
    const numeroAleatorio: number = 8;

    //Act
    const resultado: number = obtenerCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(10);
  });
});

// Comprobación de que al obtener una carta, devuelve el valor de esa carta si es menor o igual a 7 o 0.5 si es mayor.

describe("obtenerPuntuacionCarta", () => {
  it("Debería un valor igual al numero de la carta si es menor o igual a 7", () => {
    //Arrange
    const numeroCarta: number = 7;
    const resultadoEsperado: number = 7;

    //Act
    const resultado: number = obtenerPuntuacionCarta(numeroCarta);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería 0.5 si es mayor a 7", () => {
    //Arrange
    const numeroCarta: number = 8;
    const resultadoEsperado: number = 0.5;

    //Act
    const resultado: number = obtenerPuntuacionCarta(numeroCarta);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
