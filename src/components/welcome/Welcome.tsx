type Props = {};

export const Welcome = (props: Props) => {
  return (
    <section className="w-full mb-16">
      <article className="w-full flex flex-col px-8 lg:px-16">
        <h2 className="text-4xl font-light sm:text-6xl lg:text-7xl md:text-end">
          Bienvenid@ a TuNailSpa
        </h2>
        <p className="text-sm font-medium uppercase pt-4 md:text-end md:text-base lg:text-xl">
          Tus manos y pies merecen lo mejor.
        </p>
        <p className="font-light pt-12 md:w-[80%] md:text-start md:text-lg lg:w-[60%] lg:text-xl">
          En <b>TuNailSpa</b> sabemos que tus manos y pies merecen lo mejor. Te
          ofrecemos una experiencia única en manicura, pedicura y estilos de
          uñas innovadores. Nuestro compromiso con la excelencia nos lleva a
          utilizar productos de alta calidad, respetuosos con el medio ambiente
          y libres de químicos dañinos.
        </p>
      </article>
    </section>
  );
};
