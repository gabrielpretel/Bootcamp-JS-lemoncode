import React from "react";
import { Miembro } from "./modelo-miembros";
import { MiembrosLista } from "./miembros-lista";
import { obtenerMiembro } from "./listado-miembros.api";
import { Layout } from "../layout";

export const MiembrosGrid: React.FC = () => {
  const [miembros, setMiembros] = React.useState<Miembro[]>([]);

  React.useEffect(() => {
    obtenerMiembro().then((miembros) => setMiembros(miembros));
  }, []);

  return (
    <Layout>
      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">ID</span>
        <span className="header">Login</span>
        {miembros.map((miembro) => (
          <MiembrosLista key={miembro.id} miembro={miembro} />
        ))}
      </div>
    </Layout>
  );
};
