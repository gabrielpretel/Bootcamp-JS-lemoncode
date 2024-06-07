export interface Miembro {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export const obtenerMiembroById = (): Miembro => ({
  id: "",
  login: "",
  avatar_url: "",
  html_url: "",
});
