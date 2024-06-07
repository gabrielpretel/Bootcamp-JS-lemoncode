import { comprobarFormatoIBAN } from "./validacion-formato-IBAN";

describe("comprobarFormatoIBAN", () => {
  test.each([
    [
      "ES21 1465 0100 72 2030876293",
      {
        valido: true,
        mensaje: "El IBAN está bien formado",
        sucursal: "1465",
        digitosDeControl: "72",
        numeroDeCuenta: "2030876293",
      },
    ],
    [
      "ES2114650100722030876293",
      {
        valido: true,
        mensaje: "El IBAN está bien formado",
        sucursal: "1465",
        digitosDeControl: "72",
        numeroDeCuenta: "2030876293",
      },
    ],
    [
      "ES21-1465-0100-72-2030876293",
      {
        valido: true,
        mensaje: "El IBAN está bien formado",
        sucursal: "1465",
        digitosDeControl: "72",
        numeroDeCuenta: "2030876293",
      },
    ],
    [
      "ES6621000418401234567891",
      {
        valido: true,
        mensaje: "El IBAN está bien formado",
        sucursal: "2100",
        digitosDeControl: "40",
        numeroDeCuenta: "1234567891",
      },
    ],
    [
      "ES21 1465 0100 72 203087629",
      { valido: false, mensaje: "El IBAN no está bien formado" },
    ],
    [
      "ES2114650100722030876293123",
      { valido: false, mensaje: "El IBAN no está bien formado" },
    ],
    [
      "FR2114650100722030876293",
      { valido: false, mensaje: "El IBAN no está bien formado" },
    ],
    [
      "ES21_1465_0100_72_2030876293",
      { valido: false, mensaje: "El IBAN no está bien formado" },
    ],
    [
      "ES211465010072203087629!",
      { valido: false, mensaje: "El IBAN no está bien formado" },
    ],
    [
      "XX6621000418401234567891",
      { valido: false, mensaje: "El IBAN no está bien formado" },
    ],
  ])("Debería devolver para el IBAN %s un objeto como %p", (IBAN, expected) => {
    expect(comprobarFormatoIBAN(IBAN)).toEqual(expected);
  });
});
