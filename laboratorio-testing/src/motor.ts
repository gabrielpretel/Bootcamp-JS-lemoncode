import { partida, Partida } from "./modelo";

export const obtenerNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

export const obtenerCarta = (numeroAleatorio: number): number => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

export const obtenerPuntuacionCarta = (carta: number): number => {
  return carta <= 7 ? carta : 0.5;
};

export const sumaPuntuacion = (puntos: number): number => {
  return partida.puntuacionUsuario + puntos;
};

export const setPuntuacionUsuario = (nuevoPunto: number): void => {
  partida.puntuacionUsuario = nuevoPunto;
};

export const compruebaPartidaPerdida = (partida: Partida): boolean => {
  if (partida.puntuacionUsuario && partida.puntuacionUsuario > 7.5) {
    return (partida.partidaPerdida = true);
  }
  return (partida.partidaPerdida = false);
};

export const compruebaPartidaGanada = (partida: Partida): boolean => {
  if (partida.puntuacionUsuario && partida.puntuacionUsuario === 7.5) {
    return (partida.partidaGanada = true);
  }
  return (partida.partidaGanada = false);
};

export const iniciaPartidaMotor = (): void => {
  partida.puntuacionUsuario = 0;
  partida.partidaGanada = false;
  partida.partidaPerdida = false;
};
