import React from "react";
import { Link } from "react-router-dom";
import { rutas } from "@/constantes";
import { Layout } from "../layout";

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className="contenedor">
        <h1>Home</h1>
        <div className="botones">
          <Link to={rutas.MIEMBROS}>
            <button>Miembros</button>
          </Link>
          <Link to={rutas.PERSONAJES}>
            <button>Personajes</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
