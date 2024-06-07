import React from "react";

export const App = () => {
  const [usuario, setUsuario] = React.useState({
    nombre: "Paco",
    apellido: "Torres",
    });   
  
  return (
    <>
      <h1>Nombre: {usuario.nombre} {usuario.apellido}</h1>
      <input
        value={usuario.nombre}
        onChange={(event) => {
          setUsuario({
            ...usuario,
            nombre: event.target.value,
          });
        }}
      />
      <input 
        value={usuario.apellido}
        onChange={(event)=>{
          setUsuario({
            ...usuario,
            apellido: event.target.value,
          });
        }}
      />
    </>
  );
};
