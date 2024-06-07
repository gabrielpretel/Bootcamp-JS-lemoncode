import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  PersonajeDetalle,
  PersonajesGrid,
  MiembroDetalle,
  MiembrosGrid,
  Login,
} from "./paginas";

import { rutas } from "./constantes";

export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={rutas.HOME} element={<Login />} />
        <Route path={rutas.OPCIONES} element={<Home />} />
        <Route path={rutas.PERSONAJES} element={<PersonajesGrid />} />
        <Route path={rutas.DETALLE_PERSONAJES} element={<PersonajeDetalle />} />
        <Route path={rutas.MIEMBROS} element={<MiembrosGrid />} />
        <Route path={rutas.DETALLE_MIEMBROS} element={<MiembroDetalle />} />
      </Routes>
    </Router>
  );
};
