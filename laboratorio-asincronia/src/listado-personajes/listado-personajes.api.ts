import { Personaje } from "./listado-personajes.model";

const URL_API = "http://localhost:3000/personajes";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error al obtener personajes");
  }
};
