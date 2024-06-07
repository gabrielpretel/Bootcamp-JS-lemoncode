import React from "react";
import { Miembro } from "./modelo-miembros";
import { Link, generatePath } from "react-router-dom";
import { rutas } from "@/constantes";

interface Props {
  miembro: Miembro;
}

export const MiembrosLista: React.FC<Props> = (props) => {
  const { miembro } = props;

  return (
    <>
      <img src={miembro.avatar_url} />
      <Link to={generatePath(rutas.DETALLE_MIEMBROS, { id: miembro.id })}>
        {miembro.id}
      </Link>
      <span>{miembro.login}</span>
    </>
  );
};
