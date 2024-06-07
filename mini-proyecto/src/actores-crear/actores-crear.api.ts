import axios from "axios";
import { Actor } from "./actores-crear.model";

export const crearActor = async (actor: Actor): Promise<void> => {
  try {
    await axios.post(`http://localhost:3000/actors/`, actor);
  } catch (error) {
    throw new Error("Error al crear el actor/actriz");
  }
};
