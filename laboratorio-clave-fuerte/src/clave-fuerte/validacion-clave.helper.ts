import {
  CARACTERES_ESPECIALES,
  LETRAS_MAYUSCULAS,
  LETRAS_MINUSCULAS,
  NUMEROS,
} from "./constantes";

export const tieneMayusculasYMinusculas = (clave: string): boolean => {
  if (clave === undefined || clave === null) {
    throw "Los parámetros introducidos no son correctos";
  }

  if (clave === "") {
    throw "La clave no puede estar vacía";
  }

  const arrayClave = clave.split("");

  const contieneMayusculas = arrayClave.some((caracter) =>
    LETRAS_MAYUSCULAS.includes(caracter)
  );
  const contieneMinusculas = arrayClave.some((caracter) =>
    LETRAS_MINUSCULAS.includes(caracter)
  );

  return contieneMayusculas && contieneMinusculas;
};

export const tieneNumeros = (clave: string): boolean => {
  const contieneNumeros = clave
    .split("")
    .some((caracter) => NUMEROS.includes(caracter));

  return contieneNumeros;
};

export const tieneCaracteresEspeciales = (clave: string): boolean => {
  const contieneCaracteresEspeciales = clave
    .split("")
    .some((caracter) => CARACTERES_ESPECIALES.includes(caracter));

  return contieneCaracteresEspeciales;
};

export const tieneLongitudMinima = (clave: string): boolean => {
  const longitudClave = clave.length;

  return longitudClave >= 8 ? true : false;
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): boolean => {
  return clave.includes(nombreUsuario);
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): Boolean => {
  const contienePalabraComun = commonPasswords.some((palabraComun) =>
    clave.includes(palabraComun)
  );

  return contienePalabraComun;
};
