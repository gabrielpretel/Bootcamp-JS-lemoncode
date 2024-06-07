import {validarClave} from "./validacion-clave";
import {COMMON_PASSWORDS} from "./constantes";
describe("validarClave", () => {

    it("Debería devolver un objeto con esValida=true si la clave pasa todas las validaciones", () => {
      // Arrange
      const nombreUsuario = "userTest";
      const clave = "Clave#Segura123";
  
      // Act
      const resultado = validarClave(nombreUsuario, clave, COMMON_PASSWORDS);
  
      // Assert
      expect(resultado.esValida).toBe(true);
    });
  
    it("Debería devolver un error si la clave no tiene mayúsculas y minúsculas", () => {
      // Arrange
      const nombreUsuario = "userTest";
      const clave = "clave123#";
  
      // Act
      const resultado = validarClave(nombreUsuario, clave, COMMON_PASSWORDS);
  
      // Assert
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave debe tener mayúsculas y minúsculas",
      });
    });
  
  
    it("Debería devolver un error si la clave contiene el nombre del usuario", () => {
      // Arrange
      const nombreUsuario = "userTest";
      const clave = "userTest1@";
  
      // Act
      const resultado = validarClave(nombreUsuario, clave, COMMON_PASSWORDS);
  
      // Assert
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      });
    });
  
    it("Debería devolver un error si la clave contiene palabras comunes", () => {
      // Arrange
      const nombreUsuario = "userTest";
      const clave = "adminA1@";
  
      // Act
      const resultado = validarClave(nombreUsuario, clave, COMMON_PASSWORDS);
  
      // Assert
      expect(resultado).toEqual({
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      });
    });
  });
  