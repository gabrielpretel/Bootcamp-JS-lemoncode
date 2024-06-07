import { comprobarFormatoIBAN } from "./validacion-formato-IBAN/validacion-formato-IBAN";
import "./validacion-IBAN/validacion-IBAN";
import { validarIBAN } from "./validacion-IBAN/validacion-IBAN";
import { BANCOS, Bancos } from "./constantes";

const elementoFormulario = document.querySelector(".formulario");
const elementoInputFormulario = document.querySelector("#iban");
const elementoInformacion = document.querySelector(".seccion-informacion");

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const elementoParrafo = document.createElement("p");

  elementoParrafo.innerHTML = `${texto}`;
  return elementoParrafo;
};

const obtenerValorInput = (): string => {
  if (
    elementoInputFormulario &&
    elementoInputFormulario instanceof HTMLInputElement
  ) {
    const valorInput = elementoInputFormulario.value;
    return valorInput;
  } else {
    throw new Error("No se encuentra el formulario");
  }
};

const pintarFormatoIBAN = (IBAN: string): void => {
  const { mensaje } = comprobarFormatoIBAN(IBAN);
  const elementoParrafo = crearElementoParrafo(mensaje);
  elementoInformacion?.appendChild(elementoParrafo);
};

const pintarValidacionIBAN = (IBAN: string): void => {
  const { mensaje } = validarIBAN(IBAN);
  const elementoParrafo = crearElementoParrafo(mensaje);
  elementoInformacion?.appendChild(elementoParrafo);
};

const pintarInformacionIBAN = (IBAN: string): void => {
  const { sucursal, digitosDeControl, numeroDeCuenta } =
    comprobarFormatoIBAN(IBAN);
  const elFormatoEsValido = comprobarFormatoIBAN(IBAN).valido;
  const elIBANesValido = validarIBAN(IBAN).valido;

  if (elFormatoEsValido && elIBANesValido) {
    if (sucursal && BANCOS) {
      const banco = buscarNombreBanco(BANCOS, sucursal);
      const elementoNombreDelBanco = crearElementoParrafo(
        `<b>Banco</b>: ${banco.nombre}`
      );
      elementoInformacion?.appendChild(elementoNombreDelBanco);
    }
    const elementoSucursal = crearElementoParrafo(
      `<b>Sucursal</b>: ${sucursal}`
    );
    elementoInformacion?.appendChild(elementoSucursal);

    const elementoDigitosDeControl = crearElementoParrafo(
      `<b>Digitos de control</b>: ${digitosDeControl}`
    );
    elementoInformacion?.appendChild(elementoDigitosDeControl);

    const elementoNumeroDeCuenta = crearElementoParrafo(
      `<b>Nº de cuenta</b>: ${numeroDeCuenta}`
    );
    elementoInformacion?.appendChild(elementoNumeroDeCuenta);
  }
};

const buscarNombreBanco = (
  bancos: Bancos[],
  numeroDeSucursal: string
): Bancos => {
  const banco = bancos.find((sucursal) => sucursal.numero === numeroDeSucursal);
  if (!banco) {
    throw new Error("El banco no existe");
  }
  return banco;
};

const pintarInformacion = (evento: Event): void => {
  evento.preventDefault();

  if (elementoInformacion && elementoInformacion instanceof HTMLElement) {
    elementoInformacion.innerHTML = "";
    const IBAN = obtenerValorInput();
    pintarFormatoIBAN(IBAN);
    pintarValidacionIBAN(IBAN);
    pintarInformacionIBAN(IBAN);
  } else {
    throw new Error("No existe el elemento información");
  }
};

const iniciarFormulario = () => {
  if (elementoFormulario && elementoFormulario instanceof HTMLFormElement) {
    elementoFormulario.addEventListener("submit", pintarInformacion);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
};

document.addEventListener("DOMContentLoaded", iniciarFormulario);
