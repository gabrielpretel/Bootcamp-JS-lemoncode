import React, { useEffect } from "react";
import { Miembro, obtenerMiembroById } from "./detalle-miembro-modelo";
import { useParams } from "react-router-dom";
import { getMiembroById } from "./detalle-miembro.api";
import { Layout } from "@/paginas/layout";

export const MiembroDetalle: React.FC = () => {
  const [miembro, setMiembro] = React.useState<Miembro>(obtenerMiembroById);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getMiembroById(id).then(setMiembro);
    }
  }, []);

  return (
    <Layout>
      <div className="contenedor-detalle">
        <img src={miembro.avatar_url} alt="" />
        <p>{miembro.login}</p>
      </div>
    </Layout>
  );
};
