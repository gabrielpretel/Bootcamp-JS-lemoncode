interface Grupos {
  nombre: string;
  fundacion: number;
  activo: boolean;
  genero: string;
}

const popRock: string = "🎵 Pop Rock";
const rock: string = "🎸 Rock";
const hardRock: string = "🤘 Hard Rock";
const clasica: string = "🎼 Clásica";

const formato: string =
  "background-color: green; font-size:18px; font-weight:bold";

const grupoA: Grupos = {
  nombre: "The Beatles",
  fundacion: 1960,
  activo: true,
  genero: popRock,
};

console.log(`%c${grupoA.nombre}`, formato);
console.log(` 
Año de fundación: ${grupoA.fundacion}
Activo: ${grupoA.activo}
Género:${grupoA.genero}`);

const grupoB: Grupos = {
  nombre: "Queen",
  fundacion: 1970,
  activo: false,
  genero: rock,
};

console.log(`%c${grupoB.nombre}`, formato);
console.log(` 
Año de fundación: ${grupoB.fundacion}
Activo: ${grupoB.activo}
Género:${grupoB.genero}`);

const grupoC: Grupos = {
  nombre: "AC DC",
  fundacion: 1973,
  activo: true,
  genero: hardRock,
};

console.log(`%c${grupoC.nombre}`, formato);
console.log(` 
Año de fundación: ${grupoC.fundacion}
Activo: ${grupoC.activo}
Género:${grupoC.genero}`);

const grupoD: Grupos = {
  nombre: "Ludwig van Beethoven",
  fundacion: 1770,
  activo: false,
  genero: clasica,
};

console.log(`%c${grupoD.nombre}`, formato);
console.log(` 
Año de fundación: ${grupoD.fundacion}
Activo: ${grupoD.activo}
Género:${grupoD.genero}`);

const grupoE: Grupos = {
  nombre: "The Rolling Stones",
  fundacion: 1962,
  activo: true,
  genero: rock,
};

console.log(`%c${grupoE.nombre}`, formato);
console.log(` 
Año de fundación: ${grupoE.fundacion}
Activo: ${grupoE.activo}
Género:${grupoE.genero}`);
