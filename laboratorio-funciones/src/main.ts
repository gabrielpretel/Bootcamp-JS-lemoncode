let turno: number = 1;
const numeroPantalla = document.getElementById("numero-turno");
const botonSiguiente = document.getElementById("siguiente");
const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const valorInput = document.getElementById("personalizado");
const botonCambiar = document.getElementById("boton-cambiar");

function sumaTurno(): void {
  turno++;
  if (
    numeroPantalla !== null &&
    numeroPantalla !== undefined &&
    numeroPantalla instanceof HTMLHeadingElement
  ) {
    numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
  }
}

function restaTurno(): void {
  if (turno > 1) {
    turno--;
  }
  if (
    numeroPantalla !== null &&
    numeroPantalla !== undefined &&
    numeroPantalla instanceof HTMLHeadingElement
  ) {
    numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
  }
}

function reset() {
  turno = 0;
  if (
    numeroPantalla !== null &&
    numeroPantalla !== undefined &&
    numeroPantalla instanceof HTMLHeadingElement
  ) {
    numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
  }
}

// Botón para que el operario pueda cambiar el turno a uno en concreto

function cambiarNumero(): void {
  if (
    valorInput !== null &&
    valorInput !== undefined &&
    valorInput instanceof HTMLInputElement
  ) {
    turno = parseInt(valorInput.value);
  }

  if (
    numeroPantalla !== null &&
    numeroPantalla !== undefined &&
    numeroPantalla instanceof HTMLHeadingElement
  ) {
    numeroPantalla.innerHTML = turno.toString().padStart(2, "0");
  }
}

if (
  botonSiguiente !== null &&
  botonSiguiente !== undefined &&
  botonSiguiente instanceof HTMLButtonElement
) {
  botonSiguiente.addEventListener("click", () => sumaTurno());
}

if (
  botonAnterior !== null &&
  botonAnterior !== undefined &&
  botonAnterior instanceof HTMLButtonElement
) {
  botonAnterior.addEventListener("click", () => restaTurno());
}

if (
  botonReset !== null &&
  botonReset !== undefined &&
  botonReset instanceof HTMLButtonElement
) {
  botonReset.addEventListener("click", () => reset());
}

if (
  botonCambiar !== null &&
  botonCambiar !== undefined &&
  botonCambiar instanceof HTMLButtonElement
) {
  botonCambiar.addEventListener("click", () => cambiarNumero());
}
