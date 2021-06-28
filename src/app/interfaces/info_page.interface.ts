export interface InfoPage{
    titulo?: string;
    email?: string;
    nombre_corto?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    equipo_trabajo?: any[];
}

export interface InfoTeam<Array> {
  frase?: string;
  nombre?: string;
  subtitutlo?: string;
  twitter?: string;
  url?: string;
}