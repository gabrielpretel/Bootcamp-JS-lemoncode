import React from "react";
import { Credencial, crearCredencialVacia } from "./modelo";
import { iniciarSesion } from "./login.api";
import { useNavigate } from "react-router-dom";
import { rutas } from "@/constantes";
import { MiContexto } from "@/core/contexto";

export const Login: React.FC = () => {
  const { setNombreUsuario } = React.useContext(MiContexto);
  const navigate = useNavigate();

  const [perfilUsuario, setPerfilUsuario] = React.useState<Credencial>(
    crearCredencialVacia()
  );

  const autenticar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    iniciarSesion(perfilUsuario).then((esValido) => {
      if (esValido) {
        setNombreUsuario(perfilUsuario.usuario);
        navigate(rutas.OPCIONES);
      } else {
        console.log("CLAVE O USUARIO NO CORRECTO");
      }
    });
  };

  return (
    <div className="contenedor-login">
      <h2>Inicio de sesión</h2>
      <form className="contenedor-formulario" onSubmit={autenticar}>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          placeholder="usuario"
          autoComplete="off"
          onChange={(e) =>
            setPerfilUsuario({ ...perfilUsuario, usuario: e.target.value })
          }
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="contraseña"
          autoComplete="off"
          id="password"
          onChange={(e) =>
            setPerfilUsuario({ ...perfilUsuario, password: e.target.value })
          }
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
