export interface Personaje {
  id: string;
  imagen: string;
  nombre: string;
  habilidades: string[];
  especialidad: string;
}

export const creaMiembroVacio = (): Personaje => ({
  id: "",
  especialidad: "",
  habilidades: [""],
  imagen: "",
  nombre: "",
});
