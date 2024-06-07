import { calcularEntrada } from "./cambio.helper";

describe("calcularEntrada", () => {
  it("Debería devolver un throw si las entradas son undefined", () => {
    //Arrange
    const cantidad: any = undefined;
    const moneda: any = undefined;

    //Act
    const resultado = () => calcularEntrada(cantidad, moneda);

    //Assert
    expect(resultado).toThrow("Los parámetros introducidos no son correctos");
  });
  it("Debería devolver un throw si las entradas son undefined", () => {
    //Arrange
    const cantidad: any = null;
    const moneda: any = null;

    //Act
    const resultado = () => calcularEntrada(cantidad, moneda);

    //Assert
    expect(resultado).toThrow("Los parámetros introducidos no son correctos");
  });
  it("Devolver 2.5, billete de 50 ---> {cuantos: 0, restoCantidad:2.5}", () => {
    // Arrange
    const cantidad = 2.5;
    const billeteMoneda = 50;
    // Act
    const resultado = calcularEntrada(cantidad, billeteMoneda);

    // Assert
    const expected = { cuantos: 0, restoCantidad: 2.5 };
    expect(resultado).toEqual(expected);
  });
  it("Devolver 7.25, billete de 5 ---> {cuantos: 1, restoCantidad:2.25}", () => {
    // Arrange
    const cantidad = 7.25;
    const billeteMoneda = 5;
    // Act
    const resultado = calcularEntrada(cantidad, billeteMoneda);

    // Assert
    const expected = { cuantos: 1, restoCantidad: 2.25 };
    expect(resultado).toEqual(expected);
  });
  it("Devolver 2.5, billete de 2 ---> {cuantos: 1, restoCantidad:0.5}", () => {
    // Arrange
    const cantidad = 2.5;
    const billeteMoneda = 2;
    // Act
    const resultado = calcularEntrada(cantidad, billeteMoneda);

    // Assert
    const expected = { cuantos: 1, restoCantidad: 0.5 };
    expect(resultado).toEqual(expected);
  });
});
