import { extraerURLsDeImagenes } from "./extraer-imagenes";

describe("extraerImagenes", () => {
  it.each([
    [
      "<img src='http://localhost:3000/./filemon.webp' />",
      {
        urls: ["http://localhost:3000/./filemon.webp"],
        mensaje: "Coincidencias procesadas",
      },
    ],
    [
      `<div class="card">
        <img src="http://localhost:3000/./mortadelo.webp" />
        <div class="container-description">
          <h2><span>Nombre: </span>Mortadelo</h2>
          <p><span>Especialidad: </span>Disfraces</p>
          <p>
            <span>Habilidades: </span>Camuflaje, Imitaciones, Huida rápida
          </p>
        </div>`,
      {
        urls: ["http://localhost:3000/./mortadelo.webp"],
        mensaje: "Coincidencias procesadas",
      },
    ],
    [
      `
      <div class="card">
      <img src=://localhost:3000/./mortadelo.webp" />
      <img src="http://localhost:30./filemon.webp" />
      `,
      {
        urls: [],
        mensaje: "No hay coincidencias",
      },
    ],
  ])(
    "Debería devolver para la cadena de texto %s el valor %s",
    (texto, expected) => {
      expect(extraerURLsDeImagenes(texto)).toEqual(expected);
    }
  );
});
