import React from "react";
import logo from "../../../public/logo_lemoncode.png";
import { MiContexto } from "@/core/contexto";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const { nombreUsuario } = React.useContext(MiContexto);

  return (
    <div className="contenedor-layout">
      <header className="layout-header">
        <h1>Aplicación de ejemplo</h1>
        <p>Bienvenido {nombreUsuario}</p>
      </header>
      {children}
      <footer className="layout-footer">
        <img src={logo} alt="Logo de lemoncode" />
      </footer>
    </div>
  );
};
