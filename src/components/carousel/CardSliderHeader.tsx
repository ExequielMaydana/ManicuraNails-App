import Image from "next/image";

type Props = {
  urlImg: string;
  title: string;
  subtitle: string;
};

export const CardSliderHeader = (props: Props) => {
  return (
    <article className="w-full flex h-[300px] items-center justify-between bg-slider-gradient sm:h-[350px] md:h-[400px] lg:h-[500px] lg:justify-evenly">
      <div className="flex flex-col gap-1 pl-4 lg:pl-12">
        <h1 className="text-xl uppercase font-light sm:text-5xl lg:text-7xl">
          {props.title}
        </h1>
        <p className="text-xs uppercase sm:text-sm lg:text-xl">
          {props.subtitle}
        </p>
        <button className="w-32 py-1 bg-black text-white uppercase text-sm mt-2 sm:text-base sm:w-48 lg:text-xl">
          Pide aquí tu cita
        </button>
      </div>
      <figure className="w-full h-full">
        <Image
          src={props.urlImg}
          alt={props.title}
          width={300}
          height={400}
          className="w-full h-full object-cover m:object-contain"
        />
      </figure>
    </article>
  );
};
