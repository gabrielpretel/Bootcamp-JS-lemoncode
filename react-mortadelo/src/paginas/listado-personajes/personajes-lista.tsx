import React from "react";
import { Personaje } from "./modelo";
import { Link, generatePath } from "react-router-dom";
import { rutas } from "@/constantes";

interface Props {
  personaje: Personaje;
}

export const PersonajesLista: React.FC<Props> = (props) => {
  const { personaje } = props;

  return (
    <>
      <Link to={generatePath(rutas.DETALLE_PERSONAJES, { id: personaje.id })}>
        {personaje.id}
      </Link>
      <img
        src={`http://localhost:3000/${personaje.imagen}`}
        alt={personaje.nombre}
      />
      <span>{personaje.nombre}</span>
    </>
  );
};
