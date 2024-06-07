import React from "react";
import { obtenerPersonaje } from "./listado-personajes.api";
import { PersonajesLista } from "./personajes-lista";
import { CabeceraPersonajes } from "./personajes-cabecera";
import { Personaje } from "./modelo";
import { Layout } from "../layout";

export const PersonajesGrid: React.FC = () => {
  const [personajes, setPersonajes] = React.useState<Personaje[]>([]);

  React.useEffect(() => {
    obtenerPersonaje().then((personajes) => setPersonajes(personajes));
  }, []);

  return (
    <Layout>
      <div className="user-list-container">
        <CabeceraPersonajes />
        {personajes.map((personaje) => (
          <PersonajesLista key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </Layout>
  );
};
