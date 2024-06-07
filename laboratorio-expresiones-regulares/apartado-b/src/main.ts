import "./extraer-imagenes/extraer-imagenes";
import {
  extraerURLsDeImagenes,
  ResultadoExtraerURLs,
} from "./extraer-imagenes/extraer-imagenes";

const elementoFormulario = document.querySelector(".formulario");
const elementoInputFormulario = document.querySelector("textarea#html");
const elementoSeccionInformacion = document.querySelector(
  ".seccion-informacion"
);

const crearElementoDiv = (nombreClase: string): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase);
  return div;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

const crearElementoImagen = (url: string): HTMLImageElement => {
  const img = document.createElement("img");
  img.src = url;

  return img;
};

const obtenerValorTextArea = (): string => {
  if (
    elementoInputFormulario &&
    elementoInputFormulario instanceof HTMLTextAreaElement
  ) {
    const valorHTML = elementoInputFormulario.value;
    return valorHTML;
  } else {
    throw new Error("No se encuentra el input del formulario");
  }
};

const agregarImagen = (url: string) => {
  const divImagen = crearElementoDiv("imagen-capturada");
  elementoSeccionInformacion?.appendChild(divImagen);

  const elementoImagen = crearElementoImagen(url);
  divImagen.appendChild(elementoImagen);
};

const pintarURLs = (resultado: ResultadoExtraerURLs): void => {
  if (
    elementoSeccionInformacion &&
    elementoSeccionInformacion instanceof HTMLElement
  ) {
    elementoSeccionInformacion.innerHTML = "";

    if (resultado.urls.length === 0) {
      const mensajeParrafo = crearElementoParrafo(resultado.mensaje);
      elementoSeccionInformacion.appendChild(mensajeParrafo);
      return;
    }

    resultado.urls.forEach(agregarImagen);
  }
};

const extraerYMostrarImagenes = (evento: Event): void => {
  evento.preventDefault();

  const valorInput = obtenerValorTextArea();
  const obtenerURLs = extraerURLsDeImagenes(valorInput);
  pintarURLs(obtenerURLs);
};

document.addEventListener("DOMContentLoaded", () => {
  elementoFormulario?.addEventListener("submit", extraerYMostrarImagenes);
});
