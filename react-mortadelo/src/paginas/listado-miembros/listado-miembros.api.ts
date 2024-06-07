import { Miembro } from "./modelo-miembros";

export const obtenerMiembro = (): Promise<Miembro[]> => {
  return fetch("https://api.github.com/orgs/lemoncode/members").then(
    (response) => response.json()
  );
};
