interface Image {
  id: number;
  urlImage: string;
  title: string;
  subtitle: string;
}

export const images: Image[] = [
  {
    id: 1,
    urlImage: "/img_slider/depilacion.png",
    title: "Depilación  100% sin dolor.",
    subtitle: "¡Suavidad y Confianza Garantizadas!",
  },
  {
    id: 2,
    urlImage: "/img_slider/manicure.png",
    title: "Manicura Profesional: Tu toque personal",
    subtitle: "¡Diseños Únicos para Ti!",
  },
  {
    id: 3,
    urlImage: "/img_slider/pedicura.png",
    title: "Nueva pedicura spa con agua.",
    subtitle: "¡Pedicura Profesional para Pies Radiantes!",
  },
];
