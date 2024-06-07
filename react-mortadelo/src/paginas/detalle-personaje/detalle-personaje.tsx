import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMiembroById } from "./detalle-personaje.api";
import { Personaje, creaMiembroVacio } from "./modelo";
import { Layout } from "../layout";

export const PersonajeDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [personaje, setPersonaje] = React.useState<Personaje>(
    creaMiembroVacio()
  );

  useEffect(() => {
    if (id) {
      getMiembroById(id).then(setPersonaje);
    }
  }, []);

  return (
    <Layout>
      <div className="contenedor-detalle">
        <h2>Detalle de personaje</h2>
        <img src={`http://localhost:3000/${personaje.imagen}`} alt="" />
        <p>{personaje.nombre}</p>
        <p>{personaje.habilidades.join(", ")}</p>
      </div>
    </Layout>
  );
};
