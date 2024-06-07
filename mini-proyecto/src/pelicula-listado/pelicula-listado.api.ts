import axios from "axios";
import { Movie } from "./pelicula-listado.model";

export const obtenerPeliculas = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    return data;
  } catch (error) {
    throw new Error("Error al obtener las películas");
  }
};

export const borrarPeliculas = async (id: string): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/movies/${id}`);
  } catch (error) {
    throw new Error("No se ha podido borrar la película");
  }
};
