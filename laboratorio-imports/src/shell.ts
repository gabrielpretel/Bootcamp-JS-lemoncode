import {
  botonDameCarta,
  botonMePlanto,
  botonRestart,
  mePlanto,
  dameCarta,
  iniciaPartidaUi,
} from "./ui";

document.addEventListener("DOMContentLoaded", iniciaPartidaUi);

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", dameCarta);
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
}

if (botonRestart && botonRestart instanceof HTMLButtonElement) {
  botonRestart.addEventListener("click", iniciaPartidaUi);
}
