import { Actor, CrearBotonParams } from "./actores-listado.model";
import { obtenerActores, borrarActor } from "./actores-listado.api";

const editaActor = (id: string): void => {
  window.location.href = `../actores-editar/index.html?id=${encodeURIComponent(
    id
  )}`;
};

const borraActor = async (id: string): Promise<void> => {
  await borrarActor(id);
  alert("Actor borrado satisfactoriamente");

  const listado = document.querySelector("#listado-actores");
  if (listado && listado instanceof HTMLDivElement) {
    listado.innerHTML = "";
  }
  pintarActores();
};

const crearElementoImagen = (
  portada: string,
  titulo: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = portada;
  imagen.alt = titulo;
  return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

const crearBoton = (crearBotonParams: CrearBotonParams): HTMLButtonElement => {
  const { nombreClase, id: actorId, texto, onClick } = crearBotonParams;
  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.addEventListener("click", () => {
    onClick(actorId);
  });
  boton.classList.add(nombreClase);
  return boton;
};

const crearGrupoBotones = (id: string): HTMLDivElement => {
  const grupoBotones = document.createElement("div");
  grupoBotones.classList.add("grupo-botones");
  const botonEditar = crearBoton({
    id: id,
    nombreClase: "boton-editar",
    texto: "Editar",
    onClick: () => editaActor(id),
  });
  const botonBorrar = crearBoton({
    id,
    nombreClase: "boton-borrar",
    texto: "Borrar",
    onClick: () => borraActor(id),
  });

  grupoBotones.appendChild(botonEditar);
  grupoBotones.appendChild(botonBorrar);
  return grupoBotones;
};

const crearContenedorActor = (actor: Actor): HTMLDivElement => {
  const elementoActor = document.createElement("div");
  elementoActor.classList.add("actores-contenedor");

  const imagen = crearElementoImagen(actor.image, actor.name);
  elementoActor.appendChild(imagen);

  const nombre = crearElementoParrafo(actor.name);
  elementoActor.appendChild(nombre);

  const peliculas = crearElementoParrafo(actor.movies);
  elementoActor.appendChild(peliculas);

  const botones = crearGrupoBotones(actor.id);
  elementoActor.appendChild(botones);

  return elementoActor;
};

const pintarActores = async () => {
  const actores = await obtenerActores();
  const listado = document.querySelector("#listado-actores");

  if (listado && listado instanceof HTMLDivElement) {
    actores.forEach((actor) => {
      const contenedorActores = crearContenedorActor(actor);
      listado.appendChild(contenedorActores);
    });
  } else {
    throw new Error("No se encuentran actores");
  }
};

document.addEventListener("DOMContentLoaded", pintarActores);
