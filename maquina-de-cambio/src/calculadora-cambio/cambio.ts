import { Cambio } from "./model";
import { calcularEntrada } from "./cambio.helper";

const arrayBilletesMonedas = [
  50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

export const calcularCambio = (compra: number, pago: number): Cambio[] => {
  if (!compra || !pago) {
    throw "Los parámetros no son correctos";
  }

  let cambioRestante = pago - compra;

  let resultado: Cambio[] = arrayBilletesMonedas.reduce(
    (acumulador: Cambio[], billeteMoneda: number) => {
      if (cambioRestante === 0) {
        return acumulador;
      }

      const { cuantos, restoCantidad } = calcularEntrada(
        cambioRestante,
        billeteMoneda
      );

      cambioRestante = restoCantidad;

      return cuantos > 0
        ? [...acumulador, { moneda: billeteMoneda, cuantos }]
        : acumulador;
    },
    []
  );

  return resultado;
};
