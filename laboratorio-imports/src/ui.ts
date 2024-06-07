import { partida, Partida } from "./modelo";
import {
  obtenerNumeroAleatorio,
  obtenerCarta,
  obtenerPuntuacionCarta,
  sumaPuntuacion,
  setPuntuacionUsuario,
  compruebaPartidaGanada,
  compruebaPartidaPerdida,
  iniciaPartidaMotor,
} from "./motor";

export const botonDameCarta = document.getElementById("dame-carta");
export const botonMePlanto = document.getElementById("me-planto");
export const botonRestart = document.getElementById("restart");
const elementoInformacion = document.getElementById("informacion");
const elementoPuntuacion = document.getElementById("puntuacion");
const imagenCarta = document.getElementById("carta-mostrada");

export const muestraPuntuacion = (): void => {
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${partida.puntuacionUsuario}`;
  } else {
    console.error("no existe el elemento puntuación");
  }
};

export const mePlanto = (): void => {
  if (
    elementoInformacion &&
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    if (partida.puntuacionUsuario < 5) {
      elementoInformacion.innerHTML = `Has sido muy conservador`;
    } else {
      partida.puntuacionUsuario >= 5 && partida.puntuacionUsuario < 6
        ? (elementoInformacion.innerHTML = `Te ha entrado el canguelo eh?`)
        : (elementoInformacion.innerHTML = `Casi casi...`);
    }

    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

export const obtenerUrlCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

export const pintaURL = (urlCarta: string): void => {
  if (imagenCarta && imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = urlCarta;
  }
};

const pintaGameOver = (): void => {
  if (
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    elementoInformacion.innerHTML = `<div class="gameover">GAME OVER</div><br> Te has pasado!`;
    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

const pintaPartidaGanada = (): void => {
  if (
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    elementoInformacion.innerHTML = `<div class="win">HAS GANADO</div><br>¡Lo has clavado! ¡Enhorabuena!`;
    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

const compruebaPartida = (partida: Partida): void => {
  compruebaPartidaPerdida(partida);
  if (partida.partidaPerdida === true) {
    pintaGameOver();
  }
  compruebaPartidaGanada(partida);
  if (partida.partidaGanada === true) {
    pintaPartidaGanada();
  }
};

export const iniciaPartidaUi = (): void => {
  iniciaPartidaMotor();
  muestraPuntuacion();
  if (
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    elementoInformacion.innerHTML = "";
    botonDameCarta.hidden = false;
    botonMePlanto.hidden = false;
    botonRestart.hidden = true;
  }
};

export const dameCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  pintaURL(urlCarta);
  const puntos = obtenerPuntuacionCarta(carta);
  const nuevoPunto = sumaPuntuacion(puntos);
  setPuntuacionUsuario(nuevoPunto);
  muestraPuntuacion();
  compruebaPartida(partida);
};
