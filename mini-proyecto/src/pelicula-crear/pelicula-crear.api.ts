import axios from "axios";
import { Movie } from "./pelicula-crear.model";

export const crearPelicula = async (pelicula: Movie): Promise<Movie> => {
  try {
    const url = "http://localhost:3000/movies/";
    const response = await axios.post(url, pelicula);
    return response.data;
  } catch (error) {
    throw new Error("Error al actualizar pelicula");
  }
};
