type Image = {
  id: number;
  title: string;
  subtitle: string;
  urlImage: string;
  link: string;
};

export const data: Image[] = [
  {
    id: 1,
    title: "Manicura",
    subtitle:
      "¡Tus manos hablan de ti! Cuídalas con nuestros servicios de manicura: limar y esmaltar, manicura básica, manicura SPA, etc.",
    urlImage: "/imgs_services/manicure.jpg",
    link: "/servicios/manicura",
  },
  {
    id: 2,
    title: "Esmalte Permanente",
    subtitle:
      "La novedosa técnica que ha revolucionado el mundo de las uñas: el único esmaltado permanente del mercado de larga duración y 10Free.",
    urlImage: "/imgs_services/permanentEnamel.jpeg",
    link: "/servicios/esmaltado-permanente",
  },
  {
    id: 3,
    title: "Uñas Esculpidas",
    subtitle:
      "Uñas esculpidas con las mejores técnicas del mercado: uñas de gel, uñas en acrílico… Tu estilo, nuestra maestría. ¡Ponte en buenas manos!",
    urlImage: "/imgs_services/sculptednailnail.jpeg",
    link: "/servicios/esmaltado-permanente",
  },
  {
    id: 4,
    title: "Pedicura",
    subtitle:
      "Siente el placer de una buena pedicura y mantén tus pies cuidados durante todo el año. Transformamos el cuidado de tus pies en una experiencia rejuvenecedora",
    urlImage: "/imgs_services/pedicure.jpg",
    link: "/servicios/esmaltado-permanente",
  },
];
