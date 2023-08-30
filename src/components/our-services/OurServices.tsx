import { CardService } from "./CardService";
import { data } from "./imagesServices";

export const OurServices = () => {
  return (
    <section className="w-full flex flex-col gap-8 px-8 mb-16">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-light sm:text-6xl lg:text-7xl">
          Nuestros <b className="font-bold">Servicios</b>
        </h2>
        <p className="text-center md:text-lg lg:w-[70%] lg:text-xl">
          Adéntrate en un mundo de elegancia y cuidado en <b>TuNailSpa</b>. Nos
          enorgullecemos de ofrecer una experiencia de manicura y pedicura que
          se basa en cinco pilares fundamentales: Innovación, Adaptabilidad,
          Sostenibilidad, Seguridad y Salubridad.
        </p>
      </div>
      <article className="w-full flex flex-wrap items-center justify-center gap-8">
        {data.map((dat) => (
          <CardService
            key={dat.id}
            urlImg={dat.urlImage}
            title={dat.title}
            subtitle={dat.subtitle}
          ></CardService>
        ))}
      </article>
    </section>
  );
};
