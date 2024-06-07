import { partida } from "./modelo";
import { generarNumeroAleatorio } from "./motor";
import { handleCompruebaClick, iniciaPartidaUi } from "./ui";

// TODO: Mover esto a DOM Loaded
partida.numeroParaAcertar = generarNumeroAleatorio();

document.addEventListener("DOMContentLoaded", iniciaPartidaUi);

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);

const botonNuevaPartida = document.getElementById("nueva-partida");
botonNuevaPartida?.addEventListener("click", iniciaPartidaUi);
