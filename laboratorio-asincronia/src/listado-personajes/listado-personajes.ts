import { obtenerPersonajes } from "./listado-personajes.api";
import { Personaje } from "./listado-personajes.model";

const elementoListadoPersonajes = document.querySelector(".listado-personajes");

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const elementoParrafo = document.createElement("p");
  elementoParrafo.textContent = texto;

  return elementoParrafo;
};

const crearElementoImagen = (
  imagen: string,
  nombre: string
): HTMLImageElement => {
  const elementoImagen = document.createElement("img");
  elementoImagen.src = `http://localhost:3000/${imagen}`;
  elementoImagen.alt = nombre;

  return elementoImagen;
};

const crearElementoHabilidades = (
  habilidades: string[]
): HTMLParagraphElement => {
  const elementoHabilidades = document.createElement("p");

  habilidades.forEach((habilidad, index) => {
    index === habilidades.length - 1 || habilidades.length === 1
      ? (elementoHabilidades.textContent += habilidad + ".")
      : (elementoHabilidades.textContent += habilidad + ", ");
  });

  return elementoHabilidades;
};

const crearElementoPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("contenedor-personaje");

  const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
  elementoPersonaje.appendChild(imagen);

  const nombre = crearElementoParrafo(personaje.nombre);
  nombre.classList.add("nombre");
  elementoPersonaje.appendChild(nombre);

  const especialidad = crearElementoParrafo(personaje.especialidad);
  especialidad.classList.add("especialidad");
  especialidad.innerHTML = `<b>Especialidad</b>:<br> ${especialidad.textContent}`;
  elementoPersonaje.appendChild(especialidad);

  const habilidades = crearElementoHabilidades(personaje.habilidades);
  habilidades.classList.add("habilidades");
  habilidades.innerHTML = `<b>Habilidades</b>:<br> <p>${habilidades.textContent?.toLowerCase()}</p>`;
  elementoPersonaje.appendChild(habilidades);

  return elementoPersonaje;
};

const pintarListadoPersonajes = (personaje: Personaje[]): void => {
  personaje.forEach((personaje) => {
    const elementoPersonaje = crearElementoPersonaje(personaje);

    if (
      elementoListadoPersonajes &&
      elementoListadoPersonajes instanceof HTMLDivElement
    ) {
      elementoListadoPersonajes.appendChild(elementoPersonaje);
    } else {
      throw new Error("No se ha encontrado el listado");
    }
  });
};

const filtrarPersonajes = async (evento: Event) => {
  evento.preventDefault();

  const personajes = await obtenerPersonajes();

  const elementoInput = document.getElementById("search");

  if (
    elementoListadoPersonajes &&
    elementoListadoPersonajes instanceof HTMLDivElement &&
    elementoInput &&
    elementoInput instanceof HTMLInputElement
  ) {
    elementoListadoPersonajes.innerHTML = "";

    const valorFiltro = elementoInput.value.toLowerCase();
    const personajesFiltrados = personajes.filter((personaje) => {
      return personaje.nombre.toLowerCase().includes(valorFiltro);
    });

    personajesFiltrados.length != 0
      ? pintarListadoPersonajes(personajesFiltrados)
      : noSeEncuentraElPersonaje();
  }
};

const noSeEncuentraElPersonaje = () => {
  const textoNoEncontrado = crearElementoParrafo(
    "No se ha encontrado ningún personaje con esa búsqueda"
  );
  textoNoEncontrado.classList.add("texto-no-encontrado");
  elementoListadoPersonajes?.appendChild(textoNoEncontrado);
};

const iniciarFormulario = () => {
  const formulario = document.querySelector("#formulario");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", filtrarPersonajes);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const personajes = await obtenerPersonajes();
  pintarListadoPersonajes(personajes);
  iniciarFormulario();
});
