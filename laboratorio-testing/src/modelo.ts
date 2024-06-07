export interface Partida {
  puntuacionUsuario: number;
  partidaGanada: boolean;
  partidaPerdida: boolean;
}

export const partida: Partida = {
  puntuacionUsuario: 0,
  partidaGanada: false,
  partidaPerdida: false,
};
