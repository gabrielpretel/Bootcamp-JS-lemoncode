import { COMMON_PASSWORDS } from "./constantes";
import { ValidacionClave } from "./model";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validacion-clave.helper";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones = [
    {
      valido: tieneMayusculasYMinusculas(clave),
      error: "La clave debe tener mayúsculas y minúsculas",
    },
    { valido: tieneNumeros(clave), error: "La clave debe tener números" },
    {
      valido: tieneCaracteresEspeciales(clave),
      error: "La clave debe tener caracteres especiales",
    },
    {
      valido: tieneLongitudMinima(clave),
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    },
    {
      valido: !tieneNombreUsuario(nombreUsuario, clave),
      error: "La clave no debe tener el nombre del usuario",
    },
    {
      valido: !tienePalabrasComunes(clave, commonPasswords),
      error: "La clave no debe de contener palabras comunes",
    },
  ];

  for (const { valido, error } of validaciones) {
    if (!valido) {
      return {
        esValida: false,
        error,
      };
    }
  }

  return {
    esValida: true,
  };
};

console.log(validarClave("gabriel", "asLk@ops1", COMMON_PASSWORDS));
