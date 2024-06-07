import { MiContextoProvider } from "./core/contexto";
import { Rutas } from "./rutas";

export const App = () => {
  return (
    <MiContextoProvider>
      <Rutas />
    </MiContextoProvider>
  );
};
