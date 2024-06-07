import { Personaje } from "./modelo";

export const obtenerPersonaje = (): Promise<Personaje[]> => {
  return fetch("http://localhost:3000/personajes").then((response) =>
    response.json()
  );
};
