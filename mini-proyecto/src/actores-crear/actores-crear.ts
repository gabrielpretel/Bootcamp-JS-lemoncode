import { crearActor } from "./actores-crear.api";
import { Actor } from "./actores-crear.model";

const obtenerValorCampo = (campo: string): string => {
  const elementoCampo = document.querySelector(`#${campo}`);

  if (
    (elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement
  ) {
    return elementoCampo.value;
  } else {
    throw new Error("El campo no existe");
  }
};

const creaActor = async (evento: Event): Promise<void> => {
  evento.preventDefault();

  try {
    const actor: Actor = {
      name: obtenerValorCampo("name"),
      movies: obtenerValorCampo("movies"),
      bio: obtenerValorCampo("bio"),
      image: obtenerValorCampo("image"),
    };
    await crearActor(actor);
    alert("Se ha creado el actor correctamente");
  } catch (error) {
    alert("error");
  }
  window.location.href = "../actores-listado/index.html";
};

try {
  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", creaActor);
  }
} catch (error) {
  throw new Error("No se ha encontrado el formulario");
}
