import * as ibantools from "ibantools";

interface ResultadoValidacionIBAN {
  valido: boolean;
  mensaje: string;
}

export const validarIBAN = (iban: string): ResultadoValidacionIBAN => {
  const IBANFormateado = ibantools.electronicFormatIBAN(iban);

  if (!IBANFormateado) {
    return {
      valido: false,
      mensaje:
        "El formato electrónico del IBAN no pudo ser validado o es incorrecto.",
    };
  }

  const { valid } = ibantools.validateIBAN(IBANFormateado);

  return {
    valido: valid,
    mensaje: valid ? "El IBAN es válido." : "El IBAN es inválido",
  };
};
