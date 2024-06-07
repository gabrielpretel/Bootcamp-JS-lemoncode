import { calcularCambio } from "./cambio";
import { Cambio } from "./model";

describe("calcularCambio", () => {
  it("debería devolver un throw si las entradas son undefined", () => {
    // Arrange
    const compra: any = undefined;
    const pago: any = undefined;

    // Act
    const resultado = () => calcularCambio(compra, pago);

    //Assert
    expect(resultado).toThrowError("Los parámetros no son correctos");
  });
  it("debería devolver un throw si las entradas son null", () => {
    // Arrange
    const compra: any = null;
    const pago: any = null;

    // Act
    const resultado = () => calcularCambio(compra, pago);

    //Assert
    expect(resultado).toThrowError("Los parámetros no son correctos");
  });
  it("2.5€, usuario paga 50€ --> devolución [2 de 20, 1 de 5, 2 de 1, 1 de 0.5]", () => {
    // Arrange
    const compra = 2.5;
    const pago = 50;

    // Act
    const resultado = calcularCambio(compra, pago);

    // Assert
    const resultadoEsperado: Cambio[] = [
      {
        moneda: 20,
        cuantos: 2,
      },
      {
        moneda: 5,
        cuantos: 1,
      },
      {
        moneda: 2,
        cuantos: 1,
      },
      {
        moneda: 0.5,
        cuantos: 1,
      },
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("4.82€, usuario paga 5.32€ --> devolución [1 de 0.5]", () => {
    // Arrange
    const compra = 4.82;
    const pago = 5.32;

    // Act
    const resultado = calcularCambio(compra, pago);

    // Assert
    const resultadoEsperado: Cambio[] = [{ moneda: 0.5, cuantos: 1 }];
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("2€, usuario paga 6€ --> devolución [2 de 2]", () => {
    // Arrange
    const compra = 2;
    const pago = 6;

    // Act
    const resultado = calcularCambio(compra, pago);

    // Assert
    const resultadoEsperado: Cambio[] = [{ moneda: 2, cuantos: 2 }];
    expect(resultado).toEqual(resultadoEsperado);
  });
});
