interface ResultadoFormatoIBAN {
  valido: boolean;
  mensaje: string;
  sucursal?: string | undefined;
  digitosDeControl?: string;
  numeroDeCuenta?: string;
}

export const comprobarFormatoIBAN = (IBAN: string): ResultadoFormatoIBAN => {
  const regex =
    /^ES\d{2}(\s|-)?(?<sucursal>\d{4})(\s|-)?(\d{4})(\s|-)?(?<digitosDeControl>\d{2})(\s|-)?(?<numeroDeCuenta>\d{10})$/;

  const coincidencia = regex.exec(IBAN);

  if (coincidencia) {
    const { sucursal, digitosDeControl, numeroDeCuenta } =
      coincidencia?.groups as any;

    return {
      valido: true,
      mensaje: "El IBAN está bien formado",
      sucursal: sucursal.replace(/[\s-]/g, ""),
      digitosDeControl: digitosDeControl.replace(/[\s-]/g, ""),
      numeroDeCuenta: numeroDeCuenta.replace(/[\s-]/g, ""),
    };
  } else {
    return {
      valido: false,
      mensaje: "El IBAN no está bien formado",
    };
  }
};
