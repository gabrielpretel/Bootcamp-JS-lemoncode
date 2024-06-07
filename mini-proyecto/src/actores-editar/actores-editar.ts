import { obtenerActor, editarActor } from "./actores-editar.api";
import { Actor } from "./actores-editar.model";

const capturarIdDeLaUrl = (): string => {
  const parametrosURL = new URLSearchParams(window.location.search);
  const id = parametrosURL.get("id") || "";

  return decodeURIComponent(id);
};

const obtenActor = async (): Promise<Actor> => {
  const id = capturarIdDeLaUrl();
  const actor = await obtenerActor(id);

  return actor;
};

const pintarDatosActor = async (): Promise<void> => {
  const actor: Actor = await obtenActor();

  const nombre = document.querySelector("#name");
  const peliculas = document.querySelector("#movies");
  const biografia = document.querySelector("#bio");
  const imagen = document.querySelector("#image");

  if (nombre && nombre instanceof HTMLInputElement) {
    nombre.value = actor.name;
  } else {
    throw new Error("Error al obtener el nombre");
  }

  if (peliculas && peliculas instanceof HTMLInputElement) {
    peliculas.value = actor.movies;
  } else {
    throw new Error("Error al obtener las peliculas");
  }

  if (biografia && biografia instanceof HTMLTextAreaElement) {
    biografia.value = actor.bio;
  } else {
    throw new Error("Error al obtener la biografía");
  }

  if (imagen && imagen instanceof HTMLInputElement) {
    imagen.value = actor.image;
  } else {
    throw new Error("Error al obtener la imagen");
  }
};

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

const actualizaActor = async (evento: Event): Promise<void> => {
  evento.preventDefault();

  try {
    const actor: Actor = {
      id: capturarIdDeLaUrl(),
      name: obtenerValorCampo("name"),
      movies: obtenerValorCampo("movies"),
      bio: obtenerValorCampo("bio"),
      image: obtenerValorCampo("image"),
    };
    await editarActor(actor);
    alert("Se ha actualizado el actor correctamente");
  } catch (error) {
    alert("error");
  }
  volverAtras();
};

document.addEventListener("DOMContentLoaded", () => {
  pintarDatosActor();

  try {
    const formulario = document.querySelector("#formulario");
    if (formulario && formulario instanceof HTMLFormElement) {
      formulario.addEventListener("submit", actualizaActor);
    }
  } catch (error) {
    throw new Error("No se ha encontrado el formulario");
  }
});

const volverAtras = (): void => {
  window.location.href = "../actores-listado/index.html";
}

const botonAtras = document.querySelector(".button-back");
botonAtras?.addEventListener("click", volverAtras);


