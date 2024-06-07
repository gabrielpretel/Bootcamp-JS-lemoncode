import { Personaje } from "./modelo";

export const getMiembroById = (id: string): Promise<Personaje> => {
  return fetch(`http://localhost:3000/personajes/${id}`).then((response) =>
    response.json()
  );
};
