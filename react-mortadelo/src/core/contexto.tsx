import React from "react";

interface ContextoUsuario {
  nombreUsuario: string;
  setNombreUsuario: (nombre: string) => void;
}

export const MiContexto = React.createContext<ContextoUsuario>({
  nombreUsuario: "",
  setNombreUsuario: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const MiContextoProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [nombreUsuario, setNombreUsuario] = React.useState<string>(
    "No hay nombre asignado"
  );

  return (
    <MiContexto.Provider value={{ nombreUsuario, setNombreUsuario }}>
      {children}
    </MiContexto.Provider>
  );
};
