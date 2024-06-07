import { COMMON_PASSWORDS } from "./constantes";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validacion-clave.helper";

describe("tieneMayusculasYMinusculas", () => {
  it("Debería devolver un throw si las entradas son undefined", () => {
    // Arrange
    const clave: any = undefined;

    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toThrow("Los parámetros introducidos no son correctos");
  });

  it("Debería devolver un throw si las entradas son null", () => {
    // Arrange
    const clave: any = null;

    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toThrow("Los parámetros introducidos no son correctos");
  });

  it("Debería devolver un throw si la entrada está vacía", () => {
    // Arrange
    const clave = "";

    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toThrow("La clave no puede estar vacía");
  });

  it(`Debería devolver false si la clave no tiene mayúsculas`, () => {
    // Arrange
    const clave = "iodsfgnm";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toBe(false);
  });

  it(`Debería devolver el objeto false si la clave no tiene minúsculas`, () => {
    // Arrange
    const clave = "IUERGJADF";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toBe(false);
  });

  it(`Debería devolver true si la clave tiene mayúsculas y minúsculas`, () => {
    // Arrange
    const clave = "iodDFfgnm";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado).toStrictEqual(true);
  });
});

describe("tieneNumeros", () => {
  it(`Debería devolver false si la clave no contiene números`, () => {
    // Arrange
    const clave = "laksjc";

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado).toBe(false);
  });

  it(`Debería devolver true si la clave contiene números`, () => {
    // Arrange
    const clave = "la34ksjc";

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado).toBe(true);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it(`Debería devolver false si la clave no contiene caracteres especiales`, () => {
    // Arrange
    const clave = "ljushdf4";

    // Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    expect(resultado).toBe(false);
  });

  it(`Debería devolver true si la clave contiene caracteres especiales`, () => {
    // Arrange
    const clave = "lj@ushdf4";

    // Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    expect(resultado).toBe(true);
  });
});

describe("tieneLongitudMinima", () => {
  it(`Debería devolver false si la clave no tiene al menos 8 caracteres`, () => {
    // Arrange
    const clave = "jdsfu";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Arrange
    expect(resultado).toBe(false);
  });

  it(`Debería devolver true si la clave tiene 8 caracteres`, () => {
    // Arrange
    const clave = "ksjd84js";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Arrange
    expect(resultado).toBe(true);
  });

  it(`Debería devolver true si la clave tiene más de 8 caracteres`, () => {
    // Arrange
    const clave = "jdsfujihsdgf85";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Arrange
    expect(resultado).toBe(true);
  });
});

describe("tieneNombreUsuario", () => {
  it(`Debería devolver true si la clave tiene el nombre de usuario`, () => {
    // Arrange
    const clave = "rodolfo";
    const nombreUsuario = "rodolfo";

    // Act
    const resultado = tieneNombreUsuario(clave, nombreUsuario);

    // Assert
    expect(resultado).toBe(true);
  });

  it(`Debería devolver false si la clave no tiene el nombre de usuario`, () => {
    // Arrange
    const clave = "jahsdg4";
    const nombreUsuario = "rodolfo";

    // Act
    const resultado = tieneNombreUsuario(clave, nombreUsuario);

    // Assert
    expect(resultado).toBe(false);
  });
});

describe("tienePalabrasComunes", () => {
  it(`Debería devolver true si la clave contiene palabras comunes`, () => {
    // Arrange
    const clave = "laskdadmin";

    // Act
    const resultado = tienePalabrasComunes(clave, COMMON_PASSWORDS);

    // Assert
    expect(resultado).toBe(true);
  });

  it(`Debería devolver true si la clave contiene palabras comunes`, () => {
    // Arrange
    const clave = "12345ojlksjkdv";

    // Act
    const resultado = tienePalabrasComunes(clave, COMMON_PASSWORDS);

    // Assert
    expect(resultado).toBe(true);
  });

  it(`Debería devolver false si la clave no contiene palabras comunes`, () => {
    // Arrange
    const clave = "ljkhbasdvrt3";

    // Act
    const resultado = tienePalabrasComunes(clave, COMMON_PASSWORDS);

    // Assert

    expect(resultado).toStrictEqual(false);
  });
});
