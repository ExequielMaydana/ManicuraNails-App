type Image = {
  id: number;
  title: string;
  subtitle: string;
  urlImage: string;
};

export const data: Image[] = [
  {
    id: 1,
    title: "Manicura",
    subtitle:
      "Descubre un mundo de creatividad para tus uñas con nuestras opciones de diseño y esmaltes de lujo.",
    urlImage: "/icons/manicure.svg",
  },
  {
    id: 2,
    title: "Pedicura",
    subtitle:
      "Sumérgete en la serenidad con nuestra pedicura diseñada para calmar tus pies cansados. Un oasis de bienestar y belleza",
    urlImage: "/icons/pedicure.svg",
  },
  {
    id: 3,
    title: "Cuidado Profesional de Uñas",
    subtitle:
      "Nuestras manos expertas miman tus uñas con tratamientos que revitalizan y embellecen.",
    urlImage: "/icons/nailsCare.svg",
  },
  // {
  //   id: 4,
  //   title: "Belleza a Tu Alcance",
  //   subtitle:
  //     "Descubre nuestra línea de cosméticos diseñada para realzar tu belleza natural.",
  //   urlImage: "/icons/cosmetics.svg",
  // },
];
