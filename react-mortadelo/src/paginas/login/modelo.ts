export interface Credencial {
  usuario: string;
  password: string;
}

export const crearCredencialVacia = (): Credencial => ({
  usuario: "",
  password: "",
});
