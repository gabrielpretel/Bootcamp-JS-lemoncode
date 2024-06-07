let puntuacionUsuario: number = 0;
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoInformacion = document.getElementById("informacion");
const imagenCarta = document.getElementById("carta-mostrada");
const botonDameCarta = document.getElementById("dame-carta");
const botonMePlanto = document.getElementById("me-planto");
const botonRestart = document.getElementById("restart");

const muestraPuntuacion = (): void => {
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${puntuacionUsuario}`;
  } else {
    console.error("no existe el elemento puntuación");
  }
};

const gameOver = (): void => {
  if (
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    elementoInformacion.innerHTML = `<div class="gameover">GAME OVER</div><br> Te has pasado!`;
    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

const partidaGanada = (): void => {
  if (
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    elementoInformacion.innerHTML = `<div class="win">HAS GANADO</div><br>¡Lo has clavado! ¡Enhorabuena!`;
    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

const compruebaPartida = (): void => {
  if (puntuacionUsuario > 7.5) {
    gameOver();
  }
  if (puntuacionUsuario === 7.5) {
    partidaGanada();
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const pintaURL = (urlCarta: string) => {
  if (imagenCarta && imagenCarta instanceof HTMLImageElement) {
    imagenCarta.src = urlCarta;
  }
};

const obtenerUrlCarta = (carta: number): string => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const mePlanto = () => {
  if (
    elementoInformacion &&
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    if (puntuacionUsuario < 5) {
      elementoInformacion.innerHTML = `Has sido muy conservador`;
    } else {
      puntuacionUsuario >= 5 && puntuacionUsuario < 6
        ? (elementoInformacion.innerHTML = `Te ha entrado el canguelo eh?`)
        : (elementoInformacion.innerHTML = `Casi casi...`);
    }

    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

const obtenerNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const obtenerCarta = (numeroAleatorio: number): number => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

const obtenerPuntuacionCarta = (carta: number): number => {
  return carta < 7 ? carta : 0.5;
};

const sumaPuntuacion = (puntos: number): number => {
  return puntuacionUsuario + puntos;
};

const setPuntuacionUsuario = (nuevoPunto: number): void => {
  puntuacionUsuario = nuevoPunto;
};

const dameCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  pintaURL(urlCarta);
  const puntos = obtenerPuntuacionCarta(carta);
  const nuevoPunto = sumaPuntuacion(puntos);
  setPuntuacionUsuario(nuevoPunto);
  muestraPuntuacion();
  compruebaPartida();
};

const reset = () => {
  window.location.reload();
};

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", dameCarta);
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
}

if (botonRestart && botonRestart instanceof HTMLButtonElement) {
  botonRestart.addEventListener("click", reset);
}
