import Image from "next/image";

export const ServiceToYou = () => {
  return (
    <section className="bg_img w-full flex flex-col items-center justify-evenly px-8 py-16 gap-8 mb-16 md:flex-row">
      <article className="flex flex-col gap-4">
        <h2 className="font-light text-4xl uppercase text-start">
          Este servicio es
          <br /> <b className="font-bold">para ti si:</b>
        </h2>
        <ul className="flex flex-col items-start justify-center font-semibold sm:text-lg">
          <li>⭐ Amas lucir unas uñas impecables.</li>
          <li>⭐ Buscas variedad y creatividad.</li>
          <li>⭐ Quieres un momento de relajación.</li>
          <li>⭐ Te preocupas por la salud de tus uñas.</li>
          <li>⭐ Deseas un servicio personalizado.</li>
          <li>⭐ Preparándote para un evento especial.</li>
          <li>⭐ Te importa la higiene y la limpieza.</li>
          <li>⭐ Quieres mimarte a ti misma o a alguien más.</li>
        </ul>
        <div className="sm:flex items-center justify-center">
          <button className="btn__servicetoyou mt-4 sm:text-lg">
            Pedir cita
          </button>
        </div>
      </article>
      <figure className="ct__photo flex items-center justify-center rounded-full overflow-hidden bg-red-400">
        <Image
          width={500}
          height={500}
          src="/imgs/indication_left.png"
          alt="img"
          className="w-full h-full object-cover pr-4 pt-4"
        />
      </figure>
    </section>
  );
};
