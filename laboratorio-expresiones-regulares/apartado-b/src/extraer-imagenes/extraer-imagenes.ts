export interface ResultadoExtraerURLs {
  urls: string[];
  mensaje: string;
}

export const extraerURLsDeImagenes = (texto: string): ResultadoExtraerURLs => {
  const regex =
    /<img\s+src=["'](?<url>https?:\/\/localhost:3000\/\.\/\w+\.webp)["']\s*\/?>/g;

  const coincidencias = Array.from(texto.matchAll(regex));

  if (coincidencias.length === 0) {
    return { urls: [], mensaje: "No hay coincidencias" };
  }

  const coincidenciasURLs = coincidencias.map((info) =>
    info.groups ? info.groups.url : "URL inválida"
  );

  return { urls: coincidenciasURLs, mensaje: "Coincidencias procesadas" };
};
