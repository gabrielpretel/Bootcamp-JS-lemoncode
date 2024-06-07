import { partida, MAXIMO_INTENTOS, Estado } from "./modelo";
import { comprobarNumero, iniciaPartidaMotor } from "./motor";

const elementoResultado = document.getElementById("resultado");
const elementoNumeroAcertar = document.getElementById("numero-para-acertar");

export const gestionarGameOver = (estado: Estado) => {
  if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
      elementoComprobar.disabled = true;
    } else {
      console.error(
        "gestionarGameOver: No se ha encontrado el elemento con id comprobar"
      );
    }
  }
};

export const muestraNumeroDeIntentos = () => {
  const elementoIntentos = document.getElementById("intentos");
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${partida.numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
  } else {
    console.error(
      "muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos"
    );
  }
};

export const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
  let mensaje: string = "";
  switch (estado) {
    case "NO_ES_UN_NUMERO":
      mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
      break;
    case "EL_NUMERO_ES_MAYOR":
      mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
      break;
    case "EL_NUMERO_ES_MENOR":
      mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
      break;
    case "ES_EL_NUMERO_SECRETO":
      mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
      break;
    case "GAME_OVER_MAXIMO_INTENTOS":
      mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  } else {
    console.error(
      "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
    );
  }
};

export const handleCompruebaClick = () => {
  let texto: string = "";
  const inputElement = document.getElementById("numero");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
  }
  const estado: Estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  partida.numeroDeIntentos++;
  muestraNumeroDeIntentos();
  gestionarGameOver(estado);
  mostrarNumeroSecreto(estado);
};

const resetMensajeResultado = () => {
  if(elementoResultado && elementoNumeroAcertar){
    elementoResultado.innerHTML = "";
    elementoNumeroAcertar.innerHTML ="";
  }
};

export const iniciaPartidaUi = () => {
  iniciaPartidaMotor();
  muestraNumeroDeIntentos();
  resetMensajeResultado();
};

const mostrarNumeroSecreto = (estado: Estado) => {
  if (estado === "GAME_OVER_MAXIMO_INTENTOS" && elementoNumeroAcertar) {
    elementoNumeroAcertar.innerHTML = `El número era ${partida.numeroParaAcertar}`;
  }
};
